import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import CreatePost from '../pages/CreatePost'
import History from '../pages/History'

const Mainroutes = () => {
    
     

  return (
  <Routes>
    <Route  path='/auth/register' element={<Register/>} />
    <Route  path='/' element={<Login/>} />
    <Route  path='/posts/post' element={<CreatePost/>} />
    <Route path='/history' element={<History/>}  />
  </Routes>
  )
}

export default Mainroutes