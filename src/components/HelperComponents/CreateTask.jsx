import React from 'react'

const CreateTask = () => {
  return (
    <div className='w-screen'>
        <div className='text-gray-300  mt-10 '>
            <form className=' w-full flex flex-col gap-5 items-center justify-center'>
                <div className='w-full text-center'>
                    <h3 className='mb-2'>Task Title</h3>
                    <input type='text' className='p-2 w-[80%] bg-gray-500 rounded' placeholder='Write the task title'/>
                </div>
                <div className='w-full text-center'>
                    <h3 className='mb-2'>Description</h3>
                    <textarea rows={10} cols={30} className='w-[80%] p-2 bg-gray-500 rounded' placeholder='Write description of the task'></textarea>
                </div>
                <div className='w-full text-center'>
                    <h3 className='mb-2'>Date</h3>
                    <input type='date' className='w-[80%] bg-gray-500 p-2 rounded'/>
                </div>
                <div className='w-full text-center'>
                    <h3 className='mb-2'>Assign To</h3>
                    <input type='text' placeholder='Employee name' className='w-[80%] rounded p-2 bg-gray-500 '/>
                </div>
                <div className='w-full text-center'>
                    <h3 className='mb-2'>Category</h3>
                    <input type='text' placeholder='Category' className='w-[80%] p-2 rounded bg-gray-500 '/>
                </div>

                <button className='bg-cyan-400 text-white font-semibold px-3 py-1 text-xl rounded mb-5'>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask