import React, {useState,useEffect, createContext } from 'react'
import { getLocalStorage } from '../utils/localStoreage';


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [admin, setAdmin] = useState(null);
    
    
    useEffect(() => {
        const {employeesData,adminData} = getLocalStorage();
      setUserData(employeesData);
      setAdmin(adminData);
      
      
      
    }, []);
    
    const contextValue = {
        userData,
        setUserData,
        admin,
        setAdmin,
      };

      
 return (
    <div>
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;