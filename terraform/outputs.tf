output "instance_id" {
  description = "The ID of the EC2 instance."
  value       = aws_instance.portfolio.id
}

output "public_ip" {
  description = "The public IP address of the EC2 instance."
  value       = aws_instance.portfolio.public_ip
}

output "public_dns" {
  description = "The public DNS name of the EC2 instance."
  value       = aws_instance.portfolio.public_dns
}

output "website_url" {
  description = "The URL of the portfolio website."
  value       = "http://${aws_instance.portfolio.public_ip}"
}
