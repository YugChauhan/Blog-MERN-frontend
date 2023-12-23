import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  const user = false; // Placeholder for user authentication logic

  return (
    <div className="flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">TheBloger</Link>
      </h1>
      <div className="hidden md:flex items-center space-x-2 md:space-x-4">
        <CiSearch className="text-gray-600" />
        <input
          className="outline-none px-2 py-1 rounded-md"
          placeholder="Search a post"
        ></input>
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3 className="text-sm md:text-base">
            <Link to="/Write">Write</Link>
          </h3>
        ) : (
          <h3 className="text-sm md:text-base">
            <Link to="/Login">Login</Link>
          </h3>
        )}
        {user ? (
          <h3 className="text-sm md:text-base">Profile</h3>
        ) : (
          <h3 className="text-sm md:text-base">
            <Link to="/Register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Navbar;
