import 'nextjs-breadcrumbs/dist/index.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../model/layout'
import SiteLayout from '../components/layout/SiteLayout'
import {Provider} from "react-redux"
import {createStore} from "redux";
import allReducer from '../reducer';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? SiteLayout
  const store = createStore(allReducer)
  // store.subscribe(()=>{console.log(store.getState());
  // })
  return (
  <LayoutWrapper>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer /> 
      </Provider>
  </LayoutWrapper>
  )
}

export default MyApp