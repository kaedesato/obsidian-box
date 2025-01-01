---
Q: true
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
---
# SSHポート変更＆パスワード認証を不可にする

`sudo nano /etc/ssh/sshd_config`

(viを使いたい人はviを使って)

`#`を取ってコメントを外して

`Port 2222`

`PasswordAuthentication no`

にする

https://scrapbox.io/files/6460c00c9929a2001b8540b0.png

こんな感じ

からのSSHのサービスを再起動

`systemctl restart sshd`