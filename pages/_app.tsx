import 'nextjs-breadcrumbs/dist/index.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../model/layout'
import SiteLayout from '../components/layout/SiteLayout'
import {Provider} from "react-redux"
import {createStore} from "redux";
import reducer from '../reducer/cart';
import allReducer from '../reducer';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? SiteLayout
  const store = createStore(allReducer)

  return (
  <LayoutWrapper>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  </LayoutWrapper>
  )
}

export default MyApp