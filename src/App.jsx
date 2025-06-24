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

      if(userlogedin.role === 'employee'){
      const data = authData.employeesData.find((item) => item.id === userlogedin.id);
      if(data){
        setUserData(data);
        console.log(userData);
      }
    }
    };

    
  
    
  }, [authData])
  
  
  const handleLogin = (email,password) => {
    if(authData && authData.adminData.find((i) => email === i.email && password === i.password)){
      
        setUser('admin');
        localStorage.setItem('UserDetails',JSON.stringify({role: 'admin'}));
      
    }else if(authData){
      const data = authData.employeesData.find((i) => email === i.email && password === i.password)
      if(data){
        setUser('employee');
        setUserData(data);
        console.log(data);
        console.log(userData);
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
        <AdminDashboard handleLogout={handleLogout}/>
      ) : (
        <EmployeeDashboard data={userData} handleLogout={handleLogout}/>
      )}
    </>
  )
}

export default App
