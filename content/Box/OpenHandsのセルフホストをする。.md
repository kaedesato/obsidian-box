---
modified: 2025-12-10T11:06
---


DevinのOSS版
Clineのようなペアプログラミングと違って、丸投げして寝てる間に開発してくれる。
※ゆうて放置はできない



### Dockerのインストール
[[ubuntuにDockerをインストール]]



```sh
docker pull docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik

docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.openhands:/.openhands \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    docker.all-hands.dev/all-hands-ai/openhands:0.51
```

### tavilyに登録する

検索の機能を使うのに必要。
月に1000回までの検索は無料？
それ以降は一回の検索ごとに1円。