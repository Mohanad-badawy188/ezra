import React, { useState } from "react";
import axios from "axios";
import Footer from "./footer";
import Header from "./header";

const Signup = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:5000/api/auth/register`,

        data: { name, email, password },
      });
      if (res.data) {
        setUser(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    location.reload();
  };

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <div>
      <Header />
      <div className=" register ">
        <div className=" wrapper">
          <h1 className=" text-center"> Sign up</h1>
          <form className="signup-form">
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="full Name"
            />
            <input type="text" placeholder=" User Name" />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Password"
            />
            <input
              type="password"
              onChange={(e) => e.target.value}
              placeholder=" Confirm Password"
            />
            <button onClick={createUser}> Signup</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
