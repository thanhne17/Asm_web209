import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../components/layouts/admin'
import { ProductType } from '../../types/products'

type ProductProps = {
    products: ProductType[]
}

const ProductsAdmin = ({products}: ProductProps) => {
  return (
    <div> {products.map( item => (
        <div key={item._id}><Link href={`/products/${item._id}`}>{item.name}</Link></div>
      ))}</div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    const data = await (await fetch('http://localhost:4000/api/products')).json();
    return {
        props: {
            products: data.map((item:ProductType)=> ({_id:item._id, name: item.name}))
        }
    }
}
ProductsAdmin.Layout = LayoutAdmin
export default ProductsAdmin