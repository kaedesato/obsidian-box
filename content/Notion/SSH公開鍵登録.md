---
modified: 2025-01-05T18:37
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