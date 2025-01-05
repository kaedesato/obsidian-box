---
{}
---
# Ubuntu serverにGrowiをインストール

USBテザリングしなきゃいけない環境だった

code:shell

```Plain
 ip l
 sudo ip link set usb0 up
 sudo dhclient
```

code:shell

```Plain
 sudo apt update
 sudo apt upgrade -y
 sudo apt install docker
 sudo apt install docker-compose
```