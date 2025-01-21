---
modified: 2025-01-05T18:37
---
# OBSの設定

とりあえずNVENCを私は使うのでNVENCについて解説

OBSでHEVCが使えるようになったああやったー！YouTubeが対応しているよ。

- レート制御
    - 結論としては、CBR
    - 視聴環境（DEC）のバッファリングの関係でLive streamではCBRが推奨される。
        - https://help.twitch.tv/s/article/broadcast-guidelines?language=ja
    - Rate Control: Select CBR. This determines the rate at which frames are going to be encoded.
- ビットレート
    - Twitchでは6000kbps
    - YouTubeでは9000kbps
- キーフレーム間隔
    - 結論としては2
    - キーフレームは別名iframe
        - Intra-frame
    - YouTubeもTwitchも2にしろって言ってる。
- プリセット
    - よくわかんないけど、各所でQualityで良いって書いてる。
        - Nvidia、Twitchなどなど
        - 調べてもほとんど情報が出てこなかったです。
        - 多分P0~P7みたいな部分の話だけど、じゃあLow latencyってなんやねんっていう話でもある。
        - https://developer.nvidia.com/blog/introducing-video-codec-sdk-10-presets/
    - Max Qualityは2PassENC
    - Low latency各種は、Bフレームを用いない。
    - https://www.reddit.com/r/obs/comments/aeji4t/please_explain_the_differences_between_nvenc/
- プロファイル
    - 結論としては、High
        - 今の時代Highでも問題なくENC/DECできる
    - これはH.264の仕様に書いてある。
        - https://www.networkcamera.work/entry/h-264%e3%83%97%e3%83%ad%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab%e3%81%ae%e9%81%95%e3%81%84%e3%81%a8h-265%e3%81%ae%e7%99%bb%e5%a0%b4/
        - https://ja.wikipedia.org/wiki/H.264\#プロファイル
    - BaseLineはBフレームを使わないエンコード
    - MainはBフレームを使用するエンコード
    - Highは可変ブロックサイズを採用したエンコード
        - これはHD（1920*1080以上の解像度を想定したもの）
    - HEVCならHDRを使わないのであればmainでok、HDRならMain10
- 最大BframeとLook-ahead
    - 結論は、Look-aheadを有効化して、最大Bフレームを4
    - Look-ahead
        - 実質的には2パス
        - 有効化すると多分遅延が増える。
    - 最大Bframeは、多分PフレームとP（or I）フレームの間のフレーム数の上限
    - Twich公式ガイドには２って書いてある
    - Look-aheadを有効化するメリットは、Iフレームを適切な配置にしてくれる。
        - 多分、平均変化量が大きいところを自動的にIフレームにしてくれる。

https://www.nvidia.com/en-us/geforce/guides/broadcasting-guide/

https://gyazo.com/afe61c0729b39362dbbbf7226b6722c5

https://gyazo.com/2402f87800b7d5d062e7f305d17db761

https://gyazo.com/42d12d916cc9c63915ab0a5f4c990136