import React, { useEffect, useRef } from 'react'
import styles from "./header.module.css"

type Props = {}

const Header = (props: Props) => {
  const header = useRef()
  const topHeader = useRef()
  const img = useRef()
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
        header.current.classList.add("animate-[wiggle_0.4s_ease-in-out]");
        img.current.classList.add("py-4")
      }
      else if(document.documentElement.scrollTop == 0) {
        header.current.classList.remove("sticky");
        header.current.classList.remove("top-0");
        header.current.classList.remove("shadow-md");
        topHeader.current.classList.remove("hidden")
        header.current.classList.remove("animate-[wiggle_0.4s_ease-in-out]")
        img.current.classList.remove("py-4")
      }
    }
  }, [])

  return (
    <header className='bg-white' ref={header} >
      <div ref={topHeader} id='abc' className="bg-[#373839] animate-[wiggle_0.4s_ease-in-out]" >
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
              <a className='text-white text-xs' href="#">
                Đăng nhập/
              </a>
              <a className='text-white text-xs' href="#">
                Đăng kí
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-[1170px] mx-auto">
        <div ref={img} className="py-8 flex justify-between items-center border-b">
          <div className="max-w-[200px]">
            <a className='' href="#">
              <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/logo-mona-wooden-01.png" alt="" />
            </a>
          </div>

          <div className="">
            <form action="" className='flex items-center'>
              <div className="separate relative">
                <select className='bg-[#f5f5f5] p-3' name="" id="">
                  <option value="1">All</option>
                  <option value="2">Bình hoa gỗ</option>
                  <option value="3">Bát cơm gỗ</option>
                  <option value="4">Quà tặng</option>
                  <option value="5">Lục bình gỗ</option>
                </select>
              </div>
              <div className="min-w-[300px]">
                <input className='bg-[#f5f5f5] p-3 outline-0 w-full indent-1' type="text" placeholder='Tìm kiếm sản phẩm...' />
              </div>
              <div className="bg-[#33c9db] p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
          </div>

          <div className="">
            <a href="#" className='flex items-center'>
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
          <li><a href="#">TRANG CHỦ</a></li>
          <li><a href="#">GIỚI THIỆU</a></li>
          <li><a href="#">SẢN PHẨM</a></li>
          <li><a href="#">TIN TỨC</a></li>
          <li><a href="#">KHÁCH HÀNG</a></li>
          <li><a href="#">BẢO HÀNH</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header