'use client'
import Image from 'next/image'
import Search from '../../../../public/assets/icons/Search.png'
import { useState } from 'react'
const SearchBar = () => {
    return (
        <div className='w-full rounded-full border border-black border-opacity-20 flex py-3 px-5 space-x-5'>
            <Image src={Search} alt="" className='aspect-square w-6 h-6'/>
            <input type="text" name="" id="" placeholder='Search Document'/>
        </div>
    )
}

export default SearchBar