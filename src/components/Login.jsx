import React, { useContext, useState } from "react";
import axios from 'axios'
import {URL} from "../url"
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate= useNavigate();
  const {setUser}=useContext(UserContext)


  const handleLogin=async()=>{
    try{
      const res = await axios.post(URL+'/api/auth/login',{email,password},{withCredentials:true})
      alert("Login successfully")
      setUser(res.data)
      navigate("/")
    }
    catch(error){
      setError(true)
    }
  }
 

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            LogIn
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4 flex items-center justify-between"></div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="mt-8">
            <button onClick={handleLogin} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4" />
            <Link to="/Register" className="text-xs text-gray-500 uppercase">
              or register
            </Link>
            <span className="border-b w-1/5 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
