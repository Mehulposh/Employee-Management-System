import React from 'react'

const Header = ({handleLogout,name}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl text-white font-medium'>Hello , <br/> <span className='text-3xl font-semibold'>{name}</span> 😃 </h1>
        <button 
            onClick={handleLogout}
            className='bg-red-500 text-lg font-medium text-white px-4 py-3 rounded cursor-pointer'> Log Out</button>
    </div>
  )
}

export default Header