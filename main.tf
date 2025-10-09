terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.100.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

# ------------------- VPC -------------------
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "exilieen-vpc"
  }
}

# ------------------- Subnet -------------------
resource "aws_subnet" "main_subnet" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "eu-north-1a"
  tags = {
    Name = "exilieen-subnet"
  }
}

# ------------------- Security Group -------------------
resource "aws_security_group" "app_sg" {
  name        = "exilieen-sg"
  description = "Allow HTTP and backend ports"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP frontend"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Backend port"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ------------------- Dynamic AMI -------------------
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

# ------------------- EC2 Instance -------------------
resource "aws_instance" "app_server" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.main_subnet.id
  vpc_security_group_ids      = [aws_security_group.app_sg.id]
  key_name                    = "stockholmac2key.pem"
  associate_public_ip_address = true

  tags = {
    Name = "exilieen-app-server"
  }

  user_data = <<-EOF
              #!/bin/bash
              apt-get update -y
              apt-get upgrade -y
              apt-get install -y git nginx nodejs npm

              # Pull project
              cd /home/ubuntu
              git clone https://github.com/shivamshete92/exilieen-full-project.git

              # Frontend setup
              cd exilieen-full-project/frontend
              npm install
              nohup npm start &

              # Backend setup
              cd ../backend
              npm install
              nohup npm start &

              # Start Nginx
              systemctl enable nginx
              systemctl start nginx
              EOF
}

# ------------------- SNS Topic -------------------
resource "aws_sns_topic" "alerts" {
  name = "exilieen-alerts"
}

resource "aws_sns_topic_subscription" "email" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = "shivamshete92@gmail.com"
}

# ------------------- CloudWatch Alarm -------------------
resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "exilieen-ec2-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "1"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "60"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "CPU > 80% on EC2 instance"
  alarm_actions       = [aws_sns_topic.alerts.arn]
  dimensions = {
    InstanceId = aws_instance.app_server.id
  }
}
