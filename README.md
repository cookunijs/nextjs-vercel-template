# Next.js Vercel Template

## セットアップ
```
$ yarn
```

## ローカルでの起動
```
$ yarn dev
```

## デプロイ
※ Vercelを使うためにアカウントの設定が必要になります

- Step1 フォルダ名の変更
nextjs-vercel-templateのフォルダ名を独自のものに変更

- Step2 Vercelに登録
<a href="https://vercel.com/signup">Signupページ</a>

- Step3 Vercelの設定
vercelの実行。
```
npx vercel
```

`shift`を押す。
```
Set up and deploy “~/Development/フォルダ名”? [Y/n]
```

deploy先のアカウントを選択する。
```
? Which scope do you want to deploy to? cookunijs
```

新規プロジェクトなので`shift`を押す。
```
Link to existing project? [y/N]
```

プロジェクト名の設定。フォルダ名と同一でいい場合は`shift`を押す。
```
What’s your project’s name?
```

`shift`を押す。
```
? In which directory is your code located? ./
```

`shift`を押す。
```
? Want to override the settings? [y/N]
```

- 参考
<a href="https://vercel.com/docs/cli#commands">Vercel CLI Commands DOCS</a>


## 設計思想
- Next.jsを使っている理由
  - SSRしたいから
  - TypeScriptの相性がNuxt x Vueよりいいから
- Expressを使っている理由
  - Next.jsのデフォルトのサーバーサイドの仕組みだと、ルーティングを上書きして使いたいときにできないから
  - 例えば `/ogimage` みたいなパスでOGImageを返したいときに、Next.jsではページを返さないといけないので実現できない（と思う）
    - 無理にやろうとすると `/api/ogimage` でやればいいんだけど、個人的にはこれはapiではないんだよなあみたいなモヤモヤが生まれる
