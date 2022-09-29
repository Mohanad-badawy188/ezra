import React from 'react'

const Signup = () => {
  return (
    <div className=" register ">
    <div className=" wrapper">
    <h1 className=" text-center"> Sign up</h1>
<form className="signup-form">
<input type="text" placeholder="First Name" />
<input  type="text" placeholder ="Last Name" />
<input type="text"  placeholder =" User Name"/>
<input type="email"  placeholder ="Email"/>
<input  type="password" placeholder =" Password"/>
<input type="password"  placeholder =" Confirm Password"/>
<button type="submit"> Signup</button>

</form>

    </div>




  </div>
  )
}

export default Signup