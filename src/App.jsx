import { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/localStoreage';
import { AuthContext } from './context/AuthProvider';

// import './App.css'

function App() {

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const userlogedin = JSON.parse(localStorage.getItem('UserDetails'));
    if(userlogedin && authData){
      setUser(userlogedin.role);

      const data = userlogedin.role === 'admin' 
                   ? authData.adminData.find(item => item.id === userlogedin.id)
                   : authData.employeesData.find(item => item.id === userlogedin.id)
      
      if(data) {
        setUserData(data);
      }
    };

    
  
    
  }, [authData])
  
  
  const handleLogin = (email,password) => {
    if(authData && authData.adminData.find((i) => email === i.email && password === i.password)){
        const data = authData.adminData.find((i) => email === i.email && password === i.password);
        setUser('admin');
        localStorage.setItem('UserDetails',JSON.stringify({role: 'admin',id: data.id}));
      
    }else if(authData){
      const data = authData.employeesData.find((i) => email === i.email && password === i.password)
      if(data){
        setUser('employee');
        setUserData(data);
        console.log(data);
       
        localStorage.setItem('UserDetails',JSON.stringify({role: 'employee', id: data.id}));
      }

    }else{
     alert('Invalid');
    }
  }

  const handleLogout = () => {
    setUser(null);
    setUserData(null);
    localStorage.removeItem('UserDetails');
  }
  useEffect(() => {
    setLocalStorage();
  },[])
  
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin}/>
      ) : user === 'admin' ? (
        <AdminDashboard handleLogout={handleLogout} data={userData}/>
      ) : (
        <EmployeeDashboard data={userData} handleLogout={handleLogout}/>
      )}
    </>
  )
}

export default App
