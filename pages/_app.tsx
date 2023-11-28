// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
import Head from "next/head";
import '../styles/globals.css';
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp ({Component,pageProps}: AppProps): JSX.Element {
  return <>
    <Head>
      <title>First NEXTjs App</title>
      <link rel='icon' href='/favicon.ico'/>
              {/* picked fonts:Noto Sans Light300, Regular400, Medium500, Bold700 */}
      <link rel='preconnect' href="https://fonts.googleapis.com"/>
              {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps}/>
  </>;
};
export default MyApp;

// export default function App({ Component, pageProps }: AppProps): JSX.Element {
//   return  <Component {...pageProps} />
// };


