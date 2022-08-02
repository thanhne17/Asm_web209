import Link from 'next/link'
import React from 'react'

type Props = {}

const AuthHeader = (props: Props) => {
    return (
        <div>
            <div className="max-w-[1170px] mx-auto">
                <div className="py-2">
                    <div className="w-[200px]">
                        <Link href="/">
                            <a>
                                <img src="http://mauweb.monamedia.net/dogotaynguyen/wp-content/uploads/2018/08/logo-mona-wooden-01.png" alt="" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthHeader