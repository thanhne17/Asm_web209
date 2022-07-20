import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import LayoutAdmin from '../components/layouts/admin';
import Layout from '../components/layouts';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout ;
  return  (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
