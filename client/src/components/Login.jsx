import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });

  const checkUser = JSON.parse(localStorage.getItem("users")) || [];

  const handlesubmit = (e) => {
    e.preventDefault();

    const existingUser = checkUser.find((user) => user.email === userdata.email);

    if (!existingUser) {
      return alert("User not found. Please register.");
    }

    if (existingUser.password !== userdata.password) {
      return alert("Credentials not matched");
    }

    // Store the current user in local storage
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
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userdata.email}
          onChange={handlechange}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userdata.password}
          onChange={handlechange}
        />{" "}
        <br />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
