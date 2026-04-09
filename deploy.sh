#!/bin/bash
# AutoWorkflows.AI — One-shot deployment script for Hostinger VPS
# Run this ON the VPS after SSHing in:
#   ssh u514737962@147.79.65.176
#   bash deploy.sh

set -e

echo "=== AutoWorkflows.AI Deployment ==="
echo ""

# 1. Install Node.js 20 if not present
if ! command -v node &> /dev/null; then
    echo "[1/7] Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "[1/7] Node.js already installed: $(node -v)"
fi

# 2. Install PM2 globally
if ! command -v pm2 &> /dev/null; then
    echo "[2/7] Installing PM2..."
    sudo npm install -g pm2
else
    echo "[2/7] PM2 already installed"
fi

# 3. Install nginx
if ! command -v nginx &> /dev/null; then
    echo "[3/7] Installing Nginx..."
    sudo apt-get install -y nginx
else
    echo "[3/7] Nginx already installed"
fi

# 4. Clone or update repo
APP_DIR="$HOME/aisite-white"
if [ -d "$APP_DIR" ]; then
    echo "[4/7] Updating existing repo..."
    cd "$APP_DIR"
    git fetch origin main
    git reset --hard origin/main
else
    echo "[4/7] Cloning repo..."
    cd "$HOME"
    git clone https://github.com/deepak-adetech/aisite-white.git
    cd "$APP_DIR"
fi

# 5. Install deps and build
echo "[5/7] Installing dependencies and building..."
npm install
npm run build

# 6. Start/restart with PM2
echo "[6/7] Starting app with PM2..."
pm2 delete aisite-white 2>/dev/null || true
pm2 start npm --name "aisite-white" -- start -- -p 3000
pm2 save

# 7. Configure Nginx
echo "[7/7] Configuring Nginx..."
sudo tee /etc/nginx/sites-available/projects.autoworkflows.ai > /dev/null << 'NGINX'
server {
    listen 80;
    server_name projects.autoworkflows.ai;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/projects.autoworkflows.ai /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx

echo ""
echo "=== Deployment complete! ==="
echo "Site should be live at: http://projects.autoworkflows.ai"
echo ""
echo "To add SSL, run:"
echo "  sudo apt-get install -y certbot python3-certbot-nginx"
echo "  sudo certbot --nginx -d projects.autoworkflows.ai --non-interactive --agree-tos -m hello@autoworkflows.ai"
echo ""
echo "To redeploy after code changes, run:"
echo "  cd ~/aisite-white && git pull origin main && npm run build && pm2 restart aisite-white"
