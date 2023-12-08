import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const [userdata, setuserdata] = useState({ email: "", password: "" });

  const checkUser = JSON.parse(localStorage.getItem("users")) || [];

  const handlesubmit = (e) => {
    e.preventDefault();

    const existingUser = checkUser.find((user) => user.email === userdata.email);
    if (!userdata.password && !userdata.email) {
      return alert("please provide email and password")
    }
    if (!existingUser) {
      return alert("User not found. Please register.");
    }

    if (existingUser.password !== userdata.password) {
      return alert("Credentials not matched");
    }


    localStorage.setItem("currentUser", JSON.stringify(existingUser));

    alert("Login successful!");
    router("/");
    setuserdata({ email: "", password: "" });
  };

  const handlechange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
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
