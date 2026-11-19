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

部員カードは、次の2か所を更新します。

1. `app/components/members/` に部員ごとのカードを作る
2. `content/members.mdx` でカードを読み込み、一覧に追加する

### 1. カードのファイルを作る

`app/components/members/member-b.tsx` をコピーし、たとえば `app/components/members/yamada.tsx` を作成します。ファイル内の関数名、名前、学年、紹介文、URLを書き換えてください。

```tsx
import { MemberCard } from "../member-card";

export function YamadaMemberCard() {
  return (
    <MemberCard>
      <div class="site-member-card__header">
        <span
          class="site-member-card__avatar site-member-card__avatar--initial"
          aria-hidden="true"
        >
          山
        </span>
        <div class="site-member-card__identity">
          <h3 class="site-member-card__name">山田 太郎</h3>
          <span class="site-member-card__badge">2年生</span>
        </div>
      </div>
      <p class="site-member-card__bio">Web開発を中心に活動しています。</p>
      <a
        class="site-member-card__site"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://example.com
      </a>
      <ul class="site-member-card__links">
        <li>
          <a
            class="site-member-card__link"
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </MemberCard>
  );
}
```

個人サイトやSNSがない場合は、該当する `<a>` 要素、またはSNS全体を囲む `<ul>...</ul>` を削除してください。外部リンクには必ず `target="_blank"` と `rel="noopener noreferrer"` を付けます。

### 2. 部員一覧に追加する

`content/members.mdx` に、作成したコンポーネントの読み込みと表示を追加します。

```mdx
import { YamadaMemberCard } from "../app/components/members/yamada";
```

次に、`<MemberGrid>` の中へ追加します。並び順はここに書かれた順番です。

```mdx
<MemberGrid>
  <RerurateMemberCard />
  <MemberBCard />
  <MemberCCard />
  <YamadaMemberCard />
</MemberGrid>
```

### 写真付き・個別デザインのカードにしたい場合

写真は `public/members/icons/` に置き、`src="/members/icons/ファイル名.jpg"` のように指定します。`app/components/members/rerurate.tsx` と `app/styles/members/rerurate.css` が、写真と個別デザインを使った例です。

個別CSSを追加した場合は、`app/styles/members/index.css` からそのCSSファイルを `@import` してください。

## 公開前の確認

- 表記、リンク先、部員の公開許可を確認する
- `npm run check` が成功することを確認する
- `npm run build` が成功することを確認する
- スマートフォン幅でも表示を確認する

## 困ったとき

更新方法が分からない場合は、既存のページやカードをコピーしてから必要な箇所だけを書き換えると安全です。作業中に解決できない問題は、サイト管理者へ編集したファイル名と表示されたエラーを添えて相談してください。
