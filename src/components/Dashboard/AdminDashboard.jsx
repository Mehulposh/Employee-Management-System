import React from 'react'
import Header from '../HelperComponents/Header'
import CreateTask from '../HelperComponents/CreateTask'
import AllTasks from '../HelperComponents/AllTasks'

const AdminDashboard = ({handleLogout}) => {
  return (
    <div className='h-screen w-screen  p-8'>
        <Header handleLogout={handleLogout}/>
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard