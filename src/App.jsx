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
  const {userData: employeesData, admin: adminData} = useContext(AuthContext);

  useEffect(() => {
    const userlogedin = JSON.parse(localStorage.getItem('UserDetails'));
  //    console.log('Admin Data:', adminData);
  // console.log('Employees Data:', employeesData);

    if(userlogedin && (adminData || employeesData)){
      setUser(userlogedin.role);

      const data = userlogedin.role === 'admin' 
                   ? adminData.find(item => item.id === userlogedin.id)
                   : employeesData.find(item => item.id === userlogedin.id)
      
      if(data) {
        setUserData(data);
      }
    };  
  }, [employeesData,adminData])
  
  // useEffect(() => {
  //   setLocalStorage();
  
    
  // }, [])
  
  
  const handleLogin = (email,password) => {
    if(adminData?.find((i) => email === i.email && password === i.password)){
        const data = adminData.find((i) => email === i.email && password === i.password);
        setUser('admin');
        localStorage.setItem('UserDetails',JSON.stringify({role: 'admin',id: data.id}));
      
    }else if(employeesData){
      const data = employeesData.find((i) => email === i.email && password === i.password)
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
