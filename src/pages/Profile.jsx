import React from "react";
import ProfilePost from "../components/ProfilePost";

function Profile() {
  return (
    <div>
      <div className="px-8 md:px-[100px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        <div className="flex flex-col md:w-[500%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-6 md:text-lg">Your posts:</h1>
          <ProfilePost />
        </div>
        <div className="flex justify-start md:justify-end items-start md:w-[30% ] w-full md:items-end">
        <div className="flex flex-col space-y-4 items-start">
          <h1 className="text-xl font-bold mb-4">Profile</h1>
          <input
            className="outline- none px-4 py-2 text-gray-500"
            placeholder="Your username"
            type="text"
          />
          <input
            className="outline- none px-4 py-2 text-gray-500"
            placeholder="Your email"
            type="email"
          />
          <input
            className="outline- none px-4 py-2 text-gray-500 "
            placeholder="Your password"
            type="password"
          />
          <div className="flex items-center space-x-4 mt-8">
            <button className="bg-black text-white px-4 py-2 hover:text-black hover:bg-gray-300">
              Update
            </button>
            <button className="bg-black text-white px-4 py-2 hover:text-black hover:bg-gray-300">
              Delete
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
