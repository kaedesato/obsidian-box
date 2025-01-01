---
Q: true
pin: false
最終更新日時: Invalid date
関連:
  - "[[ubuntu]]"
2ホップリンク: https://www.notion.so/2822c23d98634ee5b77844cf3e8b125d, https://www.notion.so/2ada653c5a1a418cb38fe4229087dfe4, https://www.notion.so/7497737199d94b8d81c57d0eb4698245, https://www.notion.so/7ce14d3a6bc0447faa71bc56b605aebc, https://www.notion.so/f3dc85f976e640ceaf469d105f4bc988, https://www.notion.so/f4d26d3c521b4fb5999d72f3c2601026
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
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