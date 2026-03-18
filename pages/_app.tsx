import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Rye, Quicksand, Nunito } from 'next/font/google';
import { Toaster } from 'sonner';

const fontHeading = Rye({ weight: '400', subsets: ['latin'], variable: '--font-heading' });
const fontBody = Quicksand({ subsets: ['latin', 'vietnamese'], variable: '--font-sans' });
const fontMono = Nunito({ weight: ['400', '700', '900'], subsets: ['latin', 'vietnamese'], variable: '--font-mono' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} font-sans`}>
      <Toaster
        position="top-right"
        closeButton
        richColors
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}