import React from 'react'

const TaskList = ({data}) => {
   
  return (
    <div id='tasklist' className=' h-[55%] py-10 mt-10 flex items-center justify-start gap-5 overflow-x-auto rounded-xl'>
        
        {data.map(task => (
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
        </div>
        ))}
       
    </div>
  )
}

export default TaskList