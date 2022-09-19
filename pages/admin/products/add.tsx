import { userAgentFromString } from 'next/server'
import React, { useRef, useState } from 'react'
import LayoutAdmin from '../../../components/layout/admin'
import { SubmitHandler, useForm } from 'react-hook-form'
import useProducts from '../../../Hook/use-product'
import axios from 'axios'
import { create } from '../../../api/product'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

type forminput = {

}

const AddProducts = () => {
  const [loading, setLoading] = useState(true)
  const toartSuccess = useRef<HTMLDivElement>(null)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { add, data, error } = useProducts()
  const router = useRouter()
  const themsp: SubmitHandler<forminput> = (data: any) => {
    setLoading(false)
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "hzeskmhn")

    axios({
      url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded",

      }, data: formData,
    }).then((res) => {
      data.image = res.data.url
      try {
        toartSuccess.current.classList.toggle("hidden")
        toartSuccess.current.classList.toggle("block")
        add(data).then(() => {
          toast("Thêm sản phẩm thành công");
          // setLoading(true)
      }
        )
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
                <input {...register('name', { required: true, minLength: 8 })} type="text" placeholder='Product name' className='border p-2 w-full' name="name" id="" />
                {Object.keys(errors).length !== 0 && (
                  <div>
                    {errors.name?.type === "required" && <p className='text-red-600'>Tên sản phẩm không được bỏ trống</p>}
                  </div>
                )}
              </div>
              <div className='pb-4'>
                <label htmlFor="">Price</label> <br />
                <input type="number" placeholder='Product Price' className='border p-2 w-full' name="price" id="" {...register('price')} />
              </div>
              <div className='pb-4'>
                <label htmlFor="">Image</label> <br />
                <input type="file" autoComplete='img' placeholder='Product name' className='border p-2 w-full' name="image" id="" {...register('image')} />
                <img src="" id='preview' alt="" />
              </div>
              <div className='pb-4'>
                <label htmlFor="">Desc</label> <br />
                <textarea name="" id="" cols="" rows="10" className='rounded border w-full p-4' {...register('decription')}></textarea>
              </div>
              <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  {loading ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> :
                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>}
                  <span>Add</span>
                </button>
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