import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 flex flex-col justify-around items-center h-[60%] px-20 rounded-xl'>
            <h3 className='text-xl text-gray-500 mb-5'>Login Page</h3>
            <form 
                onSubmit={(e) => handleSubmit(e)} 
                className='flex flex-col items-center justify-center'
            >
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='text-gray-400 border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl'
                    type='email' placeholder='Enter your email' 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='text-gray-400 border-2 border-emerald-600  rounded-full mt-3 outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl'
                    type='password' placeholder='Enter password' 
                />
                <button 
                    className='border-none rounded-full mt-3 outline-none bg-emerald-600  py-3  px-8 w-full text-lg      '
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login