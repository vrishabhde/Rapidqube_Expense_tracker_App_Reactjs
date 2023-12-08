// Navbar.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState();
  const route = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("etUserId"));
    if(userId){
      const getUser = async() => {
        try {
          const axiosRequest = await axios.get(`http://localhost:3001/users?id=${userId}`);
          const axiosResponse = axiosRequest.data;

          if(axiosRequest?.status === 200){
            setUsername(axiosResponse[0].username);
          }   
        } catch (error) {
          alert(error.message);
        }
      }
      getUser();
    }
    }, []);

    const logout = () => {
      const userId = JSON.parse(localStorage.getItem("etUserId"));
      if(userId){
        localStorage.removeItem("etUserId");
        alert("Logged out successfully.");
        window.location.reload();
        route("/");
      }
    }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Expense Tracker</Link>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          {username ? (<>
            <Link to="/expenses" className="text-white hover:text-gray-200">Expenses</Link>
          </>) : (<>
            <Link to="/expenses" className="text-white hover:text-gray-200">About Us</Link>
          </>)}
          {username ? (<>
            <Link className='text-white hover:text-gray-200'>{username}</Link>
          </>) : (<>
            <Link to="/register" className='text-white hover:text-gray-200'>Sign Up</Link>
          </>)}
          {username && <Link onClick={logout} className='text-white hover:text-gray-200'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2f2f2" viewBox="0 0 256 256"><path d="M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z"></path></svg></Link>}
          {/* Add more links as needed */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-500 p-4">
            <Link to="/" className="block text-white hover:text-gray-200 mb-2">Home</Link>
            {username ? (<>
              <Link to="/expenses" className="block text-white hover:text-gray-200 mb-2">Expenses</Link>
            </>) : (<>
              <Link to="/expenses" className="block text-white hover:text-gray-200 mb-2">About Us</Link>
            </>)}
            {username ? (<>
            <Link className='block text-white hover:text-gray-200'>{username}</Link>
          </>) : (<>
            <Link to="/register" className='block text-white hover:text-gray-200'>Sign Up</Link>
          </>)}
          {username && <Link onClick={logout} className='block text-white hover:text-gray-200'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2f2f2" viewBox="0 0 256 256"><path d="M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z"></path></svg></Link>}
            {/* Add more links as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
