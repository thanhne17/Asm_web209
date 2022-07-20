import React from 'react'
import { Outlet } from 'react-router-dom'
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