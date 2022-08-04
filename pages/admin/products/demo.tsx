import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { detail, getAll, update } from '../../../api/product'
import LayoutAdmin from '../../../components/layout/admin';

type Props = {
  data: any
}

type ProductProps = {
  product: any
}
type forminput = {

}
const ProductEdit = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState(props.data?.name)
  const suasp: SubmitHandler<forminput> = (data: any) => {
    console.log({
      name: name
    });

    // const file = data.image[0]
    // const formData = new FormData()

    // formData.append('file', file)
    // formData.append("upload_preset", "hzeskmhn")

    // axios({
    //   url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-formendcoded",

    //   }, data: formData,
    // }).then((res) => {
    //   data.image = res.data.url
    //   try {
    //     edit(data)
    //   } catch (error) {

    //   }
    // })
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
                  <input {...register('name')} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Product name' className='border p-2 w-full' name="name" />
                </div>
                <div className='pb-4'>
                  <label htmlFor="">Price</label> <br />
                  <input type="text" placeholder='Product name' className='border p-2 w-full' name="price" {...register('price')} />
                </div>
                <div className='pb-4'>
                  <label htmlFor="">Image</label> <br />
                  <input type="file" autoComplete='img' placeholder='Product name' className='border p-2 w-full' name="image" {...register('image')} />
                  <img src="" id='preview' alt="" />
                </div>
                <div className='pb-4'>
                  <label htmlFor="">Desc</label> <br />
                  <input type="text" placeholder='Product name' className='border p-2 w-full' name="" />
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

export const getStaticPaths: GetStaticPaths = async () => {
  // const {data, error} = useProducts()  
  const data = await getAll()
  const paths = data?.map((product: any) => ({ params: { slug: product.slug } }));
  return {
    paths,
    fallback: true, // blocking or true
  };
};
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const data = await detail(context.params?.slug)
  console.log(data);

  return {
    props: { data },
    revalidate: 5,
  };
};
ProductEdit.Layout = LayoutAdmin
export default ProductEdit