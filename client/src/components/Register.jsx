import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [userdata, setuserdata] = useState({ name: "",email: "",password: "",confirmpassword: "",number: ""});


    const handlechange = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    const handlesubmit = async(e) => {
        e.preventDefault();
        try {
            
            if(!userdata.name || !userdata.email || !userdata.password || !userdata.confirmpassword || !userdata.number){
                throw new Error('Fields are required');
            }

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(!emailRegex.test(userdata.email)){
                throw new Error('Email is not valid');
            }

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if( !passwordRegex.test(userdata.password)){
                throw new Error("Password is not valid");
            }

            if(userdata.password !== userdata.confirmpassword){
                throw new Error("Password not matched");
            }

            const numberRegex = /\d{10}$/
            if(!numberRegex.test(userdata.number)){
                throw new Error("Number is not valid")
            }

            const isUser = await axios.get(`http://localhost:3001/users?username=${userdata.name}&email=${userdata.email}`);

            if(isUser.data.length){
                throw new Error("User already Present");
            }
            const axiosRequest = await axios.post("http://localhost:3001/users", {
                username: userdata?.name,
                email: userdata?.email,
                password: userdata?.password,
                phone: userdata?.number
            });

            if(axiosRequest.status === 201){
                alert("User Regestration sucessful");
            }else{
                alert("User Regestration unscussful");
            }
            
        } catch (error) {
            alert(error.message);
        }

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
                <input className="border border-gray-500 rounded-md p-2 placeholder-black" type="text" placeholder="Contact Number" name="number" value={userdata.number} onChange={handlechange}
                /> <br />

                <input className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Register" />
            </form>
        </div>
        </>
    );
};

export default Register;
