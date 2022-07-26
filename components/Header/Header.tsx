import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./header.module.css"
import Tippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css"
import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import ProductSearch from '../Search'

type Props = {}

const Header = (props: Props) => {
  const [show, setShow] = useState(false);
  const header = useRef<HTMLSpanElement>(null)
  const topHeader = useRef()
  const img = useRef()
  const btt = useRef()

  useEffect(() => {
    window.onscroll = () => {
      scrollHandler()
    }

    const scrollHandler = () => {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        header.current.classList.add("sticky");
        header.current.classList.add("top-0");
        header.current.classList.add("shadow-md");
        topHeader.current.classList.add("hidden");
        btt.current.classList.remove("hidden");
        btt.current.classList.add("animate-[wiggle_0.4s_ease-in-out]");
        header.current.classList.add("animate-[wiggle_0.4s_ease-in-out]");
      }
      else if (document.documentElement.scrollTop == 0) {
        header.current.classList.remove("sticky");
        header.current.classList.remove("top-0");
        header.current.classList.remove("shadow-md");
        topHeader.current.classList.remove("hidden")
        header.current.classList.remove("animate-[wiggle_0.4s_ease-in-out]")
        btt.current.classList.remove("animate-[wiggle_0.4s_ease-in-out]")
        btt.current.classList.add("hidden");
      }
    }
  }, [])

  return (
    <>
      <header className='bg-white z-50' ref={header} >
        <div ref={topHeader} id='abc' className="bg-[#373839]" >
          <nav className='flex justify-between max-w-[1170px] mx-auto py-4'>
            <ul className='flex'>
              <li className='relative separate'>
                <a className='flex items-center text-white text-xs' href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="#34c9db" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0354111111
                </a>
              </li>

              <li className='pl-4'>
                <a className='flex items-center text-white text-xs' href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="#34c9db" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9h - 18h : Thứ 2 - Thứ 6
                </a>
              </li>
            </ul>

            <ul className='flex'>
              <li className='flex items-center'>
                <Link href="/auth">
                  <a className='text-white text-xs'>
                    Đăng nhập/
                  </a>
                </Link>
                <Link href="/auth">
                  <a className='text-white text-xs'>
                    Đăng kí
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="max-w-[1170px] mx-auto border-b">
          <div ref={img} className="py-4 flex justify-between items-center cursor-pointer">
            <div className="max-w-[200px]">
              <Link className='' href="/">
                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/logo-mona-wooden-01.png" alt="" />
              </Link>
            </div>

            <div className="">
              <form action="" className='flex items-center'>
                <div className="separate relative min-h-[48px] bg-[#f5f5f5]">
                  <select className='bg-[#f5f5f5] p-3' name="" id="">
                    <option value="1">All</option>
                    <option value="2">Bình hoa gỗ</option>
                    <option value="3">Bát cơm gỗ</option>
                    <option value="4">Quà tặng</option>
                    <option value="5">Lục bình gỗ</option>
                  </select>
                </div>
                <ProductSearch />
              </form>
            </div>

            <div className="">
              <a href="/cart" className='flex items-center'>
                <p className='text-xl text-[#ccc]'>Giỏ hàng</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#34c9db" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto py-4 font-bold">
          <ul className='flex justify-evenly'>
            <li className='hover:text-[#ccc]'><Link href="/">TRANG CHỦ</Link></li>
            <li className='hover:text-[#ccc]'><Link href="#">GIỚI THIỆU</Link></li>
            <li className='hover:text-[#ccc]'><Link href="/product">SẢN PHẨM</Link></li>
            <li className='hover:text-[#ccc]'><Link href="/news">TIN TỨC</Link></li>
            <li className='hover:text-[#ccc]'><Link href="#">KHÁCH HÀNG</Link></li>
            <li className='hover:text-[#ccc]'><Link href="#">BẢO HÀNH</Link></li>
          </ul>
        </div>

        <div className="border-b w-[1170px] mx-auto"></div>
      </header>
      <div onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} ref={btt} className="fixed bottom-[20px] right-[20px] hidden p-2 bg-black rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </>
  )
}

export default Header