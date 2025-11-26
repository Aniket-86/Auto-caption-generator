import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { asynclogoutusers } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const user =  useSelector((state)=>state.user.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const logoutHandler = async ()=>{
      await  dispatch(asynclogoutusers())
      localStorage.removeItem('user')
      console.log('navigate to / route')
      navigate('/')
      console.log('navigated')
   }

  return (
    <div className="flex justify-between gap-x-8  ">
      {user ? (
        <>
        <div>
              <NavLink className="font-bold text-2xl" >
               SHINE
              </NavLink>
            </div>
            <div className="flex gap-x-10 items-center">
              <NavLink className=" text-lg font-semibold text-gray-600" to="/posts/post">
                Create Caption
              </NavLink>
              <NavLink className="text-lg font-semibold text-gray-600" to="/history">
                Recent's
              </NavLink>
               <NavLink type='button' onClick={logoutHandler} className='bg-red-600 hover:bg-red-500 px-4 py-1  rounded-md text-white font-bold'>logout</NavLink>
            </div>
        </>
      ) : (
        <>
       
            <div>
              <NavLink className="font-bold text-2xl">
               SHINE
              </NavLink>
            </div>
            <div className="flex gap-x-10 ">
              <NavLink className=" text-lg font-semibold text-gray-600" to="/">
                Login
              </NavLink>
              <NavLink className="text-lg font-semibold text-gray-600" to="/auth/register">
                Register
              </NavLink>
            </div>
        
        </>
      )}
    </div>
  );
};

export default Navbar;
