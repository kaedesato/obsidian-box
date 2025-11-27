---
modified: 2025-11-28T03:09
---


### 図書館
なんか無料で本が借りれる施設。

### vFlat Scan
Vrewの開発元が作ったスキャンアプリ。
本を裁断せずにスキャンできる。日本語のOCRも精度良さそう？
縦書きも行けるみたい。

月額500円（一応無料でも使える）
1ヶ月単位で契約できるので、まとめて借りて一気にスキャンみたいなことができる。

### Marker
スキャンしたPDFを、Markdownにするツール。
Marker自体にOCRの機能があるらしく、それ使ったほうがいいかも？
ローカルアプリ。CPUで動く。

MinerUというMarkerに似たツールも有る。

Markerなんかだめかも…


### Pandoc
Markdownをepubにするアプリ。
正直なくても良い。

---


### 環境構築

- スマホ
- 机
- スマホ固定する道具
- ライト（スマホのライトでも可？）


### いったん手元にある道具だけでやってみる！



### Markerのインストール
Python（PiP）が入っている前提

```shell
pip install marker-pdf[full]
pip install streamlit streamlit-ace
marker_gui
```

初回のサイトアクセス時にモデルのダウンロードとかを行うので少し時間がかかる。

CPUだと遅い…CUDAかROCm入れておいたほうがいい。


[TheRock/RELEASES.md at main · ROCm/TheRock · GitHub](https://github.com/ROCm/TheRock/blob/main/RELEASES.md)