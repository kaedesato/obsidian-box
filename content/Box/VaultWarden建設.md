---
modified: 2025-12-10T11:06
---

[[セルフホスト系アプリケーション]]

ubuntu環境を想定
SSHできたところからスタート

マシンスペックはメモリ1GBくらいあったほうがいい。

### 全貌

- docker-compose.ymlの1ファイルで管理
- Cloudflare TunnelでHTTPSとポート回りを解決
- cronでバックアップ


### アップデート
```Shell
sudo apt update && sudo apt upgrade -y
```


### Dockerのインストール

[https://docs.docker.com/engine/install/ubuntu/#installation-methods](https://docs.docker.com/engine/install/ubuntu/#installation-methods)

Aptに登録

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
```

インストール

```Shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

  

動作チェック

```Shell
sudo docker run --rm hello-world
```

`--rm`は実行が終わったらそのイメージを削除するというやつ。動作チェックするだけなので消してOK。
  

  

  

### Vault WardenをDocker-composeで起動

Docker イメージのダウンロード

```Shell
sudo docker pull vaultwarden/server:latest
```


```Bash
sudo docker run -d --name vaultwarden -v /vw-data/:/data/ --restart unless-stopped -p 3000:80 vaultwarden/server:latest
```

でポート番号を変えて起動できる

```shell
curl http://localhost:3000/
```

curlで起動できているか確認。




passkeyでログインできるようにする

[https://github.com/dani-garcia/vaultwarden/wiki/Enabling-U2F-(and-FIDO2-WebAuthn)-authentication](https://github.com/dani-garcia/vaultwarden/wiki/Enabling-U2F-(and-FIDO2-WebAuthn)-authentication)

```Shell
docker run -d --name vaultwarden \
  -e DOMAIN=https://vw.domain.tld \
  -v /vw-data/:/data/ \
  -p 80:80 \
  vaultwarden/server:latest
```

  

環境変数は`KEY: value` 辞書形式じゃないとだめ。
  

  

Adminにログインする方法設定してないけど、大丈夫かな・・・多分・・・

[https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page](https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page)

できた。

  

  

### Cloudflare tunnelの設定

Cloudflareのアカウント登録と、ドメイン登録を済ませておく。

Zero Trust → Networks → Tunnels
でCreate a tunnelを押す。
![[Pasted image 20250411150948.webp]]

![[Pasted image 20250411151005.webp]]
Cloudflaredを選択


名前を入力して、
この画面でUbuntuであれば
Debianと適切なアーキテクチャ（通常であれば64bit）を選んで、
下のコードをコピペして実行。
![[Pasted image 20250411151345.webp]]




### VaultWardenのアップデート
