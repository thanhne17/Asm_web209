import React from 'react'

import { LayoutProps } from '../../model/layout'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


const SiteLayout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
        
    </div>
  )
}

export default SiteLayout