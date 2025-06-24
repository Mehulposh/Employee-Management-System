import React from 'react'

const CreateTask = () => {
  return (
    <div className=' bg-gray-800 rounded-xl py-5 px-6 mt-5'>
        <div className='text-gray-300   '>
            <form className=' w-full flex  gap-5 items-start justify-around'>
                <div className='w-1/2'>
                    
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Task Title</h3>
                        <input type='text' className='p-2 w-[80%] bg-gray-500 rounded' placeholder='Write the task title'/>
                    </div>
                
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Date</h3>
                        <input type='date' className='w-[80%] bg-gray-500 p-2 rounded'/>
                    </div>
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Assign To</h3>
                        <input type='text' placeholder='Employee name' className='w-[80%] rounded p-2 bg-gray-500 '/>
                    </div>
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Category</h3>
                        <input type='text' placeholder='Category' className='w-[80%] p-2 rounded bg-gray-500 '/>
                    </div>
                </div>
                <div className='w-1/2 text-left mt-2 flex flex-col'>
                    <div className='w-full'>
                        <h3 className='mb-2'>Description</h3>
                        <textarea rows={10} cols={30} className='w-full p-2 bg-gray-500 rounded' placeholder='Write description of the task'></textarea>
                    </div>
                    <button className='bg-cyan-400 mt-5 text-white font-semibold px-3 py-1 text-xl rounded '>Create Task</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default CreateTask