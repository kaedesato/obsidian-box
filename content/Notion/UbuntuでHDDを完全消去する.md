---
modified: 2025-01-05T18:37
---
  

  

  

結論 shred

- まずubuntuのBoot USBなどを作って Try ubuntuする。\
- とりあえずパーティションを整理したり、Diskをマウントする（GUIでできる、Gpartedとか）
    - ドライブ名も確認しておく
- `shred`をする

```Shell
 sudo shred -uvz -n 1 /dev/sda1
```

  

  

  

[https://qiita.com/noraworld/items/72d6a6dc5014f44e789f](https://qiita.com/noraworld/items/72d6a6dc5014f44e789f)

このコマンドでは、ランダムに書き込みしたあとに、０を書き込む

[https://www.diskdeleter.jp/about/features/erasing-method/](https://www.diskdeleter.jp/about/features/erasing-method/)

こちらの記事で紹介されている5. NIST 800-88 Advanced方式 というものらしい。

-n 2にすればアメリカ国家安全保障局方式にできる。

2回以上ランダム書き込みする意味はないと思われる。

1回でも十分な安全性が担保されている。時間がアレば2回すればいい