---
Q: false
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:35
modified: 2024-12-27T22:35
created: 2024-12-27T22:35
---
  

20Wを24時間動かすと1か月で500円くらいの電気代になってしまう。

クラウドのほうが圧倒的に安い。  
ただし、ローカルにストレージサーバーとかMinecraftサーバーがある人とかはついでに入れたりもできる。  

  

  

リバースプロキシ的なものには、毎度おなじみCloudflare Tunnnelを使う。

  

  

[[ubuntuにDockerをインストール]]

を終わらせておく

  

```Shell
sudo docker volume create n8n_data
```

  

  

Docker-composeで立ち上げる

```YAML
version: "3.7"

services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=n8n.kaedesato.com
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://n8n.kaedesato.com/
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
    external: true
```

  

  

アップデート

```Shell
# Pull latest version
docker compose pull

# Stop and remove older version
docker compose down

# Start the container
docker compose up -d
```