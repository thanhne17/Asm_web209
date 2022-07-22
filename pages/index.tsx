import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import SiteLayout from '../components/layout/SiteLayout'
import Slide from '../components/Slide'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="h-[1000px]">
      <Slide />
    </div>
  )
}

export default Home
