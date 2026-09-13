
#!/bin/bash

set -e

LOG_FILE="/var/log/portfolio-bootstrap.log"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=========================================="
echo "Starting Portfolio Server Bootstrap"
echo "=========================================="


# --------------------------------------------------
# 1. Update Ubuntu
# --------------------------------------------------

echo "[1/8] Updating system..."

apt-get update -y
apt-get upgrade -y


# --------------------------------------------------
# 2. Install basic dependencies
# --------------------------------------------------

echo "[2/8] Installing dependencies..."

apt-get install -y \
  curl \
  wget \
  git \
  unzip \
  zip \
  vim \
  nano \
  ca-certificates \
  gnupg \
  lsb-release \
  software-properties-common \
  apt-transport-https \
  build-essential


# --------------------------------------------------
# 3. Install Docker
# --------------------------------------------------

echo "[3/8] Installing Docker..."

install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc

chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" \
  > /etc/apt/sources.list.d/docker.list

apt-get update -y

apt-get install -y \
  docker-ce \
  docker-ce-cli \
  containerd.io \
  docker-buildx-plugin \
  docker-compose-plugin

systemctl enable docker
systemctl start docker


# --------------------------------------------------
# 4. Give Ubuntu user Docker permissions
# --------------------------------------------------

echo "[4/8] Giving ubuntu user Docker permissions..."

usermod -aG docker ubuntu

echo "Docker group added to ubuntu user."


# --------------------------------------------------
# 5. Install kubectl
# --------------------------------------------------

echo "[5/8] Installing kubectl..."

curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

rm -f kubectl

echo "kubectl version:"
kubectl version --client


# --------------------------------------------------
# 6. Install Minikube#
# --------------------------------------------------

echo "[6/8] Installing Minikube..."

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

install minikube-linux-amd64 /usr/local/bin/minikube

rm -f minikube-linux-amd64

echo "Minikube version:"
minikube version


# --------------------------------------------------
# 7. Create deployment directory
# --------------------------------------------------

echo "[7/8] Creating deployment directory..."

mkdir -p /opt/portfolio

mkdir -p /opt/portfolio/k8s

mkdir -p /opt/portfolio/app

chown -R ubuntu:ubuntu /opt/portfolio

echo "Deployment directory created:"
ls -la /opt/portfolio


# --------------------------------------------------
# 8. Final checks
# --------------------------------------------------

echo "[8/8] Running final checks..."

echo "------------------------------------------"
echo "Docker:"
docker --version

echo "------------------------------------------"
echo "kubectl:"
kubectl version --client

echo "------------------------------------------"
echo "Minikube:"
minikube version

echo "------------------------------------------"
echo "Deployment directory:"
ls -la /opt/portfolio

echo "=========================================="
echo "Bootstrap completed successfully!"
echo "=========================================="

echo "IMPORTANT:"
echo "Log file: $LOG_FILE"
echo "Deployment directory: /opt/portfolio"
echo ""
echo "Log out and back in for the Docker group permission"
echo "to take effect."

