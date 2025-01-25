'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Category = dynamic(() => import('./Category'), { ssr: false })
const BestSeller = dynamic(() => import('./BestSeller'), { ssr: false })

const Index = () => {
    return (
        <>
            <div className='h-[70%]  relative top-[39%]'>
                <Category />
            </div>
            <div className='rounded-xl border-4 shadow flex my-4 border-slate-300'><BestSeller /></div>
        </>
    )
}

export default Index
