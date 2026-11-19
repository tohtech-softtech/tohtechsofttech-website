# 東北工業大学 ソフトウェア技術研究会 Web サイト

東北工業大学ソフトウェア技術研究会の公式サイトです。記事は `content/` 以下の Markdown／MDX ファイルで管理しています。

このREADMEは、初めてサイトを更新する人向けの案内です。まずは「開発を始める」と「ページを更新する」を読んでください。部員紹介を更新する場合は「部員カードを追加する」も確認してください。

## 必要なもの

- Node.js（LTS版を推奨）
- npm

## 開発を始める

依存パッケージをインストールして、開発サーバーを起動します。

```sh
npm install
npm run dev
```

表示されたURLをブラウザで開くと、変更内容を確認できます。

公開用のファイルを作るときは、次を実行します。

```sh
npm run build
```

型や設定に問題がないかを確認するときは、次を実行します。

```sh
npm run check
```

## よく更新するファイル

| 更新したい内容 | ファイル |
| --- | --- |
| トップページ | `content/index.md` |
| 活動の様子 | `content/activities.md` |
| 入部・お問い合わせ | `content/join.md` |
| 部員紹介ページ | `content/members.mdx` |
| サイト名・メニュー | `riebeckite.config.ts` |
| サイトのアイコン | `public/favicon.ico` |

`content/` の Markdown ファイルを追加すると、新しいページとして公開できます。たとえば `content/about.md` を追加すると、`/about` で表示されます。

画像などの公開ファイルは `public/` に置きます。`public/members/icons/example.jpg` は、サイト上では `/members/icons/example.jpg` と指定します。

## ページを更新する

通常のページは `content/` 内の Markdown ファイルを編集します。先頭の `publish: true` があるページは公開対象です。

```md
---
title: ページのタイトル
publish: true
---

# 見出し

本文を書きます。
```

変更後は `npm run dev` で表示を確認し、公開前に `npm run check` と `npm run build` を実行してください。

## 部員カードを追加する

ふつうのカードは、`content/members.mdx` に `SimpleMemberCard` を追加するだけで作れます。TSXを編集する必要はありません。

```mdx
import { SimpleMemberCard } from "../app/components/members/simple-member-card";
```

`<MemberGrid>` の中へ追加します。並び順はここに書かれた順番です。

```mdx
<SimpleMemberCard
  name="山田 太郎"
  year={2}
  bio="Web開発を中心に活動しています。"
  site="https://example.com"
  links={[
    { label: "GitHub", href: "https://github.com/example" },
  ]}
/>
```

- `name` は必須です。
- `icon` に `/members/icons/yamada.jpg` のような画像パスを指定すると写真付きになります。省略すると名前の1文字目が表示されます。
- `year` は学年、`ob` はOBのときに指定します。どちらも不要なら省略できます。
- `bio` は紹介文、`site` は個人サイトのURLです。
- `links` はSNSなどのリンクです。不要な項目は削除できます。
- 外部リンクの `target` と `rel` はコンポーネント側で付きます。

画像は `public/members/icons/` に置きます。`public/members/icons/yamada.jpg` は `/members/icons/yamada.jpg` と指定します。

### 個別デザインのカードにしたい場合

`RerurateMemberCard` のように、部員ごとに専用コンポーネントとCSSを作ることもできます。既存の `app/components/members/rerurate.tsx` と `app/styles/members/rerurate.css` を参考にしてください。個別CSSを追加した場合は、`app/styles/members/index.css` からそのCSSファイルを `@import` してください。

## 公開前の確認

- 表記、リンク先、部員の公開許可を確認する
- `npm run check` が成功することを確認する
- `npm run build` が成功することを確認する
- スマートフォン幅でも表示を確認する

## 困ったとき

更新方法が分からない場合は、既存のページやカードをコピーしてから必要な箇所だけを書き換えると安全です。作業中に解決できない問題は、サイト管理者へ編集したファイル名と表示されたエラーを添えて相談してください。
