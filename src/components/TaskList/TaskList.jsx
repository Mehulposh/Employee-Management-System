import React from 'react'
import AcceptedTask from './AcceptedTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


const TaskList = ({data}) => {
   
  return (
    <div id='tasklist' className=' h-[55%] py-10 mt-10 flex items-center justify-start gap-5 overflow-x-auto rounded-xl'>
        
        {data.map(task => {
            if(task.active){
                return <AcceptedTask key={task.id} task={task}/>
            }
            if(task.newTask){
                return <NewTask key={task.id} task={task} />
            }
             if(task.completed){
                return <CompleteTask key={task.id} task={task} />
            }
             if(task.failed){
                return <FailedTask key={task.id} task={task} />
            }
        })}
       
    </div>
  )
}

export default TaskList