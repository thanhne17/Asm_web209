import React from 'react'

type Props = {}

const Intro = (props: Props) => {
    return (
        <div>
            <div  style={{ backgroundImage: `url(http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/07/multi-slider.jpg)` }} className="age-title-inner container align-center text-center flex-row-col medium-flex-wrap mx-auto " >
                <div className="title-wrapper uppercase flex-col">
                    <h1 className="entry-title mb-0 text-white">Giới thiệu</h1>
                </div>
                <div className="title-content flex-col">
                    <div className="title-breadcrumbs pb-half pt-half ">
                        <nav className="woocommerce-breadcrumb breadcrumbs text-white">
                            <a href="http://mauweb.monamedia.net/dogotaynguyen">Trang chủ</a>
                            <span className="divider">&#47;</span> Giới thiệu</nav>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">MONA MEDIA</h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
            </div>
                {/* text */}
                <div className="grid grid-rows-1 gap-3 justify-center items-center ">
                    <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                            <div className="grid grid-rows-2 gap-3 space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="w-full sm:w-auto flex flex-col justify-start items-start items-center ">
                                    <div className="relative group flex justify-center items-center h-[150px] w-[150px]">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                    </div>
                                    <div>
                                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-600 ">New Features</p>
                                    </div>
                                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                                        <p className="text-base leading-6 text-gray-600 w-4/7 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>
                                    {/*  */}
                                </div>
                                <div className="w-full sm:w-auto flex flex-col justify-start items-start items-center">
                                    <div className="relative group flex justify-center items-center h-[150px] w-[150px]">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                                    </div>
                                    <div>
                                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-600 ">Responsive</p>
                                    </div>
                                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                                        <p className="text-base leading-6 text-gray-600  text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                            {/*  */}
                            <div className=''>
                                <div className="relative group justify-center items-center  hidden lg:flex">
                                    <img className="object-center object-cover h-full w-full" src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/05/anywhere_finish_crop.png" alt="girl-image" />
                                </div>
                                <div className="relative group flex  justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                    <img className="object-center object-cover h-full w-full hidden md:block" src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/05/anywhere_finish_crop.png" alt="girl-image" />
                                    <img className="object-center object-cover h-full w-full md:hidden" src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/05/anywhere_finish_crop.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                </div>
                            </div>
                            {/* banner */}
                            <div className="grid grid-rows-2 gap-3 space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="w-full sm:w-auto flex flex-col justify-start items-start items-center ">
                                    <div className="relative group flex justify-center items-center h-[150px] w-[150px]">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                    </div>
                                    <div>
                                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-600 ">Unlimited Options</p>
                                    </div>
                                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                                        <p className="text-base leading-6 text-gray-600 w-4/7 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>
                                    {/*  */}
                                </div>
                                <div className="w-full sm:w-auto flex flex-col justify-start items-start items-center">
                                    <div className="relative group flex justify-center items-center h-[150px] w-[150px]">
                                        <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                                    </div>
                                    <div>
                                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-600 ">Customize Anything</p>
                                    </div>
                                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                                        <p className="text-base leading-6 text-gray-600  text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro