import React from 'react'

const NewTask = ({task}) => {
  return (
        <div className='h-full rounded-xl flex-shrink-0 w-[300px] bg-red-400 p-5' key={task.id}>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 px-3 py-1 rounded text-sm text-white'>    
                    {task.priority}
                </h3>
                <h4 className='text-sm text-white'>
                    {task.date}
                </h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold text-white'>
                {task.title}
            </h2>
            <p className='text-sm font-medium text-gray-200 text-justify mt-2'>
                {task.description}
            </p>
            <div className=' mt-4 '>
                <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask