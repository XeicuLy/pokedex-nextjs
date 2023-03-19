import { Footer } from '@/components/layouts/footer/Footer';
import { Header } from '@/components/layouts/header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // 各ページの共通レイアウト
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
};

export default MyApp;
