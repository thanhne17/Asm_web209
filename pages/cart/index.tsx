import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import BreadCrumds from '../../components/BreadCrumd'
import { useSelector, useDispatch } from "react-redux"
import { getCart, removeCart } from '../../action/cart'
import Image from 'next/image'
import { getCarts } from '../../api/cart'

type Props = {}

const Cart = (props: Props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.reducer)
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

    var inputQuantity = useRef()
    const router = useRouter()
    
    return (
        < >
            <div className="container mx-auto mt-10">
                <div className="sm:flex shadow-md my-10 max-w-[1170px] mx-auto">
                    <div className="sm:w-3/4 sm:flex-0 flex-1 bg-white px-10 py-4">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                            <h2 className="font-semibold text-xl">{cart.cart?.length} SẢN PHẨM</h2>
                        </div>

                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">SỐ LƯỌNG
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">GIÁ</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">TỔNG</h3>
                        </div>
                        {
                            cart.cart?.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20">
                                                <Image height="96px" width="96px" src={item?.image}
                                                    alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">{item.name}</span>
                                                <span className="text-red-500 text-xs">Apple</span>
                                                <p onClick={() => {
                                                    // dele(item._id)
                                                    dispatch(removeCart({
                                                        itemId: item._id,
                                                        productId: item.idProduct
                                                    }))
                                                }}
                                                    className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs">
                                                    Remove
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg
                                                onClick={() => {
                                                    console.log(inputQuantity.current.value)
                                                }}
                                                className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path
                                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input ref={inputQuantity} className="mx-2 border text-center w-8" type="text" onChange={(e) => { console.log(e.target.value) }} value={item.quantity} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path
                                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">{addCommas(item.price)}</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">{addCommas(item.price * item.quantity)}</span>
                                    </div>
                                )
                            })
                        }

                        <p onClick={() => {
                            router.back()
                        }} className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </p>
                    </div>

                    <div id="summary" className="sm:w-1/4 w-full px-8 py-4 sm:py-4">
                        <h1 className="hidden sm:block font-semibold text-2xl border-b pb-8">Tóm tắt đơn hàng</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">{cart.cart?.length} SẢN PHẨM</span>
                            <span className="font-semibold text-sm">{addCommas(cart.price)}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Phí giao hàng</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Giao nhanh - <span className='text-[green]'><del>0 vnđ</del></span></option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm giá</label>
                            <input type="text" id="promo" placeholder="Nhập mã giảm giá" className="p-2 text-sm w-full border-b-[#000] border border-[#fff] outline-none focus:border-b-[#33c9db] duration-300" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Áp dụng</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng thanh toán</span>
                                <span>{addCommas(cart.price)} VND</span>
                            </div>

                            <Link href="/checkout">
                                <a className="text-base block text-center leading-none w-full py-4 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Thanh toán</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart