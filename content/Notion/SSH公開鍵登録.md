---
Q: false
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:36
---
# SSH公開鍵登録

`scp`か`ssh-copy-id`

なんかwindowsだと`ssh-copy-id`が使えなかったので、従来どおり`scp`で送信して、

code:ssh-auth.sh

```Plain
 cat ~/id_ed25519.pub >> ./.ssh/authorized_keys
 chmod 600 ./.ssh/authorized_keys
```

をすればOK