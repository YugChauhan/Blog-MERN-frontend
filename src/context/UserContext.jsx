import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {URL} from "../url";


export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getuser();
  },[]);
  
  const getuser = async () => {
    try {
      const res = await axios.get(URL+"/api/auth/refetch", {withCredentials: true,});
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
