import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from "next/link";
import useProducts from "../../Hook/use-product";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Sliderr() {
    const { data, error } = useProducts();
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
        
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-5 md:gap-3 gap-5 items-center justify-start transition ease-out duration-700">
                                    {data?.map((item, index) => {
                                                return (
                                    <Slide index={1}>
                                        <div className="content-item-img  overflow-hidden hover:translate-y-[-5px] hover:shadow-md duration-200 ">
                                        <Link href={`/product/${item?.slug}`}>
                                        <a>
                                            <div>
                                                  <img src={item?.image[0]} alt="sitting area" className="w-[280px] h-[220px]" />
                                            </div>                     
                                            <div className="text-center pt-[20px] pb-[10px] opacity-75 ">
                                                <h2 className="font-semibold">{item?.name}</h2>
                                                <p className='text-[green]'>{
                                                                        addCommas(item?.price) + " VNĐ"
                                                                    }</p>
                                            </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </Slide>
                                    )
                                     })}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>


            </div>
        </div>
    );
}
function addCommas(price: any) {
    throw new Error("Function not implemented.");
}

