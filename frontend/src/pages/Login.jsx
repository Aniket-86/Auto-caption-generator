import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { asyncgetusers } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Login = () => {
  const {register,handleSubmit,reset} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const LoginHandler = (data) =>{
    
     try{
       axios.post('http://localhost:3000/auth/login',data, {withCredentials:true})
      .then((response)=>{
        console.log(response.data.message)
        console.log(response.data.user)
           dispatch(asyncgetusers())
           localStorage.setItem('user',JSON.stringify(response.data.user))
            toast.success('Login successful')
        navigate('/posts/post')
      })
      .catch((err)=>{
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
      })
     }catch(err){
      console.log(err)
     }
  }
  return (
    <>
    <div className='items-center flex flex-col pt-14'>
      <h1 className='text-6xl font-bold text-gray-900'>Create <span className='bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent'>caption's</span> in less time</h1>
   <div className='flex gap-x-20   text-black pt-10 w-full '>
     <div className='text-gray-800 font-medium w-1/2 items-center'>
      <h1 className='text-2xl  px-8 pt-15'>Shine is a modern caption generating platform that helps you to make a great impact </h1>
     </div>

     <div className=' w-fit bg-gray-200 rounded-2xl  shadow-2xl  ' >
        <form onSubmit={handleSubmit(LoginHandler)}
        className='flex flex-col px-10 py-5 text-2xl  items-center gap-y-10 rounded-2xl '  >
          <i  className="ri-account-circle-fill text-8xl text-purple-400"></i>
          <div className='flex border-b' >
            <i className="ri-account-circle-fill"></i>
          <input type="text"
          {...register('username')} placeholder=' username' className='outline-none '  required/>
          </div>
         <div className='flex border-b'>
           <i class="ri-lock-line"></i>
          <input type='password'
          {...register('password')} placeholder=' password' className='outline-none ' required />
         </div>
          <button className='bg-pink-400 text-white px-8 py-1 rounded-md font-semibold'>Login</button>
        </form>
    </div>
   
   </div>
    </div>
   </>
  )
}

export default Login