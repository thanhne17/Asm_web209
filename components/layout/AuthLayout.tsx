import React from 'react'
import { LayoutProps } from '../../model/layout'
import Footer from '../Footer/Footer'
import AuthHeader from './components/AuthHeader'

type Props = {}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AuthHeader />
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout