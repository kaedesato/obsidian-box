---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[AIにイラストを書かせてみる]]"
  - "[[SDで使えるイラスト系モデル]]"
  - "[[SDのSampler]]"
  - "[[SD web UI]]"
  - "[[sd web uiでマルチGPUを使う]]"
  - "[[SD Web UIをリモートで使う]]"
2ホップリンク: https://www.notion.so/d07a20496e03461aaa5eec0c9ac857af
date: 2024-12-27T22:36
---
  
  
2024年8月18日

結局ローカル環境はあってもいい

StabilityMatrixでポータブルモードにすると色々便利

2M karrasの指定方法わかった。

  

  

  

2024年7月5日 最近の動き

- 結構クラウドサービス増えた
    - NovelAIみたいなやつ
    - PixAI
    - SeaArt
    - nijijourny
- pixAIとSeaArtはLora作ったり使ったりできる
- AvalabなるVRM入れてイラスト作れるサイトできた。

# Q

基本のき

[Stable](https://www.notion.soDiffusion)というオープンソースの画像生成AIの登場によりAIが進化した。

現在 2021年2月1日 主流な生成方法は

- イラスト生成に特化したブラウザで使えるNovelAI  
- Stable DiffusionをUIで使えるSDwebUI  
の二つ  

Stable Diffusionに関連する主要技術

- SD web UI  
- Stable DiffusionをUIで使えるようにしたもの  
- 現在は多様な拡張機能が実装されている  
- Lsmith  
- TensorRTによる高速化＆GUI  
- 追加学習  
- DreamboothとFine Turningの2つのやり方。  
- LoRAという手法も  
- 現在はLoRAが主流？  
- 普通の追加学習とは何が違うのか、多分元の学習データにマージするかどうか  
- マージ  
- 二つの学習モデルをミックスする  
- ミックスの比率などがいろいろあり、そのレシピはカクテルなどと呼ばれている。  
- Sampler  
- よくわからない。 ノイズ処理のやり方らしい？  
- SDのSampler  

SD web UIのいろいろ

- 高速化  
- RAMキャッシュ  
- ckpt→safetensor  
- Pixelization イラストをピクセルアートへ  
- Controlnet 姿勢を指定  
- posex  
- UPscaler 画像を高画質化  
- pix2pix 画像を修正  

SDで使えるイラスト系モデル（マージによって、やばい量がある）

- Waifu  
- NovelAIリーク  
- Anything  
- AbissOrangeMix  
などなど。。。