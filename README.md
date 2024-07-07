# Comic Community公式サイトレポジトリ
## 編集者用説明
各ページの文章 → content内の各markdownを編集すれば自動反映。

サークルカット → content/circlecut内。サークルごとにフォルダを作り、中に画像とmarkdownを配置。
画像の形式、サイズは気にせずディレクトリに入れれば勝手に圧縮して表示。
markdownはfrontmatterにname、本文に説明文を記述。以下例。
```markdown
---
name:"ここにサークル名"
---
以下サークル紹介。
```

サイトロゴ → static/images内のimagetopとhidariue。faviconはなんか反映できてない。


## 開発者用説明
使用言語はTSとSCSS(CSSと互換あり)でJAMStac。静的サイトジェネレータGatsbyを使ってReactで書いたサイトをNetlifyでデプロイ。レポジトリをクローンして、
`npm install`で依存パッケージをインストールする。

```shell
cd comicom
npm run develop
```

でhttp://localhost:8080 に開発環境が立ち上がる。Pushすると自動的にNetlifyにDeploy。現状NetlifyのアカウントはAkaramakiのもの。詳細はGatsbyのドキュメントやReactのドキュメントを読んで。
