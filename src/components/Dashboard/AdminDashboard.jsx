import React from 'react'
import Header from '../HelperComponents/Header'
import CreateTask from '../HelperComponents/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-screen p-7 text-center'>
        <Header />
        <CreateTask />
    </div>
  )
}

export default AdminDashboard