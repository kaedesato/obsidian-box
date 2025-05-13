---
modified: 2025-05-13T13:51
---


ハードウェア周り
Ubuntuなどにできるようにする。

Oryxに必要なポートを開けておく。
80, 443, 1935, 8000/udp, 10080/udp

| ポート番号 | 意味     |
| ----- | ------ |
| 80    | HTTP   |
| 443   | HTTPS  |
| 1935  | RTMP   |
| 8000  | WebRTC |
| 10080 | SRT    |


> [!tip]
> Dockerが動く環境なら何でも動きます。

ソフトウェア周り
- Dockerをインストールする。
- DockerでOryxを起動する。
- (Optional) Docker-compose.yamlを作って、起動構成を保存する。




![[ubuntuにDockerをインストール]]



Oryxの起動コマンド
```sh
docker run --restart always -d -it --name oryx -v $HOME/data:/data \
  -p 80:2022 -p 443:2443 -p 1935:1935 -p 8000:8000/udp -p 10080:10080/udp \
  ossrs/oryx:5
```


Docker-compose.yaml
```yaml
version: '3.8'
services:
  oryx:
    image: ossrs/oryx:5
    container_name: oryx
    restart: always
    ports:
      - "80:2022"
      - "443:2443"
      - "1935:1935"
      - "8000:8000/udp"
      - "10080:10080/udp"
    volumes:
      - $HOME/data:/data
```


`$HOME/data`を`./data`に変えてもいい。
そうすると、実行された場所に永続データが保存される。