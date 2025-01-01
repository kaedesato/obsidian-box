---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[ubuntu]]"
2ホップリンク: https://www.notion.so/2822c23d98634ee5b77844cf3e8b125d, https://www.notion.so/2ada653c5a1a418cb38fe4229087dfe4, https://www.notion.so/7497737199d94b8d81c57d0eb4698245, https://www.notion.so/7ce14d3a6bc0447faa71bc56b605aebc, https://www.notion.so/f3dc85f976e640ceaf469d105f4bc988, https://www.notion.so/f4d26d3c521b4fb5999d72f3c2601026
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
---
  

> [!info] Install Docker Engine on Ubuntu  
> Jumpstart your client-side server applications with Docker Engine on Ubuntu.  
> [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)  

  

  

```Shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

  

test

```Shell
 sudo docker run --rm hello-world
```

  

  

ユーザーでDockerを使えるようにする。（あんま意味ない）