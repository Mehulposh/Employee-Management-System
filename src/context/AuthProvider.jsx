import React, {useState,useEffect, createContext } from 'react'
import { getLocalStorage } from '../utils/localStoreage';


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    
    
    useEffect(() => {
        const {employeesData,adminData} = getLocalStorage();
      setUserData({employeesData,adminData});
    
      
    }, []);
    
 return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;