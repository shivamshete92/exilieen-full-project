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
    description = "
