import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import SiteLayout from '../components/layout/SiteLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <SiteLayout>
      <div className="h-[1000px]">
        <h1 className='text-xl text-[#ccc]'>hi</h1>
      </div>
    </SiteLayout>
  )
}

export default Home
