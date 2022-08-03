import React, { useRef, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import BreadCrumds from '../../components/BreadCrumd'
import { detail, getAll, list } from '../../api/product'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import useProducts from '../../Hook/use-product'
import Selling from '../../components/selling'

type Props = {
    data: any
}

type ProductProps = {
    product: any
}


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductDetai = (props: Props) => {
    const [quality, setQuality] = useState(1)
    const [scale, setScale] = useState(true)

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
    const plusRef = useRef();
    const minusRef = useRef();
    const imgRef = useRef();

    const onHandlerClick = (e) => {
        if (e === "plus") {
            setQuality(pre => pre + 1)
        }
        else {
            if (quality == 1) {
                minusRef.setAttribute("disable", "")
            }
            else setQuality(pre => pre - 1)
        }

    }
    return (
        <div className='flex max-w-[1170px] mx-auto py-8'>

            {
                scale ?
                    ""
                    : <div className="fixed bg-[#66666663] top-0 left-0 right-0 flex items-center justify-center h-full w-full z-50" onClick={()=>{setScale(true)}}>
                        <img className='w-[40%]' src={props.data?.image[0]} alt="" />
                    </div>
            }

            <div className="basis-2/6">
                <Selling />
            </div>

            <div className="ml-8 pl-8 border-l">
                <div className="">
                    {/* Image gallery */}
                    <div className="sm:flex p-4 sm:p-0">
                        <div className="basis-1/2">
                            <div onClick={()=>{setScale(!scale)}} className="lg:block sm:mr-12">
                                <Image
                                    layout='responsive'
                                    width="100%"
                                    height="100%"
                                    src={props.data?.image[0]}
                                    alt=""
                                    className="object-center object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex-1 pt-4">
                            <BreadCrumds />
                            <div className="lg:col-span-2">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.data?.name}</h1>
                            </div>
                            {/* Options */}
                            <div className="mt-4 lg:mt-0 lg:row-span-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl text-gray-900">{addCommas(props.data?.price)} VNĐ</p>
                            </div>
                            <div className="py-12 flex items-center">
                                <div className="border h-[32px] flex items-center">
                                    <i onClick={() => {
                                        onHandlerClick("plus")
                                    }}
                                        className="border-r cursor-pointer h-full flex items-center justify-center text-[14px] w-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </i>
                                    <input min={1} max={9999} className='w-[50px] text-[16px] cursor-text text-center' type="text" role={'spinbutton'} onChange={(e) => {
                                        setQuality(e.target.value)
                                    }} value={quality} />
                                    <i ref={minusRef} onClick={() => {
                                        onHandlerClick("minus")
                                    }}
                                        className="cursor-pointer border-l h-full flex items-center justify-center text-[14px] w-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                            <div className="">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                    Mua ngay
                                </button>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6">
                                    <h1 className='font-bold text-2xl'>Mô tả</h1>
                                    <p className="text-base text-gray-900">{props.data?.decription}</p>
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6 space-y-6">
                                <h1 className='font-bold text-2xl'>Đánh giá</h1>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const {data, error} = useProducts()  
    const data = await getAll()
    const paths = data?.map((product: any) => ({ params: { slug: product.slug } }));
    return {
        paths,
        fallback: true, // blocking or true
    };
};
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    const data = await detail(context.params?.slug)
    return {
        props: { data },
        revalidate: 5,
    };
};

export default ProductDetai