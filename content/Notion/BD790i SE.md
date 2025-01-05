---
{}
---
こいつマジですごい

すごいポイント

デメリット

990i無印や970iとの比較

Wi-Fi BluetoohモジュールとSSDのヒートシンクについて

CPUの性能・コストパフォーマンスについて

構築・運用メモ

【重要】ファンのブラケット問題

CPUクーラー換算だと何mmになるのか

15mm厚のファンを利用する

30mm厚のファンを利用する（T30）

SSDのヒートシンク

Wi-Fi Bluetoohモジュール

USBポート少なすぎ問題

光デジタルがない

# こいつマジですごい

## すごいポイント

- 普通に性能がいい
    - 7900x相当
- 安い
    - ITXと比較するとえぐい安い
    - mATXと比較してもめっちゃ安い
- 発熱が少ない
    - 電気代が安くすむ
        - 50wで1日３時間で、年間2000円くらい変わる
    - 静穏化
    - 長寿命
- 専用設計でボードが最適化
    - 薄い
    - 小さい
    - ヒートシンクが効率化
        - 実質殻割り
- ファンを選べる

  

  

  

  

## デメリット

- USBソケットが1つ
    - 分岐で対策できるけど、帯域は変わらない。
- SATAがない
    - 何ともできない。M.2から分岐するくらい。
- 背面パネルのioが少ない。
    - ハブ
- ケースファンのピンが2個。RGB・ARGBない。
    - Corsairとかのは追加できるけどUSB2.0ソケットが必要なので、これもかなりの分岐ルートが必要。
- SSDのヒートシンクがついてこない。
    - 課金しろ
    - いくつかの制限があるので詳しくは下で述べています

  

---

# 990i無印や970iとの比較

最初にまとめ

990i SEは990iとほとんど変わらないCPU性能を持つが、値段は970iと変わらない。  
その背景にはWi-Fi BluetoohモジュールとSSDのヒートシンクがついてこないということがあるが、この2つは1万円程度で用意できるので結局やすい。  

  

スペック的には990iと変わらないが、付属品などの違いがある。  
以下は、主な違いについてピックアップして比較した表である。ここに記載しなかっと部分はほとんど同じと考えていい。  

|項目|990i SE|990i|970i|
|---|---|---|---|
|値段|61,000|82,000|59,000（終売）|
|CPU|7940HX|7945HX|7745HX|
|コア数/スレッド数|16/32|16/32|8/16|
|Cinebench R23 (MC) ※1|33370 (105%)|31670|18065 (57%)|
|Cinebench R23 (SC) ※1|1864 (95%)|1955|1842 (94%)|
|最大消費電力（CPU）|100W|100W|100W|
|Wi-Fi, Bluetooh|なし ※2|あり|あり|
|SSDのヒートシンク|なし|あり|あり|

※1 Geekbenchのパーセントは7945HXに対してのスコア  
※2 M.2 2230 key Eポートがあるので増設可能  

  

### Wi-Fi BluetoohモジュールとSSDのヒートシンクについて

990i SEと990i, 970iの違いとして、Wi-Fi BluetoohモジュールとSSDのヒートシンクがついてこないという点がある。私自身、開封する前まで見落としてた。

  

  

  

  

  

### CPUの性能・コストパフォーマンスについて

結論から言うと990i SEと990iはほとんど同じCPU性能となっている。

シングル性能は、最も性能がよい990iに対して990i SEも970iも95％程度の性能となっていることから、ほとんど誤差範囲と言えるだろう。

マルチ性能は、990iに対して970iはほとんど半分程度の性能になっており、シングル性能が変わらずコア数が半分なので妥当な数値となっていると言える。  
990iと990i SEではCinebench R23では990i SEの方がスコアが高いが、Geekbench 6では990i SEのほうがスコアが低いがそれぞれ±5％程度の差となっている。  

  

  

  

---

# 構築・運用メモ

[[BD790i SE 運用メモ]]

  

> [!important] こいつ、かなりのクセがある。細々とした追加課金が必要。

  

## 【重要】ファンのブラケット問題

2024年10月2日 時点で出荷されているものは、ファンのブラケットを取り付けるためのネジが短すぎて、取り付けることができない。ファンレスで運用するわけがないので100％課金が必要。

ネジの規格としてはM2ネジで長さは3mmが適合する。4mmだと逆に長過ぎて入らない。  
（検証済み）  

  

> [https://www.amazon.co.jp/黒炭素鋼クロス-フィリップス超薄型フラット-ヘッドねじボルト-ラップトップ-スクリュー/dp/B0CCK5B2C3/ref=sr_1_16?__mk_ja_JP=カタカナ&crid=33OVOQZ0AE33A&dib=eyJ2IjoiMSJ9.9JqjHfIqW2159IV9GjkOUs1pReulYau2uOekewHM1tNjjHYqN3zBegDbrO2TZGU2feLmoH75kme9i7HClpqO11Boabumfqurv208nNbppM9l8n9Y2XEthlMjGod6EYB2DbtiEv6rGEo2dHFaz49N7XuI6v5-Pelepqr3JJfAHKnv_5H8Kvof8bDrzqkJBU5XrmV8jcl9zWj_H6Kh4C7Szv0EHCC0zzmPidv1iYvltB1X3ULuCcXCRv4iIo8uRP1SE-qMHmknSygZL2NVAmXm-1pLW2mx3_F8L23LmYkrehg.ABi_kmBo1MOLQ6Clr9NLixjJ-qt4IsX4_Zc5Y3wwOT4&dib_tag=se&keywords=m2+3mm+10&qid=1727853111&sprefix=m2+3mm+10,aps,165&sr=8-16&th=1](https://www.amazon.co.jp/黒炭素鋼クロス-フィリップス超薄型フラット-ヘッドねじボルト-ラップトップ-スクリュー/dp/B0CCK5B2C3/ref=sr_1_16?__mk_ja_JP=カタカナ&crid=33OVOQZ0AE33A&dib=eyJ2IjoiMSJ9.9JqjHfIqW2159IV9GjkOUs1pReulYau2uOekewHM1tNjjHYqN3zBegDbrO2TZGU2feLmoH75kme9i7HClpqO11Boabumfqurv208nNbppM9l8n9Y2XEthlMjGod6EYB2DbtiEv6rGEo2dHFaz49N7XuI6v5-Pelepqr3JJfAHKnv_5H8Kvof8bDrzqkJBU5XrmV8jcl9zWj_H6Kh4C7Szv0EHCC0zzmPidv1iYvltB1X3ULuCcXCRv4iIo8uRP1SE-qMHmknSygZL2NVAmXm-1pLW2mx3_F8L23LmYkrehg.ABi_kmBo1MOLQ6Clr9NLixjJ-qt4IsX4_Zc5Y3wwOT4&dib_tag=se&keywords=m2+3mm+10&qid=1727853111&sprefix=m2+3mm+10,aps,165&sr=8-16&th=1)
> 
> ↑あとでリンク変更します

Amazonで買うよりパソコンショップやホームセンターで買ったほうがいいかもしれない。

[https://www.amazon.co.jp/アイネックス-AINEX-PB-043A-薄型光学ドライブ固定用ミリネジ/dp/B0B3RJWLGZ/ref=sr_1_77?dib=eyJ2IjoiMSJ9.rr2armruaoeOxtfnF5uL70uOXUOqL4UXgCbj4a9hXgv_baeMMCf5vmuVVg7hEPDNTP6SoRQUxOUv-rqFWpMjRAoelIhO9puhL8zc7UfzxF3Lj07wVZQPfGnmy59IbrNlJLcMEhGk-Jtxww5N4UmhnTjxTMuHbxScPgVIur7POwpZVAENufqNQDCrsIvGhmtTuKyEXQsl30qhXhZgKDwBuIMcl2-u4L6L7Of3mBPJw6NJ81t3rWCHr-nZtDYl6Zo0WRwXS3yIsMqX8rhb6iQ-tU3d5iItZTzkqKV68I58Z3E.mkuiwvOHfcwBYlX7f8UwIEqX-j_a4aVMCyjW51RKwKg&dib_tag=se&keywords=m2+3mm&qid=1727852815&sr=8-77](https://www.amazon.co.jp/アイネックス-AINEX-PB-043A-薄型光学ドライブ固定用ミリネジ/dp/B0B3RJWLGZ/ref=sr_1_77?dib=eyJ2IjoiMSJ9.rr2armruaoeOxtfnF5uL70uOXUOqL4UXgCbj4a9hXgv_baeMMCf5vmuVVg7hEPDNTP6SoRQUxOUv-rqFWpMjRAoelIhO9puhL8zc7UfzxF3Lj07wVZQPfGnmy59IbrNlJLcMEhGk-Jtxww5N4UmhnTjxTMuHbxScPgVIur7POwpZVAENufqNQDCrsIvGhmtTuKyEXQsl30qhXhZgKDwBuIMcl2-u4L6L7Of3mBPJw6NJ81t3rWCHr-nZtDYl6Zo0WRwXS3yIsMqX8rhb6iQ-tU3d5iItZTzkqKV68I58Z3E.mkuiwvOHfcwBYlX7f8UwIEqX-j_a4aVMCyjW51RKwKg&dib_tag=se&keywords=m2+3mm&qid=1727852815&sr=8-77)

私はこれを実店舗で購入しました。

  

## CPUクーラー換算だと何mmになるのか

結論から書くと==**67mm**==になる。

これは、25mmファンの時で15mmファンを使うと==**57mm**==にできる

  

Noctua A12x25を取り付けた際に、防振ゴムを含めてボード背面からの厚さが67.4mmになった。  
CPUクーラーの高さはたいていボードの表面からの高さであり、ボードの厚みが1.4mmだったため、1.4mmを差し引いて66mmとなる。余裕を持っても67mmと考えていい。  

### 15mm厚のファンを利用する

**結論から書くと、**==**M2.6x15mmネジを使って固定することができる。**==

  

15mm厚のファンを利用すると、当然10mm減少し、57mmとなり小さいケースにも収まりやすくなる。

しかし、付属のネジが25mm用のネジとなっており、これをそのまま使うとヒートシンクに鑑賞して固定することができない。（無理に固定しようとするとヒートシンクが曲がる）

このネジは**M2.6ネジ**です

25mm厚を固定するネジが25mmだったので、**15mmであれば15mmがあればよい（検証済み）**

冷却性能としては、**Noctua A12x15で十分冷やせる（検証済み）**

  

### 30mm厚のファンを利用する（T30）

==**結論から書くと、**====**M2.6x30mmで固定できる。**==

が、Noctua A12x25で1200RPMでサーマルスロットリングが起きなかったので、  
よほどのことがない限りT30を使うユースケースはほとんどないだろう。  

※Noctua A12x25は中古で3000円くらいで買えるし1dbくらいしかノイズは減らない。

  

実はNoctua A12x25を超えるチート級120mmファンがある。  
それがPhantek T30である。  

これは厚みを30mmにして（ある意味チート）A12x25を超えてきたファンだ。

これを利用する注意点は、まず厚みが5mm増えること、そして15mmファンと同じく追加でM3ネジが必要ということ。

  

  

## SSDのヒートシンク

サーマルライトのでかいヒートシンクは入らないっぽい  
上の段だったら入る。ファンをずらせば下の段にも入る。  

逆に言うと、下の段はファンの風が当たるようになっている。  
だから下の段にサイズの小さいヒートシンク、上の段にサイズの大きいヒートシンクで良い。  

  

小さいヒートシンク 800円

[https://www.amazon.co.jp/dp/B0BSFW73XJ/ref=twister_B0CGWDDGGK?_encoding=UTF8&th=1](https://www.amazon.co.jp/dp/B0BSFW73XJ/ref=twister_B0CGWDDGGK?_encoding=UTF8&th=1)

  

小さいヒートシンク ファン付き 1380円

[https://amzn.asia/d/2cIre0k](https://amzn.asia/d/2cIre0k)

  

大きいヒートシンク ファン付き 2100円

[https://amzn.asia/d/enJunsB](https://amzn.asia/d/enJunsB)

  

大きいヒートシンク ファンなし 2000円

[https://amzn.asia/d/gMR9r4v](https://amzn.asia/d/gMR9r4v)

  

  

  

## Wi-Fi Bluetoohモジュール

Wi-FiとBluetoohは990i/970iではついてくるが、990i SEではついてこないので、必要であれば別途用意する必要がある。

Bluetoothは必要な人が多いと思うけど、WiFiは多分あんまいらないと思う。  
だからBluetoothだけをあとづけでつければいい。  

  

  

でかいWi-Fi 3000円

[https://amzn.asia/d/fDjqeFx](https://amzn.asia/d/fDjqeFx)

  

でかいBluetooth 2200円

[https://amzn.asia/d/cHTGH9B](https://amzn.asia/d/cHTGH9B)

  

ちっちゃいBluetooth 1200円

[https://amzn.asia/d/7t4XGfh](https://amzn.asia/d/7t4XGfh)

  

ちゃんとマザーボードにつけるタイプ 4300円

[https://amzn.asia/d/4uedV29](https://amzn.asia/d/4uedV29)

  

  

---

## USBポート少なすぎ問題

ハブ買え。

  

## 光デジタルがない

USBからSPDIF出すやつある。