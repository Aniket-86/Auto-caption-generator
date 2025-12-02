import axios from "axios"
import { clearuser, loaduser } from "../reducers/userSlice"


export const asyncgetusers = ()=> async(dispatch,getState)=> {
 try{
   const res = await axios.get('http://localhost:3000/auth/me',{withCredentials:true})
   
    dispatch(loaduser(res.data))
 }catch(err){
    console.log(err )
 }
}

export const asyncupdateusers = ()=>async (dispatch,getState)=>{
        const res = await axios.get('http://localhost:3000/auth/me',{withCredentials:true})
       dispatch(loaduser(res.data))
} 

export const asynclogoutusers = ()=> async(dispatch,getState)=>{
   const res = await axios.post('http://localhost:3000/auth/logout',{},{withCredentials:true})
   dispatch(clearuser())
}