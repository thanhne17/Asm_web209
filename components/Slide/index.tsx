import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  module: any,
  slide: [],
  quantity: any
}

const Slide = ({ module, slide, quantity }: Props) => {
  const [slideQuantity, setSlideQuantity] = useState(5)
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
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
   
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }
  
  const screenSize = useWindowSize()
  if (screenSize.width < 640) {
    const size = true
    if (size) {
      // setSlideQuantity(2)
      console.log(1);
      
    }
  }
  
  return (
    <Swiper
      // install Swiper modules
      modules={module}
      spaceBetween={20}
      slidesPerView={slideQuantity}
      navigation
      autoplay
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
    >
      {
        slide?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div key={index} className="hover:translate-y-[-5px] duration-200 h-[350px] sm:text-black">
                <Link href={`/product/${item?.slug}`}>
                  <a>
                    <div className="overflow-hidden">
                      <img className='h-[250px] W-[250px]' src={item?.image[0]} alt="" />
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
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default Slide