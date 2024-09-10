'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Category = dynamic(() => import('./Category'), { ssr: false })
const BestSeller = dynamic(() => import('./BestSeller'), { ssr: false })

const Index = () => {
    return (
        <div className='relative top-[39%]'>
            <div ><Category /></div>
            <div className='rounded-xl border shadow flex my-2'><BestSeller /></div>
        </div>
    )
}

export default Index
