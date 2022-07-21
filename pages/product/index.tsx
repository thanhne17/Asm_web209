import Link from 'next/link'
import React from 'react'
import SiteLayout from '../../components/layout/SiteLayout'

type Props = {}

const Product = (props: Props) => {
    return (
        
            <main className='py-4'>
                <div className="w-[1170px] mx-auto flex justify-between pt-[20px] pb-[20px]">
                    <div className="">
                        <div>
                            Trang chủ / Cửa hàng
                        </div>
                        <div>
                            <i className="fa-solid fa-bars"></i> Lọc
                        </div>
                    </div>
                    <div className="pt-[20px] flex items-center">
                        <div className="mr-[20px]">
                            Hiển thị 1-20 trong 38 kết quả
                        </div>
                        <div className="border">
                            <select name="" id="">
                                <option value="">Thứ tự sản phẩm</option>
                                <option value="">Thứ tự sản phẩm</option>
                                <option value="">Thứ tự sản phẩm</option>
                                <option value="">Thứ tự sản phẩm</option>
                                <option value="">Thứ tự sản phẩm</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container grid gap-4 grid-cols-4 w-[1170px] mx-auto">
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        <Link href="/product/1">
                            <a>
                                <div className="img">
                                    <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                        className="w-[460px]" alt="" />
                                </div>
                                <div className="text-center pt-[20px] pb-[10px]">
                                    <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                    <p>$546.00</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/2"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/3"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/4"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/5"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/6"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/7"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <div className="shadow hover:translate-y-[-5px] hover:shadow-xl duration-200">
                        {/* <Link href="product/8"> */}
                            <div className="img">
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/853c7d32df293e776738_109884_anhkhac0-300x300.jpg"
                                    className="w-[460px]" alt="" />
                            </div>
                            <div className="text-center pt-[20px] pb-[10px]">
                                <h3>Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm</h3>
                                <p>$546.00</p>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </main>
      
    )
}

export default Product