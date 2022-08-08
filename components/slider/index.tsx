import React, { useState } from "react";
import Link from "next/link";
import useProducts from "../../Hook/use-product";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
type prop = {
    module: any,
    slide: [],
    quantity: any
}

export default function Sliderr({ module, slide, quantity }: prop) {
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
            <Swiper
                // install Swiper modules
                modules={module}
                spaceBetween={20}
                slidesPerView={quantity}
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
                                <div key={index}>
                                    <Image height="50%" width="100%" layout="responsive" src={item} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

