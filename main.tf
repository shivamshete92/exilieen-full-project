# ------------------- VPC & Networking -------------------
resource "aws_vpc" "main_vpc" {
  cidr_block = "10.0.0.0/16"
  tags       = { Name = "exilieen-vpc" }
}

resource "aws_subnet" "main_subnet" {
  vpc_id                  = aws_vpc.main_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  tags                    = { Name = "exilieen-subnet" }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main_vpc.id
  tags   = { Name = "exilieen-igw" }
}

resource "aws_route_table" "main_rt" {
  vpc_id = aws_vpc.main_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = { Name = "exilieen-rt" }
}

resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.main_subnet.id
  route_table_id = aws_route_table.main_rt.id
}

# ------------------- Security Group -------------------
resource "aws_security_group" "allow_ports" {
  name        = "exilieen-sg"
  description = "Allow SSH, HTTP 80, Backend 5000"
  vpc_id      = aws_vpc.main_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ------------------- EC2 Instance -------------------
resource "aws_instance" "app_server" {
  ami = "ami-0a716d3f3b16d290c"  # Ubuntu 22.04 LTS (Jammy Jellyfish) in eu-north-1
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.main_subnet.id
  security_groups             = [aws_security_group.allow_ports.name]
  key_name                    = var.key_name
  associate_public_ip_address = true

  # User data for deploying frontend & backend
  user_data = <<-EOF
              #!/bin/bash
              sudo apt-get update -y
              sudo apt-get install -y git python3-pip nginx
              cd /home/ubuntu
              git clone ${var.github_repo} project
              cd project

              # --- Frontend (Port 80) ---
              sudo cp -r frontend/* /var/www/html/
              sudo systemctl restart nginx

              # --- Backend (Port 5000) ---
              sudo apt-get install -y python3-venv
              cd backend
              python3 -m venv venv
              source venv/bin/activate
              pip install -r requirements.txt
              nohup python3 app.py --port 5000 &
              EOF

  tags = { Name = "exilieen-instance" }
}

# ------------------- SNS Topic & Subscription -------------------
resource "aws_sns_topic" "alerts" {
  name = "exilieen-alerts"
}

resource "aws_sns_topic_subscription" "email_sub" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}

# ------------------- CloudWatch Alarms -------------------
resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "HighCPUUsage"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Alarm when CPU exceeds 80%"
  alarm_actions       = [aws_sns_topic.alerts.arn]
  dimensions = {
    InstanceId = aws_instance.app_server.id
  }
}

resource "aws_cloudwatch_metric_alarm" "status_check_failed" {
  alarm_name          = "StatusCheckFailed"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "StatusCheckFailed_System"
  namespace           = "AWS/EC2"
  period              = 300
  statistic           = "Maximum"
  threshold           = 1
  alarm_description   = "Alarm when system status check fails"
  alarm_actions       = [aws_sns_topic.alerts.arn]
  dimensions = {
    InstanceId = aws_instance.app_server.id
  }
}

