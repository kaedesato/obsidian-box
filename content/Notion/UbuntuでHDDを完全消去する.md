---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[ubuntu]]"
  - "[[ライフハック]]"
  - "[[自作PC]]"
2ホップリンク: https://www.notion.so/2822c23d98634ee5b77844cf3e8b125d, https://www.notion.so/2ada653c5a1a418cb38fe4229087dfe4, https://www.notion.so/7497737199d94b8d81c57d0eb4698245, https://www.notion.so/7ce14d3a6bc0447faa71bc56b605aebc, https://www.notion.so/f3dc85f976e640ceaf469d105f4bc988, https://www.notion.so/f4d26d3c521b4fb5999d72f3c2601026,https://www.notion.so/e8117dcb16e640d0a09fd408b0162a1d, https://www.notion.so/f3dc85f976e640ceaf469d105f4bc988,https://www.notion.so/10e1121f1cf680c4a8c5cecac6b48a9d, https://www.notion.so/1101121f1cf68073bfa9ec3235c06f61, https://www.notion.so/1101121f1cf680828c80e49572807ac8, https://www.notion.so/1141121f1cf68077ba36e8a857265fb0, https://www.notion.so/1191121f1cf68093a976e5387333ca4a, https://www.notion.so/11c1121f1cf68090b0a6fd9ac7c31c0a, https://www.notion.so/11e1121f1cf68051853decacc2ae16ff, https://www.notion.so/11e1121f1cf680aaa1defdc034df3369, https://www.notion.so/1201121f1cf68035a870db26fd6eed98, https://www.notion.so/1211121f1cf6802386d1fdf5fe0b03f4, https://www.notion.so/526abee8ef61413abf3cc752e7f9770f, https://www.notion.so/f3dc85f976e640ceaf469d105f4bc988
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
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