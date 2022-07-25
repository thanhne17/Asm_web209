import 'nextjs-breadcrumbs/dist/index.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../model/layout'
import SiteLayout from '../components/layout/SiteLayout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? SiteLayout
  return (<LayoutWrapper><Component {...pageProps} />
  </LayoutWrapper>)
}

export default MyApp