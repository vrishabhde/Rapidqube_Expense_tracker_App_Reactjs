import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const router = useNavigate();

    const [userdata, setuserdata] = useState({ name: "",email: "",password: "",confirmpassword: "",number: "",expenses: []});


    let checkUser = JSON.parse(localStorage.getItem("users")) || [];
    const [users, setUsers] = useState(checkUser);

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

    
        console.log(users, "busers")
        if (users.find((user) => user.email === userdata.email)) {
            return alert("User already registered, please proceed to login");
        }
        
        const updatedUsers = [...users, userdata];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        console.log(users, "ausers")

        alert("Registration Success");
        setuserdata({ name: "", email: "", password: "", confirmpassword: "", number: "" });
        router("/login")
    };

    return (
        <><div className="flex flex-col items-center justify-center h-screen ">
            <form onSubmit={handlesubmit} className="h-[500px] w-[350px] flex flex-col justify-between border border-white-500 rounded-md p-4 ">
                <h2 className="text-3xl font-bold underline text-blue-500 " >Sign up</h2>

                <input className="border border-gray-500 rounded-md p-2 placeholder-black mt-[20px]" type="text" placeholder="name" name="name" value={userdata.name} onChange={handlechange} />
                <br />
                <input className="border border-gray-500 rounded-md p-2 placeholder-black" type="email" placeholder="email" name="email" value={userdata.email} onChange={handlechange} />
                <br />
                <input className="border border-gray-500 rounded-md p-2 placeholder-black" type="password" placeholder="password" name="password" value={userdata.password} onChange={handlechange}
                />
                <br />
                <input
                 className="border border-gray-500 rounded-md p-2 placeholder-black" type="password" placeholder="confirmpassword" name="confirmpassword" value={userdata.confirmpassword} onChange={handlechange} /><br />
                <input className="border border-gray-500 rounded-md p-2 placeholder-black" type="number" placeholder="Contact Number" name="number" value={userdata.number} onChange={handlechange}
                /> <br />

                <input className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Register" />
            </form>
        </div>
        </>
    );
};

export default Register;
