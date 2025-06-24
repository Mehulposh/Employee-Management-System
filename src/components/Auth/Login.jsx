import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 flex flex-col justify-around items-center h-[60%] px-20 rounded-xl'>
            <h3 className='text-xl text-gray-500 mb-5'>Login Page</h3>
            <form className='flex flex-col items-center justify-center'>
                <input 
                    className='border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl'
                    type='email' placeholder='Enter your email' />
                <input 
                    className='border-2 border-emerald-600  rounded-full mt-3 outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl'
                    type='password' placeholder='Enter password' />
                <button 
                    className='border-none rounded-full mt-3 outline-none bg-emerald-600  py-2 px-2 w-full text-lg      '
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login