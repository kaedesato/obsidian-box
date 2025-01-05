---
{}
---
# Whisper

Whisper

- OpenAIが作った、Speech to Text  
- なんと、無料。  

Faster Whisper

- Whisperを高速化したやつ  
- めっちゃいいらしい  

Whisper cpp

- CPUで動かせるようにした、C++バージョンのWhisper

Whisper webUI

- Whisper をGUIで動かせるようにしたもの。GradioというGUIツールを使っている。（sd webuiと同じ）  
- Faster Whisperも動かせる。  
- YouTubeの動画とかも読み込むことができる。  

ということで、Whisper webUIでFaster Whisperを動かす。

とりあえずCo-Lab

- Whisper webUIにあるCo-Labリンクから開く。  
- requerement をfasterに変える  
- 起動オプションにいろいろ書く  
- ローカルでFaster Whisper webUIを動かす  
- CUDAとcuDNNをインストールする。