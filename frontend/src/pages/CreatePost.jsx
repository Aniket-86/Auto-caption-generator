import axios from 'axios'

import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {  asyncupdateusers } from '../store/actions/userAction'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { toast } from 'react-toastify'


const CreatePost = () => {
  const {register,reset,handleSubmit} = useForm()
  const user = useSelector((state)=>state.user.data?.user)
  const [caption,setcaption] = useState('')
  const dispatch = useDispatch()

   
 

   const createCaption = async (data)=>{
    const formData = new FormData();
    formData.append("image", data.image[0]);
    toast.info('Generating your caption please wait...')
      try{
        await  axios.post('http://localhost:3000/posts/post',formData, {withCredentials:true})
       .then((response)=>{
        console.log(response)
        setcaption(response.data.post.caption)
        dispatch(asyncupdateusers())
        reset()
        setTimeout(()=>{
          setcaption('')
          toast.success('Go to Recent page to see caption.')
        },15000)
       })
      }catch(err){
        console.log(err)
      }
      }
        useGSAP(()=>{
    gsap.to('.title',{ x:60, opacity:1,duration:3});
        
      
   })
      

  

  return (
    <>
    <div className='pt-15 flex flex-col relative   '> 
       <h2 className='text-7xl font-semibold pt-2 title opacity-0'>Welcome to shine </h2>
             <h1 className='text-4xl font-mono font-medium ml-80'>{user?.username}</h1>
  
      <div className=' w-120 items-center flex flex-col mt-10 ml-30 border-2 px-4 py-2 rounded-md '>
      <h1 className='text-4xl font-bold'>AI Caption Generator</h1>
      <h2 className='text-lg'>Upload any post- instantly generate a caption</h2>
       <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit(createCaption)} className='w-full px-20   items-center py-2 flex flex-col   rounded-xl'>
         <label htmlFor="fileInput" className='border mb-4 px-2 rounded-sm bg-gray-400 text-white font-semibold text-lg py-1 '>Upload File</label>
         <input  type='file' {...register('image')}  placeholder='enter image url' id='fileInput' className='outline-0 border-b hidden' required  />
         <button className='text-2xl font-semibold text-white  px-3 py-5 rounded-xl w-full bg-linear-65 from-purple-500 to-pink-500 '>Generate Caption   </button>
      </form>
     </div>
     <h1>
      {caption ? <>
         <h1 className=' caption text-xl w-120 absolute -right-14   border-2 border-green-400 bg-green-200  px-2 py-1 top-50'>Caption-{caption}</h1>
      </>:
      <>
       
      </>}
     </h1>
      

    </div>
    </>
  )
}

export default CreatePost