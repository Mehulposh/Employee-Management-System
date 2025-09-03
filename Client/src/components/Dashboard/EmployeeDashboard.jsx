import React from 'react'
import Header from '../HelperComponents/Header'
import TaskNumber from '../HelperComponents/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,handleLogout}) => {
  
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header handleLogout={handleLogout} name={data.name} />
            <TaskNumber data={data.taskCount}/>
            <TaskList data={data.tasks}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard