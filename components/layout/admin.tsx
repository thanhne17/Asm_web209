import Link from 'next/link'
import React from 'react'
import { LayoutProps } from '../../model/layout'




const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link href="/AdminProducts">Admin</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                </ul>
            </div>
            {children}
        </div>
    )
}

export default LayoutAdmin