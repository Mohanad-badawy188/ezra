import React from 'react'

export const Login = () => {
  return (
    <div className=" register ">
      <div className=" wrapper">
      <h1 className=" text-center"> Log in</h1>
<form className="signup-form ">
  <input type="text"   placeholder =" User Name"/>

  <input  type="password" placeholder =" Password"/>

  <button  type="submit"> Login</button>


 


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