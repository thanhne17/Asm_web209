import React from 'react'
import LayoutAdmin from '../../../components/layout/admin'

type Props = {}

const AddProducts = (props: Props) => {
  return (
    <div>
        <div className="flex flex-col bg-white border rounded">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full   sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <form action="" className=' p-4'>
                              <div className='pb-4'>
                                <label htmlFor="">Name</label> <br />
                                <input type="text" placeholder='Product name' className='border p-2 w-full' name="" id="" />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Price</label> <br />
                                <input type="text" placeholder='Product name' className='border p-2 w-full' name="" id="" />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Image</label> <br />
                                <input type="file" autoComplete='img' placeholder='Product name' className='border p-2 w-full' name="" id="" />
                                <img src="" id='preview' alt="" />
                              </div>
                              <div className='pb-4'>
                                <label htmlFor="">Name</label> <br />
                                <input type="text" placeholder='Product name' className='border p-2 w-full' name="" id="" />
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