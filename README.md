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


- 2回目以降のデプロイ

Prod環境へのデプロイ
```
yarn deploy:prod
```

Dev環境へのデプロイ
```
yarn deploy:dev
```


- 参考
<a href="https://vercel.com/docs/cli#commands">Vercel CLI Commands DOCS</a>

<br/>

## 設計思想
- Next.jsを使っている理由
  - SSRしたいから
  - TypeScriptの相性がNuxt x Vueよりいいから
- Expressを使っている理由
  - Next.jsのデフォルトのサーバーサイドの仕組みだと、ルーティングを上書きして使いたいときにできないから
  - 例えば `/ogimage` みたいなパスでOGImageを返したいときに、Next.jsではページを返さないといけないので実現できない（と思う）
    - 無理にやろうとすると `/api/ogimage` でやればいいんだけど、個人的にはこれはapiではないんだよなあみたいなモヤモヤが生まれる
- SCSSを使っている理由
  - SCSSが使えればCSSよりコードの記述量も減り、時間短縮もでき、管理もしやすくなるため。


## フォルダ構成
### src
- components

pagesに実装するcomponentファイルを格納する。
atomicデザインの構成要素毎にフォルダ分けをしている。


- stories

storybook用のファイルを格納する。
componentsのフォルダ構成に合わせてフォルダ分けをしている。


- styles

componentのstyleを指定する`.scss`ファイルを格納する。


- pages

page用のファイルを格納する。


- lib
ライブラリとしてcomponentから切り離されている機能ファイルを格納する。


```
  src
  ├── components
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   └── templates/
  ├── stories
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   └── templates/
  ├── styles
  │   ├── components
  │   │   ├── atoms/
  │   │   ├── molecules/
  │   │   ├── organisms/
  │   │   └── templates/
  │   └── global.scss
  ├── pages
  │   ├── api/
  │   ├── _app.tsx
  │   ├── index.ts
  │   └── 404.ts
  └── lib
      ├── client.ts
      └── server.ts
```
