---
{}
---
# SSH接続

基本形

`ssh user@server.ip`

例

code:ssh.sh

```Plain
 ssh user@192.168.1.10
```

これをしたあとに、userのログインパスワードを入れれば入れる。

ちなみに、ローカル環境では、PC名.localでドメイン指定できる

ポート変更

- `p 2222`などでできる。

例

code:ssh.sh

```Plain
 ssh user@server.local -p 2222
```

公開鍵認証で入る

- `i ./id_ed25519`などでできる。秘密鍵を指定。

例

code:ssh.sh

```Plain
 ssh -i ./id_ed25519 user@192.168.1.10
```

ポート変更＆秘密鍵認証

例

code:ssh.sh

```Plain
 ssh -i ./.ssh/id_ed25519 user@server.local -p 2222
```

長いのでSSHの設定ファイルを作ってサクッとアクセスできるようにする