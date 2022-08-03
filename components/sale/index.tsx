import React from 'react'

type Props = {}

const Sale = (props: Props) => {
    return (
        <div className="mt-6">
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
    )
}

export default Sale