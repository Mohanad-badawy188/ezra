import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/apiReq'
import axios from 'axios'
export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [user,setUser]=useState("")


  const handleClick= async(e)=>{

   

      
      
      
        try{
            const res = await axios({
            method: 'post',
            url: `http://localhost:5000/api/auth/login`,
      
            data :{email,password}
      
      
        
        
          });
          setUser(res.data)
          console.log(res.data);
        
      
      
      
        }catch{}
      
        e.preventDefault();
        location.reload()
      }
  
    if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).length === 0){
      localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <div className=" register ">
      <div className=" wrapper">
      <h1 className=" text-center"> Log in</h1>
<form className="signup-form ">
  <input type="email" onChange={(e)=>{setEmail(e.target.value)}}   placeholder =" Email"/>

  <input  type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder =" Password"/>


  <button  className="disabled" onClick={handleClick} type="submit"> Login</button>



</form>
<div className="text-center mt-2">
<a className ="forgotPassword ">forgot your password ?</a>
        <p>Dont have an account ? <a href="./signup"> Signup</a> </p>
</div>
      </div>




    </div>
  )
}
export default Login