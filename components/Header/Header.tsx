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
  const topHeader = useRef<HTMLDivElement>(null)
  const img = useRef<HTMLDivElement>(null)
  const btt = useRef<HTMLDivElement>(null)

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

  const autoCloseMenu = () => {
    setShow(false)
  }

  return (
    <>
      <header className='bg-white z-50' ref={header} >
        <div className="sm:block hidden">
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
                <Link href="/cart">
                  <a className='flex items-center'>
                    <p className='text-xl text-[#ccc]'>Giỏ hàng</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:fill-[#34c9db] duration-300" fill="none" viewBox="0 0 24 24" stroke="#34c9db" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </a>
                </Link>
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
        </div>

        <div className="sm:hidden block">
          <div className="flex justify-between items-center p-2">
            <div className="relative flex-1">
              <div className="" onClick={() => {
                setShow(!show)
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              {show ?
                <>
                  <div className="absolute bg-[#fff] min-w-[180px] rounded shadow-xl border overflow-hidden select-none animate-[fade_0.2s] z-50">
                    <div className="flex">
                      <ProductSearch />
                    </div>
                    <ul className=''>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="/">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <p>TRANG CHỦ</p>
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="#">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            GIỚI THIỆU
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="/product">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                            SẢN PHẨM
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="/news">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            TIN TỨC
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="#">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            KHÁCH HÀNG
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="#">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            BẢO HÀNH
                          </a>
                        </Link>
                      </li>
                      <li onClick={autoCloseMenu} className='hover:text-[#fff] hover:bg-[#333] px-2'>
                        <Link href="/auth">
                          <a className='flex py-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            ĐĂNG NHẬP
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="fixed w-full h-full top-0" onClick={autoCloseMenu}>
                  </div>
                </>
                : ""}
            </div>
            <div className="select-none">
              <Link href="/">
                <a>
                  <img className='w-[190px] h-[50px]' src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/logo-mona-wooden-01.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="flex justify-end flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#33c9db" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="border-b max-w-[1170px] mx-auto"></div>
      </header>
      <div onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} ref={btt} className="fixed z-50 bottom-[20px] right-[20px] hidden p-2 bg-black rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </>
  )
}

export default Header