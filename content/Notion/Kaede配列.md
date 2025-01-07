---
{}
---
# Kaede配列

元々はWorkman-jpだったのにKaede配列という名前になりました

https://scrapbox.io/files/64b27f8a403ded001bfa0e0e.png

大西配列となにが違うのか

kaede配列のいいところ

- 指の移動距離が10～15％短い  
- 十字キーがおける  
kaede配列の悪いところ  

- 覚えにくい  
- 英語にあまり最適化されてない  

正直、大西配列でいいなっては思います。

でも15％はでかい気がします。

https://patorjk.com/keyboard-layout-analyzer/\#/load/dJXQbJfR

Workmanとの考え方の類似点

- 指の移動を少なくする

相違点

- ZXCVをより厳密にキープ  
- 22文字変更（Workmanは21字、[[Colemak]]は17字）。  
- ZXCV以外では4文字のみ一致  

SFUメモ

- 同じ難易度同士の並び替えは、基本的に使用率が高いものを人差し指や中指に持ってくる

データセットを集めるのが地獄。

英語のデータセットはWikipediaから取ってきた。

https://en.wikipedia.org/wiki/Letter_frequency\#cite_note-micka-1

https://w.atwiki.jp/raycy/pages/261.html


``` json
 {
     "label": "kaede",
     "author": "Patrick Gillespie",
     "authorUrl": "",
     "fingerStart": {
         "1": 29,
         "2": 30,
         "3": 31,
         "4": 32,
         "5": 66,
         "6": 75,
         "7": 35,
         "8": 36,
         "9": 37,
         "10": 38,
         "11": -1,
         "false": -1
     },
     "keyboardType": "ergodox",
     "labels": {
         "8": "Bkspc",
         "20": "Caps"
     },
     "keys": [
         {
             "primary": 27,
             "finger": 1,
             "id": 0
         },
         {
             "primary": 49,
             "shift": 33,
             "finger": 1,
             "id": 1
         },
         {
             "primary": 50,
             "shift": 64,
             "finger": 2,
             "id": 2
         },
         {
             "primary": 51,
             "shift": 35,
             "finger": 3,
             "id": 3
         },
         {
             "primary": 52,
             "shift": 36,
             "finger": 4,
             "id": 4
         },
         {
             "primary": 53,
             "shift": 37,
             "finger": 4,
             "id": 5
         },
         {
             "primary": -1,
             "shift": -1,
             "finger": 4,
             "id": 6,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "shift": -1,
             "finger": 7,
             "id": 7,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 54,
             "shift": 94,
             "finger": 7,
             "id": 8
         },
         {
             "primary": 55,
             "shift": 38,
             "finger": 7,
             "id": 9
         },
         {
             "primary": 56,
             "shift": 42,
             "finger": 8,
             "id": 10
         },
         {
             "primary": 57,
             "shift": 40,
             "finger": 9,
             "id": 11
         },
         {
             "primary": 48,
             "shift": 41,
             "finger": 10,
             "id": 12
         },
         {
             "primary": 8,
             "finger": 10,
             "id": 13
         },
         {
             "primary": 9,
             "finger": 1,
             "id": 14
         },
         {
             "primary": 108,
             "shift": 76,
             "finger": 1,
             "id": 15,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 100,
             "shift": 68,
             "finger": 2,
             "id": 16,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 107,
             "shift": 75,
             "finger": 3,
             "id": 17,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 114,
             "shift": 82,
             "finger": 4,
             "id": 18
         },
         {
             "primary": 102,
             "shift": 70,
             "finger": 4,
             "id": 19,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 4,
             "id": 20
         },
         {
             "primary": 39,
             "finger": 7,
             "id": 21,
             "shift": 34,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 112,
             "shift": 80,
             "finger": 7,
             "id": 22,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 104,
             "shift": 72,
             "finger": 7,
             "id": 23,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 121,
             "shift": 89,
             "finger": 8,
             "id": 24,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 109,
             "shift": 77,
             "finger": 9,
             "id": 25,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 98,
             "shift": 66,
             "finger": 10,
             "id": 26,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 92,
             "shift": 124,
             "finger": 10,
             "id": 27
         },
         {
             "primary": 17,
             "finger": 1,
             "id": 28
         },
         {
             "primary": 115,
             "shift": 83,
             "finger": 1,
             "id": 29,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 117,
             "shift": 85,
             "finger": 2,
             "id": 30,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 97,
             "shift": 65,
             "finger": 3,
             "id": 31,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 116,
             "shift": 84,
             "finger": 4,
             "id": 32,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 119,
             "shift": 87,
             "finger": 4,
             "id": 33,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 103,
             "shift": 71,
             "finger": 7,
             "id": 34,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 110,
             "shift": 78,
             "finger": 7,
             "id": 35,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 105,
             "shift": 73,
             "finger": 8,
             "id": 36,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 111,
             "shift": 79,
             "finger": 9,
             "id": 37,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 101,
             "shift": 69,
             "finger": 10,
             "id": 38,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 13,
             "finger": 10,
             "id": 39
         },
         {
             "primary": 16,
             "finger": 1,
             "id": 40
         },
         {
             "primary": 122,
             "shift": 90,
             "finger": 1,
             "id": 41
         },
         {
             "primary": 120,
             "shift": 88,
             "finger": 2,
             "id": 42
         },
         {
             "primary": 99,
             "shift": 67,
             "finger": 3,
             "id": 43
         },
         {
             "primary": 118,
             "shift": 86,
             "finger": 4,
             "id": 44
         },
         {
             "primary": 113,
             "shift": 81,
             "finger": 4,
             "id": 45,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 4,
             "id": 46
         },
         {
             "primary": -1,
             "finger": 7,
             "id": 47
         },
         {
             "primary": 106,
             "shift": 74,
             "finger": 7,
             "id": 48,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 45,
             "shift": 95,
             "finger": 7,
             "id": 49,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 61,
             "shift": 43,
             "finger": 8,
             "id": 50,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 44,
             "shift": 60,
             "finger": 9,
             "id": 51,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 46,
             "shift": 62,
             "finger": 10,
             "id": 52,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -16,
             "finger": 10,
             "id": 53
         },
         {
             "primary": 17,
             "finger": 1,
             "id": 54
         },
         {
             "primary": -1,
             "finger": 1,
             "id": 55
         },
         {
             "primary": -1,
             "finger": 2,
             "id": 56
         },
         {
             "primary": -1,
             "finger": 3,
             "id": 57
         },
         {
             "primary": 96,
             "shift": 126,
             "finger": 4,
             "id": 58
         },
         {
             "primary": 47,
             "finger": 7,
             "id": 59,
             "shift": 63,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 91,
             "shift": 123,
             "finger": 8,
             "id": 60
         },
         {
             "primary": 93,
             "shift": 125,
             "finger": 9,
             "id": 61
         },
         {
             "primary": -1,
             "shift": -1,
             "finger": 10,
             "id": 62,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 59,
             "finger": 10,
             "id": 63,
             "shift": 58,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 20,
             "finger": 5,
             "id": 64,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 5,
             "id": 65,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 32,
             "finger": 5,
             "id": 66,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 13,
             "finger": 5,
             "id": 67,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 5,
             "id": 68,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 5,
             "id": 69,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 6,
             "id": 70,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 6,
             "id": 71,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 6,
             "id": 72,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": -1,
             "finger": 6,
             "id": 73,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 32,
             "finger": 6,
             "id": 74,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         },
         {
             "primary": 8,
             "finger": 6,
             "id": 75,
             "shift": -1,
             "altGr": -1,
             "shiftAltGr": -1
         }
     ]
 }
```