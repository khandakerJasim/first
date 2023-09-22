import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logindata } from "../../../Component/context/Createcontext";
import { useContext } from "react";

export default function Login() {
  const [data, setdata] = useState({ email: "", password: "" });
  const { logindata, setlogindata } = useContext(Logindata);
  console.log(logindata.validuser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "") {
      alert("please email required");
    } else if (password === "") {
      alert("please password is required");
    } else {
      const fetchdata = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await fetchdata.json();
      if (res.status === 200) {
        localStorage.setItem("token", res.result.token);
        navigate("/Profile");
        setdata({ email: "", password: "" });
        setlogindata(res.validuser);
      } else {
        navigate("/Error");
      }
    }
  };
  return (
    <div className="h-auto w-full p-3 bg-gray-200 text-gray-700">
      <div className=" h-auto w-full">
        <h1 className="py-5 text-2xl font-bold text-center">
          Login your account
        </h1>
        <div className=" shadow-lg   pb-4 rounded-md h-auto md:w-[500px] w-auto  m-auto ">
          <h1 className="text-center pt-4 font-bold text-xl">Login</h1>
          <div className=" my-4 flex m-auto justify-center  md:w-[400px] h-auto w-auto">
            <form action="">
              <div className="flex flex-col">
                <label className="text-md font-bold" htmlFor="">
                  email
                </label>
                <input
                  className="mt-2 h-12 w-auto md:w-[400px] hover:outline-none rounded-md pl-2
                   focus:outline-none ring-1 ring-gray-500"
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className=" mt-3 flex flex-col">
                <label className="text-md font-bold" htmlFor="">
                  password
                </label>
                <input
                  className="mt-2 h-12 w-auto md:w-[400px]
                   hover:outline-none rounded-md pl-2 focus:outline-none ring-1 ring-gray-500"
                  type="email"
                  name="password"
                  placeholder="enter your password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={handleClick}
                className=" border border-gray-300 shadow-md p-2 
               rounded-lg w-full justify-center text-gray-100 bg-blue-500
                hover:bg-gray-700 hover:text-gray-200 mt-6 flex m-auto
                 text-center text-2xl font-bold transition-all ease-in duration-1000"
              >
                Login
              </button>
            </form>
          </div>
          <div className="m-auto mt-3 pb-4 text-xl text-blue-500  flex justify-center">
            <h1 className="space-x-1">
              <NavLink to="/">Forgotten password?</NavLink>

              <span>
                <NavLink to="/Register">Register</NavLink>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
