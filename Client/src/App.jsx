import { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import {Routes,Route,useNavigate} from 'react-router-dom'
import { setLocalStorage } from './utils/localStoreage';
import { AuthContext } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import axios from 'axios';

// import './App.css'

function App() {
  const navigate = useNavigate();
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
  
  useEffect(() => {
    setLocalStorage();
  
    
  }, [])
  
  
  

  const handleLogin = async (email,password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8082/api/v1/user/user-login',{
        email: email,
        password: password
      });

      console.log(response);
      if(response.data.password === password){
        setUser('employee')
        setUserData(response.data)
        navigate("/employee");
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleLogout = () => {
    navigate('/')
    setUser(null);
    setUserData(null);
    localStorage.removeItem('UserDetails'); 
  }
  
  
  return (
    <>
      <Routes>
        <Route path="/employee" element={
          <ProtectedRoute user={user} role='employee'>
            <EmployeeDashboard handleLogout={handleLogout} data={userData}/>
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute user={user} role='admin'>
            <AdminDashboard handleLogout={handleLogout}/>
          </ProtectedRoute>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login handleLogin={handleLogin}/>} />
       
      </Routes>

      {/* {!user ? (
        <Login handleLogin={handleLogin}/>
      ) : user === 'admin' ? (
        <AdminDashboard handleLogout={handleLogout} data={userData}/>
      ) : (
        <EmployeeDashboard data={userData} handleLogout={handleLogout}/>
      )} */}
    </>
  )
}

export default App
