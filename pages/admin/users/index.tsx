import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../../components/layout/admin'
import useProducts from '../../../Hook/use-product'

import useSWR from 'swr'
import useUsers from '../../../Hook/users'



const UsersAdmin = () => {
    const {data, error, dele } = useUsers()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Error</div>
    
    return (
        <div>
           
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
                                    {data?.map((user, index) => (
                                        <tr className="border-b" key={user._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                                {user.email}
                                            </td>
                                            {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img src={user.image} alt="" className='w-[100px] h-[100px]' /> 
                                            </td> */}
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => dele(`${user._id}`)} >Xóa</button> <br />
                                                <Link href={`/admin/products/${user._id}`}>edit</Link>
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

        // <div> {products.map( user => (
        //     <div key={user._id}><Link href={`/products/${user._id}`}>{user.name}</Link></div>
        //   ))}</div>
    )
}

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//     const data = await (await fetch('http://localhost:4000/api/products')).json();
//     return {
//         props: {
//             products: data.map((user: ProductType) => ({ _id: user._id, name: user.name, image : user.image, price: user.price }))
//         }
//     }
// }
UsersAdmin.Layout = LayoutAdmin
export default UsersAdmin