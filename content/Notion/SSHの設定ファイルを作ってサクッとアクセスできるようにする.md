---
{}
---
# SSHの設定ファイルを作ってサクッとアクセスできるようにする

ssh configにかく

code:config

```Plain
 Host indigo
   HostName 157.120.xxx.xxx
   User ubuntu
   IdentityFile ./.ssh/indigo
   Port 2222
```

など