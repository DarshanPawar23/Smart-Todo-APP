import API from "../api/axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e)=>{
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e)=>{
         e.preventDefault();

         try{
            await API.post("/register",formData);
            alert("Registration Success");

            navigate("/login");
         }
         catch(error){
          console.log(error);
          alert("Registration Failed");
         }
    }
    return (
        <div className="
            min-h-screen
            flex
            justify-center
            items-center
            bg-gray-100 ">

            <form 
             onSubmit={handleSubmit}
            className="
                bg-white
                p-8
                rounded-xl
                shadow-lg
                w-[350px]
                ">
                <h2
                    className="
                    text-3xl
                    font-bold
                    text-center
                    mb-6
                    "
                >
                    Register
                </h2>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    p-3
                    rounded
                    mb-4
                    "
                />
                 <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    p-3
                    rounded
                    mb-4
                    "
                />
                 <button
                    className="
                    w-full
                    bg-black
                    text-white
                    p-3
                    rounded
                    hover:bg-gray-800
                    "
                >
                    Register
                </button>

                 <p className="mt-4 text-center">

                    Already have account?

                    <Link
                        to="login"
                        className="text-blue-500"
                    >
                        Login
                    </Link>

                </p>

            </form>
        </div>
    );
}
export default Register;