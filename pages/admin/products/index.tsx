import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../../components/layout/admin'
import { ProductType } from '../../../types/products'

type ProductProps = {
    products: ProductType[]
}

const ProductsAdmin = ({ products }: ProductProps) => {
    return (
        <div>
            <div className='mb-5 '>
            <Link href={'/products/add'}><button className='px-3 py-2 bg-[#EC4899] text-white font-bold rounded hover:bg-pink-400 '>Add product</button></Link>
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
                                            Image
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Handle
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, index) => (
                                        <tr className="border-b" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Otto
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                @mdo
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

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    const data = await (await fetch('http://localhost:4000/api/products')).json();
    return {
        props: {
            products: data.map((item: ProductType) => ({ _id: item._id, name: item.name }))
        }
    }
}
ProductsAdmin.Layout = LayoutAdmin
export default ProductsAdmin