import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const authData = useContext(AuthContext);
  return (
    <div  className='bg-[#1C1C1C] rounded p-5 mt-5 h-50 '>
        <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between items-center'>
            <h2 className='w-1/5 text-xl'>Employee Name</h2>
            <h3 className='w-1/5 text-xl'>New Task</h3>
            <h5 className='w-1/5 text-xl'>Accepted Task</h5>
            <h5 className='w-1/5 text-xl'>Complete Task</h5>
            <h5 className='w-1/5 text-xl'>Failed Task</h5>
        </div>
       <div id='alltasks' className='overflow-auto h-[80%]'>
            {authData.employeesData.map(data => (
                <div className='border border-red-400 mb-2 py-2 px-4 rounded flex justify-between items-center' key={data.id}>
                    <h2 className='w-1/5 text-white text-xl '>{data.name}</h2>
                    <h3 className='w-1/5 text-blue-500 text-xl font-bold'>{data.taskCount.newTask}</h3>
                    <h5 className='w-1/5 text-purple-400 text-xl font-bold'>{data.taskCount.active}</h5>
                    <h5 className='w-1/5 text-green-300 text-xl font-bold'>{data.taskCount.completed}</h5>
                    <h5 className='w-1/5 text-indigo-500 text-xl font-bold'>{data.taskCount.failed}</h5>
                </div>
            ))}
       </div>
       
    </div>
  )
}

export default AllTasks