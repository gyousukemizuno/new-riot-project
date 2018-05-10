New Riot Project
==================
Riotjsで新しいプロジェクトを開始するときの雛形です。


利用方法
=================

gitからダウンロードしてください。ダウンロード後にmy-projectに変更してください。

```
cp -r new-riot-project my-project
```

package.jsonのname, version, description, author属性を適切に変更してください。


ライブラリーをインストールしてください。
```
npm install
```

webpack-dev-serverを起動してください。ブラウザーが起動し、カスタムタグ「src/app.tag」の内容が表示されます。
```
npm run dev
```
