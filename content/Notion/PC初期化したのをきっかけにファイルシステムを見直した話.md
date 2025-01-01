---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[PC環境&遍歴]]"
2ホップリンク: https://www.notion.so/10e1121f1cf680c4a8c5cecac6b48a9d, https://www.notion.so/1201121f1cf68035a870db26fd6eed98, https://www.notion.so/1201121f1cf680deb46eef35d04c268d, https://www.notion.so/1211121f1cf6802386d1fdf5fe0b03f4, https://www.notion.so/1d8438c238c44e1385993f33636f0fbd, https://www.notion.so/264cf34df21246b78f4df2fd592f734d, https://www.notion.so/4c21e168c38c4c40971d368dc1a63347, https://www.notion.so/5d3b6c787dd546cfbabeae3fa7311715, https://www.notion.so/61f07e380208485594fb69d25c212af8, https://www.notion.so/685ee866407a41babbd548581ebdcd8b
date: 2024-12-27T22:34
---
  

## Cドライブが入っているディスクのパーティーションを分ける

Cをバックアップするのですが、Cに色々いれるとバックアップの容量が大変なことになる。

ので、消えてもいいけど早いディスクを使いたいもの（例えばゲームとか）を入れておくパーティーションを別で作る。

  

## バックアップの設定（windows7）

Windows7って書いてあるけど11でもこれを使う。

  

  

  

## 余ってるSSDを使って高速なストライピングパーティーションをつくる

これが結構重要なパートになってます。

  

まず、ほんとに早くなるのか当環境でやってみる

  

メインのSSD

  

Sundisk

  

CFD

  

  

  

ディスクの管理でストライプボリュームっていうやつを作る

  

Cが入っているところはNGだった。というかディスク単位での管理だった。

結構くるくるするけど行けた。

  

早い。

  

  

  

- 失敗したやつ
    
    記憶で検索すると出てくる
    
    なんかCがあるディスクは選べないらしい。
    
      
    
    ホイールスロールでガンガン回復性の部分が変わるから注意。
    
      
    
    全然変わらないんですが・・・？
    
    分散されてない？？？
    
      
    
    普通に同じサイズだったらRaidでもいいやってなった。
    
    > 　4K Q32T1のランダムリード、ライトだけは2台への分散効果があったのか記憶域のほうがデータ転送速度が高速になったが、それ以外はほぼ変わらずと言ってよい。RAID 0のような劇的なデータ転送速度向上は望めないのが分かる。  
    >   
    > [https://pc.watch.impress.co.jp/docs/topic/feature/1568109.html](https://pc.watch.impress.co.jp/docs/topic/feature/1568109.html)
    
    ガチかよ
    
    破壊や。
    
      
    
    RAID設定してくる
    
    なんかけっこうめんどくさかった