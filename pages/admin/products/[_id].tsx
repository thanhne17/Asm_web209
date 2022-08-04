import axios from 'axios';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { update } from '../../../api/product'
import LayoutAdmin from '../../../components/layout/admin';
import useProducts from '../../../Hook/use-product';

type Props = {}
type forminput = {
    name: string,
    price: number,
    image: string,
  }
const ProductEdit = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {data, error, edit } = useProducts()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Error</div>

    const suasp: SubmitHandler<forminput> = ( data: any) => {
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
         edit(data)
        } catch (error) {
          
        }
      })
    } 
  return (
    <div>
        <div className="flex flex-col bg-white border rounded">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full   sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <form action="" onSubmit={handleSubmit(suasp)} className='p-4'>
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
                                <button>edit</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}


ProductEdit.Layout = LayoutAdmin
export default ProductEdit