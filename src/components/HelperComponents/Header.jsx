import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl text-white font-medium'>Hello , <br/> <span className='text-3xl font-semibold'>Mehul</span> 😃 </h1>
        <button 
            className='bg-red-500 text-lg font-medium text-white px-4 py-3 rounded cursor-pointer'> Log Out</button>
    </div>
  )
}

export default Header