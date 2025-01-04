---
modified: 2025-01-02T00:35
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