import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
       <div>
        <div className='flex justify-center items-center flex-col my-10'>
          <h1 className='text-gray-800 uppercase font-bold text-3xl'>cart is empty</h1>
          <Link href='/product'>
          <button className='my-6 bg-black text-white w-[150px] h-[50px] rounded-lg uppercase'>shop now</button>
          </Link>
        </div>
      
    </div>
      
    </div>
  )
}

export default page
