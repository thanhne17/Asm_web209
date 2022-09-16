import { userAgentFromString } from 'next/server'
import React, { useRef } from 'react'
import LayoutAdmin from '../../../components/layout/admin'
import {SubmitHandler, useForm } from 'react-hook-form'
import useProducts from '../../../Hook/use-product'
import axios from 'axios'
import { create } from '../../../api/product'
import { useRouter } from 'next/router'

type forminput = {

}

const AddProducts = () => {
  const toartSuccess = useRef<HTMLDivElement>(null)
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {add, data, error } = useProducts()
  const router = useRouter()
  const themsp: SubmitHandler<forminput> = ( data: any) => {
console.log(data.image[0]);
   
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file) 
    formData.append("upload_preset","hzeskmhn")

    axios({
      url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
      method: "POST",
      headers: {
          "Content-Type":"application/x-www-formendcoded",

      }, data: formData,
    }).then((res) => {
      data.image = res.data.url 
      try {
        
        toartSuccess.current.classList.toggle("hidden")
        toartSuccess.current.classList.toggle("block")
        add(data)
        router.push("/admin/products")

      } catch (error) {
        
      }
    })
  } 
  return (
    <div>
      <div ref={toartSuccess} id="toast-success" className="absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 hidden" role="alert">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Thêm sản phẩm thành công.</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
        <div className="flex flex-col bg-white border rounded">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full   sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <form action="" onSubmit={handleSubmit(themsp)} className='p-4'>
                              <div className='pb-4'>
                                <label htmlFor="">Name</label> <br />
                                <input {...register('name')} type="text" placeholder='Product name' className='border p-2 w-full' name="name" id="" />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Price</label> <br />
                                <input type="text" placeholder='Product name' className='border p-2 w-full' name="price" id="" {...register('price')} />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Image</label> <br />
                                <input type="file" autoComplete='img' placeholder='Product name' className='border p-2 w-full' name="image" id="" {...register('image')} />
                                <img src="" id='preview' alt="" />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Name</label> <br />
                                <input type="text" placeholder='Product name' className='border p-2 w-full' name="" id="" />
                              </div>
                              <div>
                                <button className=''>add</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
AddProducts.Layout = LayoutAdmin
export default AddProducts