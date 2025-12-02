import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Register = () => {
    const {register,reset,handleSubmit} = useForm()
    const navigate = useNavigate()

    const RegisterHandler = (data)=>{
      console.log(data)
       
            try{
                axios.post('http://localhost:3000/auth/register',data,{withCredentials:true})
            .then((response)=>{
              console.log(response.data.message) // showing the msg that we created at backend
              navigate('/ ')
            })
            .catch((err)=>{
              console.log(err)
              toast.error(err.response.data.message)
            })
            }catch(err){
                console.log(err)
            }
       
    
    }

  return (
    <>
    <div className='items-center flex flex-col pt-5'>
      <h1 className='text-6xl font-bold text-gray-900'>Bring <span className='bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent'>word's</span> to your post</h1>
   <div className='flex gap-x-20   text-black pt-6 w-full '>
     <div className='text-gray-800 font-medium w-1/2 items-center'>
      <h1 className='text-2xl  px-8 pt-25'>Shine is a modern caption generating platform that helps you to make a great impact </h1>
     </div>

     <div className=' w-fit bg-gray-200 rounded-2xl  shadow-2xl  ' >
        <form onSubmit={handleSubmit(RegisterHandler)}
        className='flex flex-col px-10 py-4 text-2xl  items-center gap-y-10 rounded-2xl '  >
          <i  className="ri-account-circle-fill text-8xl text-purple-400"></i>
          
          <div className='flex border-b' >
            <i class="ri-account-circle-fill"></i>
          <input type="text"
          {...register('username')} placeholder=' Username' className='outline-none '  required/>
          </div>
          <div className='flex border-b' >
           <i class="ri-mail-fill"></i>
          <input type="text"
          {...register('email')} placeholder=' Email' className='outline-none '  required/>
          </div>
         <div className='flex border-b'>
           <i class="ri-lock-line"></i>
          <input type='password'
          {...register('password')} placeholder=' Password' className='outline-none ' required />
         </div>
          <button className='bg-pink-400 text-white px-8 py-1 rounded-md font-semibold'>Register</button>
        </form>
    </div>
   
   </div>
    </div>
   </>
  )
}

export default Register