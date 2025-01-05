---
{}
---
[https://qiita.com/nacho0707/items/a4d4c8f7fab25c4876f0](https://qiita.com/nacho0707/items/a4d4c8f7fab25c4876f0)

  

[この記事誰得？ 私しか得しないニッチな技術で記事投稿！Qiita Engineer Festa2024](https://qiita.com/official-events/d340ce2d6bd2d5b557f5)

[@nacho0707(nacho)](https://qiita.com/nacho0707)in[ＡＲアドバンストテクノロジ株式会社（ARI）](https://qiita.com/organizations/ari-group)

- [Node.js](https://qiita.com/tags/node.js)
- [AWS](https://qiita.com/tags/aws)
- [SQLServer](https://qiita.com/tags/sqlserver)
- [DirectConnect](https://qiita.com/tags/directconnect)
- [lambda](https://qiita.com/tags/lambda)

Posted at 2024-07-03

## はじめに

AWS Lambdaから社内環境のSQL Serverへの接続方法について紹介していきます

SQLServerへの接続部分で具体的な値の例が無く、苦戦したのでより具体的に値を記載しようと思います！

## 開発内容

### パッケージのインストール

Node.jsでSQLServerへアクセスするために必要なパッケージをインストールします

```Plain
npm install mssql
```

### Lambdaの設定

特定の環境からのみアクセス可とするため、VPCの設定を行います。

Lambdaの設定タブのVPC からVPC、サブネット、セキュリティグループを設定します。

### ソースコード

```Plain
// パッケージの読み込み
const sql = require('mssql')

// SQL Serverの設定
const config = {
  user: 'sa',
  password: 'XXXXXXX', // 設定したパスワード
  server: '192.168.X.X',
  database: 'DATABASE_NAME', // DB名
}

exports.handler = async (event) => {
  console.log(event)

  try {
    const parameter = event.queryStringParameters
    const userId = parameter.userId;

    // SQL Serverに接続
    await sql.connect(config)

    // ユーザー情報取得用のSQLを実行
    const result = await sql.query
      `SELECT * FROM ユーザー情報 WHERE USER_ID = ${userId}`

    // 接続を閉じる
    await sql.close();

    const record = JSON.stringify(result.recordset)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: record
    }
  } catch (err) {
    console.log('SQL ERROR:' + err)

    // 接続を閉じる
    await sql.close();

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: 'ERROR'
    }
  }
};
```

## さいごに

初めてSQLServerと接続の実装を行ったため、上手くいかない原因の特定に時間が掛かり、実装が大変でした・・

こちら参考になれば幸いです

[8](https://qiita.com/nacho0707/items/a4d4c8f7fab25c4876f0/likers)

2

[![](https://cdn.qiita.com/assets/public/image-qiitan_for_login_modal-014e085d3e40a240e3fe8d61b70b29a9.png)](https://cdn.qiita.com/assets/public/image-qiitan_for_login_modal-014e085d3e40a240e3fe8d61b70b29a9.png)

Register as a new user and use Qiita more conveniently

1. You get articles that match your needs
2. You can efficiently read back useful information
3. You can use dark theme

[What you can do with signing up](https://help.qiita.com/ja/articles/qiita-login-user)

[Sign up](https://qiita.com/signup?callback_action=login_or_signup&redirect_to=%2Fnacho0707%2Fitems%2Fa4d4c8f7fab25c4876f0&realm=qiita)

[Login](https://qiita.com/login?callback_action=login_or_signup&redirect_to=%2Fnacho0707%2Fitems%2Fa4d4c8f7fab25c4876f0&realm=qiita)