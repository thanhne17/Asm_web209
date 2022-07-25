import Breadcrumbs from 'nextjs-breadcrumbs';
import React from 'react'

type Props = {}

const BreadCrumds = (props: Props) => {
    return <Breadcrumbs
        useDefaultStyle={true}
        // inactiveItemClassName="relative hover:text-[#ccc] font-medium duration-300 after:content-[''] min-w-[70px] after:absolute after:w-[1px] after:h-[50%] after:top-[50%] after:translate-y-[-50%] after:bg-[#000] after:rotate-[30deg] after:left-[60px]"
        // listClassName="flex items-center"
        // containerClassName="min-w-[100px] max-w-[200px]"
        rootLabel="Home" />;
}

export default BreadCrumds