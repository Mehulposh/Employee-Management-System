import React from 'react'
import Header from '../HelperComponents/Header'
import CreateTask from '../HelperComponents/CreateTask'
import AllTasks from '../HelperComponents/AllTasks'

const AdminDashboard = ({handleLogout,data}) => {
  if (!data) return <div className='text-white'>Loading...</div>;
  return (
    <div className='h-screen w-screen  p-8'>
        <Header handleLogout={handleLogout} name={data.name}/>
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard