'use client'

import React from 'react'
import Category from './Category'
import BestSeller from './BestSeller'

const Index = () => {
    return (
        <div className='relative top-[39%]'>
            <div className='flex'><Category /></div>
            <div className='rounded-xl border shadow flex my-2'><BestSeller /></div>
        </div>
    )
}

export default Index
