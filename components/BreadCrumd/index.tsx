import Breadcrumbs from 'nextjs-breadcrumbs';
import React from 'react'

type Props = {}

const BreadCrumds = (props: Props) => {
  return <Breadcrumbs useDefaultStyle={false} listClassName="flex justify-between" containerClassName="min-w-[100px] max-w-[200px]" rootLabel="Home" />;
}

export default BreadCrumds