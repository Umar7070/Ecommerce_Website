import React from 'react'

const page = () => {
  return (
    <div className='container'>
      <form action="" className='flex  justify-center w-[50%] m-auto  flex-col ' >
        <div className='grid grid-cols-2 gap-10 my-10'>

        <div className=' '>
          <input type="text" placeholder='enter your name' className='bg-gray-700 p-2   text-white rounded-lg  outline-none' />
        </div>
        <div className=''>
          <input type="text" placeholder='enter your email' className='bg-gray-700 p-2 rounded-lg text-white  outline-none' />
        </div>
        <div className=''>
          <input type="password" placeholder='enter your Password' className='bg-gray-700 p-2 rounded-lg text-white  outline-none' />
        </div>
        <div className=''>
          <input type="password" placeholder='enter your Confirm Password' className='bg-gray-700 p-2 rounded-lg text-white   outline-none' />
        </div>
        </div>
      <button className='bg-blue-500 p-1 rounded-lg text-white capitalize'>submit</button>


      </form>

      
    </div>
  )
}

export default page
