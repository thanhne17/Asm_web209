import React from 'react'
import Signin from "../components/Auth/Signin"
import AuthLayout from '../components/layout/AuthLayout'

type Props = {}

const auth = (props: Props) => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <Signin />
    </div>
  )
}

auth.Layout = AuthLayout
export default auth