---
Q: true
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:36
---
# SSH鍵作成

code:ssh-keygen.sh

```Plain
    ssh-keygen -t ed25519
```

でOK

質問にサクサク答えていくと、公開鍵と秘密鍵が作られる

パスワード認証はあればいいけど、なくてもいい。

パスワードをつけるときは

code:ssh-keygen-password.sh

```Plain
 ssh-keygen -t ed25519 -a 128
```

作成したら登録する

→SSH公開鍵登録