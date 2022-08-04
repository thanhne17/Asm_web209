import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
    const router = useRouter()
    return (
        <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
            Page NotFound
            <p className='cursor-pointer flex items-center group hover:text-[#333]' onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-[-10px] duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Quay lại</p>
        </div>
    )
}

export default NotFound