import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import SiteLayout from '../components/layout/SiteLayout'
import Slide from '../components/Slide'
import useProducts from '../Hook/use-product'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data, error, create } = useProducts();

  function addCommas(nStr: any) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }

    return x1 + x2;
  }
  return (
    <div className="container w-[1170px] mx-auto h-[auto]">
      <Slide />
      <div className="flex mt-[30px] ">
        <div className=" w-[20%] mt-[5px] h-[auto]">
          <div className="bg-[#333333] ">
            <h3 className="text-white p-3 text-lg font-semibold ">BÁN CHẠY </h3>
          </div>
          <div className="border bg-gray-50 rounded  h-[400px] ">
            <div className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
              <div className="w-[50px] h-[50px] mr-[10px] ">
                <img src="https://tse3.mm.bing.net/th?id=OIP.EDiC-7xd4U-FQnEdDUE_OAHaEp&pid=Api&P=0"
                  className="w-full h-full" alt="" />
              </div>
              <div>
                <a href="" className="w-[150px]">Đôi Tỳ Hưu</a>
                <p>5,500.000 đ</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
              <div className="w-[50px] h-[50px] mr-[10px] ">
                <img src="https://tse3.mm.bing.net/th?id=OIP.EDiC-7xd4U-FQnEdDUE_OAHaEp&pid=Api&P=0"
                  className="w-full h-full" alt="" />
              </div>
              <div>
                <a href="" className="w-[150px]">Đôi Tỳ Hưu</a>
                <p>5,500.000 đ</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
              <div className="w-[50px] h-[50px] mr-[10px] ">
                <img src="https://tse3.mm.bing.net/th?id=OIP.EDiC-7xd4U-FQnEdDUE_OAHaEp&pid=Api&P=0"
                  className="w-full h-full" alt="" />
              </div>
              <div>
                <a href="" className="w-[150px]">Đôi Tỳ Hưu</a>
                <p>5,500.000 đ</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
              <div className="w-[50px] h-[50px] mr-[10px] ">
                <img src="https://tse3.mm.bing.net/th?id=OIP.EDiC-7xd4U-FQnEdDUE_OAHaEp&pid=Api&P=0"
                  className="w-full h-full" alt="" />
              </div>
              <div>
                <a href="" className="w-[150px]">Đôi Tỳ Hưu</a>
                <p>5,500.000 đ</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
              <div className="w-[50px] h-[50px] mr-[10px] ">
                <img src="https://tse3.mm.bing.net/th?id=OIP.EDiC-7xd4U-FQnEdDUE_OAHaEp&pid=Api&P=0"
                  className="w-full h-full" alt="" />
              </div>
              <div>
                <a href="" className="w-[150px]">Đôi Tỳ Hưu</a>
                <p>5,500.000 đ</p>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner1.jpg"
              alt="" />
          </div>
          <div className="mt-[20px] ">
            <div className="bg-[#333333]">
              <h3 className="text-white p-3 text-lg font-semibold">GIẢM GIÁ</h3>
            </div>
            <div className="h-[350px] bg-zinc-200">
              <div
                className="content-item-img border overflow-hidden hover:translate-y-[5px]   duration-200  ml-[20px] mr-[20px]">
                <div className="img mt-[30px]">
                  <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                    className="" alt="" />
                </div>

                <div className="text-center pt-[20px] pb-[10px] opacity-75 bg-white ">
                  <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                  <p>$546.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-[5px] ml-[30px]">
          <div className="flex">
            <div className="w-[50%] pr-[10px]">
              <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner4.jpg"
                alt="" />
            </div>
            <div className="w-[50%] pl-[10px]">
              <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner5.jpg"
                alt="" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 mt-[30px]">SẢN PHẨM TIÊU BIỂU</h3>
            <p className="mb-[20px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
          </div>
          <div className=" grid grid-cols-3 gap-4">
            {data?.data.map((item, index) => {
              return (
                <div key={index} className="shadow hover:translate-y-[-5px] hover:shadow-2xl duration-200 overflow-hidden">
                  <Link href={`/product/${item?.slug}`}>
                    <a>
                      <div className="img h-[300px] w-[300px]">
                        <img className='h-full' src={item?.image[0]} alt="" />
                      </div>
                      <div className="py-[15px] px-2">
                        <h3 className='font-semibold'>{item?.name}</h3>
                        <p className='text-[green]'>{
                          addCommas(item?.price) + " VNĐ"
                        }</p>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      <hr className="mt-[100px] mb-[30px]" />
      <div>
        <div className="flex">
          <div className="w-[50%] pr-[20px] pl-[15px]">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner4.jpg"
              alt="" />
          </div>
          <div className="w-[50%] pl-[20px] pr-[15px]">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner5.jpg"
              alt="" />
          </div>
        </div>
      </div>
      <hr className="mt-[30px] mb-[100px]" />
      <div>
        <h3 className=" font-bold text-xl text-center pb-[10px]">GỖ LIỀN TẤM</h3>
        <p className="mb-[20px] text-center ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
      </div>
      <div className="grid grid-cols-5  gap-5 pl-[15px]  pr-[15px]">
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <h3 className=" font-bold text-xl text-center pb-[10px]">TƯỢNG GỖ PHONG THỦY</h3>
        <p className="mb-[20px] text-center ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
      </div>
      <div className="grid grid-cols-5  gap-5 pl-[15px] mb-[30px]  pr-[15px]">
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200  ">
          <div className="img">
            <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
              className="w-[460px]" alt="" />
          </div>

          <div className="text-center pt-[20px] pb-[10px] opacity-75">
            <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
            <p>$546.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

