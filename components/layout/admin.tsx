import Link from 'next/link'
import React from 'react'
import { LayoutProps } from '../../model/layout'

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="flex flex-row ">


                <div className="flex flex-col  space-y-5 justify-between min-h-screen w-60 px-2 py-4 bg-gray-50">

                    <div className=" flex items-center justify-between text-gray-600 text-3xl px-5"><b>Reservations</b></div>

                    <div className="flex flex-col flex-auto">
                        <div className="p-2 hover:bg-pink-100">
                            <Link href={'/admin'} >
                                <div className="flex flex-row space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    <h4 className="font-bold text-gray-500 hover:text-pink-600 ">Dashboard</h4>
                                </div>
                            </Link>

                        </div>
                        <div className="p-2 hover:bg-pink-100 ">
                            <Link href={'/admin/products'} >
                                <div className="flex flex-row space-x-3 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                    <h4 className="font-regular text-gray-500 hover:text-pink-600">Products</h4>
                                </div></Link>

                        </div>
                        <div className="p-2 hover:bg-pink-100">
                            <Link href={'/admin/users'} >
                                <div className="flex flex-row space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <h4 className="font-regular text-gray-500 hover:text-pink-600">Users</h4>
                                </div>
                            </Link>

                        </div>

                    </div>

                    <div className="flex flex-col ">
                        <button className="rounded-full bg-pink-500 py-2 text-white text-lg">Logout</button>

                    </div>


                </div>


                <div className="flex-auto ">
                    <div className="flex flex-col">
                       
                        <div className="bg-blue-50 min-h-screen">
                            <div className='mt-8 sm:grid-cols-2 p-4 '>
                                {children}
                            </div>

                            {/* <div className=" mt-8 grid lg:grid-cols-3 sm:grid-cols-2 p-4 gap-10 ">
                                <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                                    <div>
                                        <div className="text-sm text-gray-400 ">Check in Today</div>
                                        <div className="flex items-center pt-1">
                                            <div className="text-3xl font-medium text-gray-600 ">34</div>
                                        </div>
                                    </div>
                                    <div className="text-pink-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                                    <div>
                                        <div className="text-sm text-gray-400 ">Check Out Today</div>
                                        <div className="flex items-center pt-1">
                                            <div className="text-3xl font-medium text-gray-600 ">44</div>
                                        </div>
                                    </div>
                                    <div className="text-pink-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                                    <div>
                                        <div className="text-sm text-gray-400 ">Total Properties</div>
                                        <div className="flex items-center pt-1">
                                            <div className="text-3xl font-medium text-gray-600 ">1000</div>
                                        </div>
                                    </div>
                                    <div className="text-pink-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                    </div>
                                </div>


                            </div>



                            <div className=" mt-5 grid  lg:grid-cols-3  md:grid-cols-3 p-4 gap-3">

                                <div className="col-span-2 flex flex-col   p-8 bg-white rounded shadow-sm">
                                    <b className="flex flex-row text-gray-500">Property Release for today</b>
                                    <canvas className="p-5" id="chartLine"></canvas>
                                </div>

                                <div className=" flex flex-col   p-5 bg-white rounded shadow-sm">
                                    <b className="flex flex-row text-gray-500">Occupancy Percentage</b>
                                    <canvas className="p-5" id="chartRadar"></canvas>
                                </div>



                            </div>
                            <div className="p-4 font-bold text-gray-600">Clients</div>
                            <div className="grid  lg:grid-cols-1  md:grid-cols-1 p-4 gap-3">
                                <div className="col-span-2 flex flex-auto items-center justify-between  p-5 bg-white rounded shadow-sm">
                                    <table className="min-w-full divide-y divide-gray-200 table-auto">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Title
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                Jane Cooper
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                jane.cooper@example.com
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    Admin
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                Jane Cooper
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                jane.cooper@example.com
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    Admin
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>*/}
                        </div> 
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default LayoutAdmin