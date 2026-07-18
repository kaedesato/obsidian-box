---
modified: 2026-07-18T12:36
---


れまでに登場したLinux（Bash）用のFFmpegコマンドを、作業の流れに沿ってまとめました。ターミナルにコピー＆ペーストしてご利用ください。

### 1. 動画をすべてオールイントラ（x264）に一括変換する

フォルダ内のすべての `.mp4` ファイルを、編集・シークが軽いオールイントラ動画に変換します（末尾に `_intra` が付きます）。


```bash
for f in *.mp4; do ffmpeg -i "$f" -c:v libx264 -g 1 -bf 0 -crf 18 -c:a copy "${f%.mp4}_intra.mp4"; done
```

### 2. オールイントラ動画（_intra.mp4）を無劣化で1つに結合する

上記で作った `_intra.mp4` ファイル群を、再エンコードなしで一瞬でマージします。元のファイルは消えません。


```bash
printf "file '%s'\n" *_intra.mp4 > my_list.txt && ffmpeg -f concat -safe 0 -i my_list.txt -c copy combined_intra.mp4 && rm my_list.txt
```


メインの高速エンコーダー（`libsvtav1`）を使ったコマンドです。


```bash
for f in *.mp4; do ffmpeg -i "$f" -c:v libsvtav1 -vf "scale=trunc(iw*sar/2)*2:ih,setsar=1" -g 30 -crf 24 -an "${f%.mp4}.avif"; done
```

