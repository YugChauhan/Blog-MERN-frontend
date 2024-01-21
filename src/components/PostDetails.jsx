import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "./Comments";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PostDetails() {
  const [posts, setPosts] = useState({});
  const {user}=useContext(UserContext)

  const postId = useParams().id;
  // console.log("Post ID:", postId);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/post/" + postId);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postId]);

  // const catergories = posts.categories
  return (
    <div>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2x1 font-bold text-black md:text-3xl ">
            {posts.title}
          </h1>
          {user?._id===posts?.userId && <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
          }
          
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>{posts.username}</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img src={posts.photo} alt="Heading_Image" />
        <p className="mt-8 mx-auto text-xl">{posts.desc}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            {posts.categories?.map((c, i) => (
              <div key={i} className="bg-gray-300 rounded-1g px-3 py-1">
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Comments */}
        <Comments />
        {/* Write Comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[88%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button className="text-sm bg-black text-white px-4 py-2 md:w-[20% ] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
