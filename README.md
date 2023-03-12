# このプロジェクトについて

このプロジェクトは個人的に使う Next 用の汎用リポジトリ。

使いたいときにクローンして使うことができる。

# 使用技術情報

- Next v13
  - appディレクトリは不採用
- TypeScript
  - JSも使えるようになっているはずです。
- ESLint
- Prettier
- Tailwind CSS
- Volta

# ディレクトリ構成について

## /components

アプリケーション全体で使うコンポーネントを入れるディレクトリ。

## /components/elements

アプリケーション全体で使う共通コンポーネントを置く。

例えばボタンなど。ボタンを使うための useButton などがあればこのディレクトリの中へ。

## /components/layouts

アプリケーション全体で使うレイアウトコンポーネントを置く。

例えば Header や Footer。

管理者や一般ユーザーによってレイアウトを買えるならその Layout コンポーネントなどもこのディレクトリへ

## /pages

Next のページコンポーネントを入れる。

ここのファイル名がルーティング用の URL になる。

## /features

ある特定の機能、ドメインでしか使わない api へのアクセサや定数、型、hooks,コンポーネントなどをすべて入れる。

## /store

アプリケーション全体のグローバルステートの管理に使う。

## /const

アプリケーション全体の定数を置く。

## /hooks

アプリケーション全体で使う共通ロジックを置く

## libs

ライブラリのラッパーや設定済みのインスタンスを export するファイルなどを置く。

例えば、axios など。

## /types

アプリケーション全体で使う型ファイルを置く。

## styles

アプリケーション全体で使う CSS ファイルを置く。

<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
