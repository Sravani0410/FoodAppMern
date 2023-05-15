import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit=(e)=>{
e.preventDefault();
const {email,password}=data;
if(email && password ){

}
else{
  alert("please enter required fields")
}
  }
  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
    
      <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
        <img src={loginSignupImage} className="w-full" />
      </div>
      <form className="w-full py-2 flex flex-col " onSubmit={handleSubmit}>
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type={"email"}
          id="email"
          name="email"
          className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          value={data.email}
          onChange={handleOnChange}
        />
        <label htmlFor="password" className="">
          Password
        </label>
        <div className="mt-1 mb-2 flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className=" w-full bg-slate-200  border-none outline-none"
            value={data.password}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>
        <button className="w-full max-w-[150px] m-auto bg-blue-500 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
          Sign In
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login