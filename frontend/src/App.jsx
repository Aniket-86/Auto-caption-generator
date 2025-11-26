import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './component/Navbar'
import { asyncgetusers } from './store/actions/userAction'
import { useDispatch } from 'react-redux'


const App = () => {
 const dispatch = useDispatch()
useEffect(()=>{
 dispatch(asyncgetusers())
},[])


  return (
    <div className='w-screen h-screen  bg-gray-100 px-15 py-8 '>
      <Navbar/>
      <Mainroutes/>

    </div>
  )
}

export default App