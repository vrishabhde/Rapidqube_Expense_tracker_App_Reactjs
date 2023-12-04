import { useState } from "react";

const Register = () => {
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        number: "",
    });

    let checkUser = JSON.parse(localStorage.getItem("users"))
    const [users, setusers] = useState(checkUser ? checkUser : []
    );

    const handlechange = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();

    
        if (!userdata.name || !userdata.email || !userdata.password || !userdata.confirmpassword || !userdata.number) {
            return alert("All fields are mandatory");
        }
        if (userdata.number.length < 10) {
            return alert("Number should be a minimum of 10 numbers");
        }
        if (userdata.password.length < 5) {
            return alert("Password should be a minimum of 5 characters");
        }
        if (userdata.password !== userdata.confirmpassword) {
            return alert("Credentials not matched");
        }


        const existingUser = users.find((user) => user.email === userdata.email);

        if (existingUser) {

            return alert("user already Registered, please proceed to login ");
        }

        const updatedUsers = [...users, userdata];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Registration Success");
        setuserdata({ name: "", email: "", password: "", confirmpassword: "", number: "" });

    };

    return (
        <>
            <h2>Sign up </h2>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={userdata.name}
                    onChange={handlechange}
                />
                <br />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={userdata.email}
                    onChange={handlechange}
                /> <br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={userdata.password}
                    onChange={handlechange}
                /> <br />
                <input
                    type="password"
                    placeholder="confirmpassword"
                    name="confirmpassword"
                    value={userdata.confirmpassword}
                    onChange={handlechange}
                /><br />
                <input
                    type="number"
                    placeholder="Contact Number"
                    name="number"
                    value={userdata.number}
                    onChange={handlechange}
                /> <br />

                <input type="submit" value="Register" />
            </form>
        </>
    );
};

export default Register;
