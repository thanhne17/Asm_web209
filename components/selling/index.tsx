import React from 'react'
import Link from 'next/link'
import useProducts from '../../Hook/use-product';

type Props = {}

const Selling = (props: Props) => {
    const { data, error} = useProducts();
     
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
        <div className="">
            <div className="bg-[#333333] ">
                <h3 className="text-white p-3 text-lg font-semibold ">BÁN CHẠY </h3>
            </div>
            <div className="border bg-gray-50 rounded  h-[400px]  overflow-y-scroll">
            {data?.map((item, index) => {
              return (
                <Link href={`/product/${item?.slug}`}>
                    <a>
                <div key={index}  className="flex items-center pt-[15px] pl-[15px] pb-[15px] pr-[10px]">
                        <div className="w-[50px] h-[50px] mr-[10px] ">
                            <img src={item?.image[0]} className="w-full h-full" alt="" />
                                
                        </div>
                        <div>
                            <a href="" className="w-[150px]">{item?.name}</a>
                            <p className='text-[green]'>{
                          addCommas(item?.price) + " VNĐ"
                        }</p>
                        </div> 
                  
                </div>  
                <hr />
                </a>
                  </Link>   
                 )
                })}  
            </div>
            <div className="mt-[20px]">
                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/h3-banner1.jpg"
                    alt="" />
            </div>
        </div>
    )
}

export default Selling