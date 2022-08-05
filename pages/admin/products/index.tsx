import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../../components/layout/admin'
import useProducts from '../../../Hook/use-product'
import { ProductType } from '../../../types/products'
import useSWR from 'swr'



const ProductsAdmin = () => {
    const {data, error, dele } = useProducts()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Error</div>

    const remove = (item: any) =>{
        const confirm = window.confirm(`Ban co muon xoa: ${item.name}`)
        if(confirm){
            
            dele(`${item._id}`)
        }
    }
    
    return (
        <div>
            <div className='mb-5 '>
            <Link href={'/admin/products/add'}><button className='px-3 py-2 bg-[#EC4899] text-white font-bold rounded hover:bg-pink-400 '>Add product</button></Link>
            </div>
            <div className="flex flex-col bg-white border rounded">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Image
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item, index) => (
                                        <tr className="border-b" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                                {item.price}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img src={item.image} alt="" className='w-[100px] h-[100px]' /> 
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap my-9 ">
                                                <button className=' bg-red-600 text-white rounded hover:bg-red-800 mb-4 px-3 py-2  ' onClick={() => remove(item)} >Xóa</button> <br />
                                                <button className='rounded bg-blue-600 text-white  hover:bg-blue-800 mb-4 px-3 py-2'><Link  href={`/admin/products/${item.slug}`}>edit</Link></button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div> {products.map( item => (
        //     <div key={item._id}><Link href={`/products/${item._id}`}>{item.name}</Link></div>
        //   ))}</div>
    )
}

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//     const data = await (await fetch('http://localhost:4000/api/products')).json();
//     return {
//         props: {
//             products: data.map((item: ProductType) => ({ _id: item._id, name: item.name, image : item.image, price: item.price }))
//         }
//     }
// }
ProductsAdmin.Layout = LayoutAdmin
export default ProductsAdmin