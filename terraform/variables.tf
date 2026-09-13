variable "aws_region" {
  description = "AWS region to deploy resources in."
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type."
  type        = string
  default     = "t3.small"
}

variable "key_name" {
  description = "Name of the AWS EC2 key pair."
  type        = string
}

variable "my_ip" {
  description = "Your public IP address in CIDR notation."
  type        = string
}
