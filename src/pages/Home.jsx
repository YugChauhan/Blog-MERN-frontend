import {React, useEffect, useState} from 'react'
import axios from "axios";
import { URL } from "../url";
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import { useLocation } from "react-router-dom";


function Home() {

  // const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]= useState([])
  const {user}= useContext(UserContext)

  //fetch Backend Posts 
  const fetchPosts=async()=>{
    const res=await axios.get(URL+"/api/post/")
    setPosts(res.data)
  }

  useEffect(()=>{
    fetchPosts()

  },[])
  
  return (
    
    <div>
    {posts.map((post) => (
      <Link key={post._id} to={user ? `/post/${post._id}` : '/login'}>
        <div className="-mx-4 flex flex-wrap">
          <BlogCard post={post} />
        </div>
      </Link>
    ))}
  </div>

  )
}

export default Home;