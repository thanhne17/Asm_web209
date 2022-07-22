import React from 'react'
import { LayoutProps } from '../../model/layout'

type Props = {}

const AuthLayout = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout