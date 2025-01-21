---
modified: 2025-01-05T18:37
---
  

  

[https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)

  

  

  

---

  

```Shell
--skip-download --write-sub
```

  

```JavaScript
--live-from-start 
```

２個ダウンロードされる。ダウンロード終了後にffmpegで結合する（特にオプションは不要）

※なんかいまyt-dlpの方で自動でマージしてくれるらしい。

```JavaScript
ffmpeg -i FILE_1 -i FILE_2 ~/output.mp4
```

  

クッキー

```JavaScript
--cookies-from-browser BROWSER[+KEYRING][:PROFILE][::CONTAINER]
```

- オプションの説明
    
    The name of the browser to load cookies from. Currently supported browsers are:  
      
    `brave`, `chrome`, `chromium`, `edge`, `firefox`,`opera`, `safari`, `vivaldi`, whale.
    
    Optionally, the KEYRING used for decrypting Chromium cookies on Linux, the name/path of the  
    PROFILE to load cookies from, and the CONTAINER name (if Firefox) ("none" for no  
    container) can be given with their respective separators. By default, all containers of the most recently accessed profile are used.  
    Currently supported keyrings are:  
    `basictext`, `gnomekeyring`, `kwallet`, `kwallet5`, `kwallet6`
    

ブラウザは色々あって`firefox`がおすすめ。

foxをインストールしたくないのであれば、ローカルのcookieを参照する方法が良いと思う。

```JavaScript
--cookies FILE
```