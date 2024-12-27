---
Q: true
pin: false
最終更新日時: Invalid date
関連:
  - "[[SNS関連インデックス]]"
2ホップリンク: https://www.notion.so/0575488e6e58455bb4af15c51c550afa, https://www.notion.so/3786c29186b247cfa390f84a603faeb8, https://www.notion.so/3eba75d7b7e14b41ba9d84c1d10b9790, https://www.notion.so/559ec89162424a6ca6d8086a443c7e88, https://www.notion.so/69059831c9fe4d109f20eeef01105264, https://www.notion.so/a583df3159e944e7867af89fa47bc17b, https://www.notion.so/ce7496225ecf45ac9db8d7c3f16229d2, https://www.notion.so/e207807e82ea4f16902e7360ffb7fa8f, https://www.notion.so/e93c54fcef7e440e99d09d8eb293a988
---
# SNSの二乗三乗の法則

SNSにおける、二乗三乗の法則

ユーザー数が多くなると、費用対効果が悪くなる。

二乗三乗の法則の例

筋肉の力は断面積、体重は体積に比例して増えるため、動物の体の大きさには限界がある

コスト面

- サーバーの一番のコストは、データベースに対する読み書き  
- ユーザー数に対して、読み書きは2乗で増えていく  
- 仮に全てのユーザーが全てのユーザーをフォローしていると考えると、nC2だけ繋がりが生まれるので、二乗に比例する。  
- 実際には、$ O(n)= n nくらいのオーダーになると思う。  

収益面

- 有料会員の収入はユーザー数に比例して増える。  
- オーダーは$ O(n)= n  
- 広告収入についても、ユーザーに比例して増える。$ O(n)= n  

ということで、コストのオーダーが収益のオーダーより大きくなってしまいます。

このことが示すことは、ユーザー数をある程度抑えるか、データベースに対するReadを減らす方法を考えなければならないのです。