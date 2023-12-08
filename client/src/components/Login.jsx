import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const route = useNavigate()
  const [userdata, setuserdata] = useState({ email: "", password: "" });

  const handlechange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async(e) => {
    e.preventDefault();

    try {
      if(!userdata.email || !userdata.password){
        throw new Error("Fields are required.");
      }
      const axiosRequest = await axios.get(`http://localhost:3001/users?email=${userdata.email}`);
      const response = axiosRequest.data;

      if(userdata.password !== response[0].password){
        throw new Error("Invalid credentials.");
      }

      if(!response.length){
        throw new Error("You are not registered.");
      }else{
        localStorage.setItem("etUserId", JSON.stringify(response[0].id));
        alert("Logged in successfully.");
        route("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <form onSubmit={handlesubmit} className="h-[350px] w-[350px] flex flex-col justify-between border border-white-500 rounded-md p-4 ">
          <h2 className="text-3xl font-bold underline text-blue-500 ">Sign in</h2>
          <input className="border border-gray-500 rounded-md p-2 placeholder-black mt-[20px]" type="email" placeholder="Email" name="email" value={userdata.email} onChange={handlechange} />{" "}
          <br />
          <input className="border border-gray-500 rounded-md p-2 placeholder-black mt-[20px]" type="password" placeholder="Password" name="password" value={userdata.password} onChange={handlechange} />{" "}
          <br />

          <input className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
