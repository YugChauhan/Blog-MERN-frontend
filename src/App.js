import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import PostDetails from './components/PostDetails'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}></Route>
        <Route exact path ="/login" element={<Login/>}></Route>
        <Route exact path ="/register" element={<Register/>}></Route>
        <Route exact path ="/post/post/:id" element={<PostDetails/>}></Route>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App