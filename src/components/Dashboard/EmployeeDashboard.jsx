import React from 'react'
import Header from '../HelperComponents/Header'
import TaskNumber from '../HelperComponents/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header/>
            <TaskNumber />
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard