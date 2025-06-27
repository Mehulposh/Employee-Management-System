import React,{useState,useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'



const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [description, setescription] = useState('');
    const [priority, setPriority] = useState('');

   const {setUserData} = useContext(AuthContext);
    
    const handleSubmit =  (e) => {
        e.preventDefault();

        const data = JSON.parse(localStorage.getItem('employees'));
        
        const alltasks = data.find(task => task.name === assignTo).tasks;
        
        const id = alltasks.length > 0 ? Math.max(...alltasks.map(task => task.id)) + 1 : 1;

        const Task= {id,title,description,date,category,active:false,newTask:true,completed:false,failed:false,priority};

              

        data.forEach(item => {
            if(assignTo === item.name){
                item.tasks.push(Task);
                item.taskCount.newTask += 1;
                console.log(item.tasks)
            }
        });

        // localStorage.setItem('employees',JSON.stringify(data));
        setUserData(data);

        setAssignTo('')
        setCategory('')
        setDate('')
        setTitle('')
        setescription('');
        setPriority('');
    }
   
  return (
    <div className=' bg-gray-800 rounded-xl py-5 px-6 mt-5'>
        <div className='text-gray-300   '>
            <form onSubmit={handleSubmit} className=' w-full flex  gap-5 items-start justify-around'>
                <div className='w-1/2'>
                    
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Task Title</h3>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type='text' 
                            className='p-2 w-[80%] bg-gray-500 rounded' 
                            placeholder='Write the task title'/>
                    </div>
                
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Date</h3>
                        <input 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            type='date' 
                            className='w-[80%] bg-gray-500 p-2 rounded'/>
                    </div>
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Assign To</h3>
                        <input 
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            type='text'     
                            placeholder='Employee name' 
                            className='w-[80%] rounded p-2 bg-gray-500 '
                        />
                    </div>
                    <div className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Category</h3>
                        <input 
                            type='text' 
                            placeholder='Category' 
                            className='w-[80%] p-2 rounded bg-gray-500 '
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                     <div  className='w-full text-left mt-2'>
                        <h3 className='mb-2'>Priority</h3>
                        <select className='w-[80%] p-2 rounded bg-gray-500 '>
                            <option onChange={(e) => setPriority(e.target.value)} value='' selected>Select Priority</option>
                            <option onChange={(e) => setPriority(e.target.value)} value='High'>High</option>
                            <option onChange={(e) => setPriority(e.target.value)} value='Low'>Low</option>
                        </select>
                     </div>
                </div>
                <div className='w-1/2 text-left mt-2 flex flex-col'>
                    <div className='w-full'>
                        <h3 className='mb-2'>Description</h3>
                        <textarea 
                            value={description}
                            onChange={(e) => setescription(e.target.value)}
                            rows={10} 
                            cols={30} 
                            className='w-full p-2 bg-gray-500 rounded' 
                            placeholder='Write description of the task'

                        />
                    </div>
                    <button type='submit' className='bg-cyan-400 mt-5 text-white font-semibold px-3 py-1 text-xl rounded '>Create Task</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default CreateTask