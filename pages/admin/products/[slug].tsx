import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import {getAll, update } from '../../../api/product'
import LayoutAdmin from '../../../components/layout/admin';
import useProducts from '../../../Hook/use-product';
import { ProductType } from '../../../types/products';

type Props = {
  data: any
}

type ProductProps = {
  product: any
}
type forminput = {

}
const ProductEdit = ({ product }: ProductProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter()
  useEffect(() => {
    reset(product)
  }, [])
  let imageUpdate = ""
  const suasp: SubmitHandler<forminput> = async (data: any) => {
    try {
      console.log(data.image[0]);
      if(data.image[0] != 'h'){
        const file = data.image[0]
        const formData = new FormData()
    
        formData.append('file', file)
        formData.append("upload_preset", "hzeskmhn")

        const {data: newimage} = await axios({
          url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
    
          }, data: formData,
      })
      imageUpdate = newimage.url
      data.image = imageUpdate
      console.log(data.image)
      }
      update(data)
      router.push("/admin/products")
    } 
    catch (error) {
      
    }
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
                  <input type="file" autoComplete='img' placeholder='Product name' className='border p-2 w-full' name="image" id="" {...register('image')}  />
                  <img src="" id='preview' alt="" />
                </div>
                <div className='pb-4'>
                  <label htmlFor="">Desc</label> <br />
                  <input type="text" placeholder='Product name' className='border p-2 w-full' name="" id=""  />
                </div>
                <div>
                  <button className='rounded-full bg-pink-500 py-2 px-10 text-white text-lg'>edit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:4000/api/products`)).json()
  const paths = data.map((product: ProductType) => (
    { params: { slug: product.slug } }
  ))
  console.log(paths);
  
  return {
    paths,
    fallback: true
  }
};
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  console.log(context);
  
  const product = await (await fetch(`http://localhost:4000/api/product/${context.params?.slug}`)).json()
  console.log(product);
  
  return {
    props: { product },
    revalidate: 5,
  };
};
ProductEdit.Layout = LayoutAdmin
export default ProductEdit