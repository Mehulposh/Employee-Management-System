import { useState,useEffect } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/localStoreage';

// import './App.css'

function App() {

  const [user, setUser] = useState(null);
  
  const handleLogin = (email,password) => {
    if(email == 'admin@company.com' && password == '123'){
      setUser('admin')
    }else if(email === '' && password == '123'){
      setUser('employee')
    }else{
     alert('Invalid');
    }
  }
  useEffect(() => {
    setLocalStorage();
  })
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
