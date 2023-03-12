import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // 各ページの共通レイアウト
  return (
    <RecoilRoot>
      <Head>
        <title>ポケモン図鑑</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
