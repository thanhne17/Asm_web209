import React, { useRef, useState } from 'react'
import Tippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css"
import Link from 'next/link'
import useProducts from '../../Hook/use-product'
import { searchProduct } from '../../api/product'

type Props = {}

const ProductSearch = (props: Props) => {
    const btnSearch = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    }

    const iconLoading = () => {
        return (
            <svg className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-blue-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        )
    }

    const [loading, setLoading] = useState(btnSearch)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const input = useRef<HTMLSpanElement>(null)
    const typingTimeoutRef = useRef(null);

    const { searchPr} = useProducts();

    function handlerSearchChange(e) {
        const value = e.target.value
        setSearch(value)

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        setLoading(iconLoading)
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: value,
            };
            const getSearch =async () => {
                const data = await searchProduct(formValues.search)
                if (data?.length >= 1) {
                    setSearchResult(data)
                    setLoading(btnSearch)
                }
                else if(data.length <= 0) {
                    setSearchResult([])
                    setLoading(btnSearch)
                }
            }
            getSearch()
        }, 300);
    }

    return (
        <>
            <div className="">
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    placement="bottom"
                    render={attrs => (
                        <div className="w-[300px] shadow-xl rounded-xl bg-white border overflow-hidden" {...attrs}>
                            {searchResult.map((item, index) => {
                                return (
                                    <Link href={`/product/${item?.slug}`} key={index} className="">
                                        <a className='flex items-center hover:bg-[#ddd]  p-4'>
                                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-2">
                                                <img className='w-full h-full' src={item?.image[0]} alt="" />
                                            </div>
                                            <p>{item?.name}</p>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    )}>
                    <div className="min-w-[300px]">
                        <input ref={input} onChange={handlerSearchChange} value={search} className='bg-[#f5f5f5] p-3 outline-0 w-full indent-1' type="text" placeholder='Tìm kiếm sản phẩm...' />
                    </div>
                </Tippy>
            </div>
            <div className="bg-[#33c9db] p-3">
                {loading}
            </div>
        </>
    )
}

export default ProductSearch