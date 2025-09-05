import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8082/api/v1/user/create-user',{
                name: name,
            email: email,
            password: password
            })
            
            if(response.status === 201){
                alert('Account Created Successfully');
                navigate('/');
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
        setEmail('');
        setPassword('');
        setName('');
    }

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 flex flex-col justify-around items-center h-[60%] px-20 rounded-xl'>
            <h3 className='text-xl text-gray-500 mb-5'>Login Page</h3>
            <form 
                onSubmit={(e) => handleSubmit(e)} 
                className='flex flex-col items-center justify-center '
            >
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='text-gray-400 border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 py-4 px-5 text-xl mb-3'
                    type='text' placeholder='Enter your name' 
                />
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
                    Signup
                </button>
            </form>
        </div>
        <p className='text-gray-300 mt-2'>Login , if already registered</p>
        <button 
            className='border-none rounded-full mt-2 outline-none bg-emerald-600  py-3  px-8 w-70 text-lg'
            onClick={()=> navigate('/')}
        >
            Login
        </button>
    </div>
  )
}

export default Signup