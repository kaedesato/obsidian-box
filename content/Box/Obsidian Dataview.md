---
modified: 2025-05-13T15:13
---

なんか使うの難しそう…
↑ JSviewが難しそう

かんたんな使い方としては
SQLっぽいのかいてNotionのビューみたいなのを実装できる

DataViewの表示形式
- LIST
- TABLE
- TASK
	- チェックボックスだけ抽出できる
- CALENDAR



試しに、modifiledがついてないやつを抽出するコード書いてみた。（Geminiさんで）
```dataview
LIST
FROM !"English"
WHERE !modified OR modified = null OR modified = ""
```



modifiedのカレンダー

```dataview
CALENDAR modified 
FROM "" 
WHERE modified
```


