import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setdata(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleclick = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = data;
    if (name === "") {
      alert("please name required");
    } else if (email === "") {
      alert("please email required");
    } else if (phone === "") {
      alert("please enter number");
    } else if (password === "") {
      alert("please enter password");
    } else if (password.length < 7) {
      alert("password must be 7 character");
    } else if (cpassword === "") {
      alert("enter c pass word");
    } else if (cpassword.length < 7) {
      alert("cpassword must be & character");
    } else if (password !== cpassword) {
      alert("please enter the valid password");
    } else {
      //console.log("registration successfull");
      const fetchdata = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, cpassword }),
      });
      const res = await fetchdata.json();
      //console.log(res);
      if (res.status === 200) {
        alert("user registration done");
        setdata({
          ...data,
          name: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };
  return (
    <div
      className="head bg-gradient-to-b from-gray-900
     to-gray-500 h-auto w-full text-gray-100 pb-10 dark:bg-slate-800 dark:text-gray-200"
    >
      <div className="py-2 pt-10 pb-5 ">
        <h1 className="text-center text-3xl font-bold">
          Register your account
        </h1>
      </div>
      <div className="mt-1 shadow-md pt-2 p-auto  h-auto sm:w-[600px] w-auto justify-center m-auto">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <div className="mt-4 m-auto pb-5 flex justify-center">
          <form action="">
            <div className=" flex flex-col">
              <label className="text-xl font-bold" htmlFor="">
                name
              </label>
              <input
                className="mt-2 h-12 w-[300px]  sm:w-[400px]
                hover:outline-none text-gray-700  rounded-md pl-2 focus:outline-none ring-1 ring-blue-500"
                type="name"
                name="name"
                placeholder="enter your name"
                value={data.name}
                onChange={handlechange}
              />
            </div>
            <div className=" flex flex-col mt-2">
              <label className="text-xl font-bold" htmlFor="">
                email
              </label>
              <input
                className="mt-2 h-12 w-[300px]  sm:w-[400px]
                hover:outline-none text-gray-700  rounded-md pl-2 focus:outline-none ring-1 ring-blue-500"
                type="email"
                name="email"
                placeholder="enter your email"
                value={data.email}
                onChange={handlechange}
              />
            </div>
            <div className=" flex flex-col mt-2">
              <label className="text-xl font-bold" htmlFor="">
                phone
              </label>
              <input
                className="mt-2 h-12 w-[300px] sm:w-[400px]
                hover:outline-none text-gray-700  rounded-md pl-2 focus:outline-none ring-1 ring-blue-500"
                type="phone"
                name="phone"
                placeholder="enter your phone number"
                value={data.phone}
                onChange={handlechange}
              />
            </div>
            <div className=" flex flex-col mt-2 ">
              <label className="text-xl font-bold" htmlFor="">
                password
              </label>
              <input
                className="mt-2 h-12 w-[300px] sm:w-[400px]
                hover:outline-none text-gray-700  rounded-md pl-2 focus:outline-none ring-1 ring-blue-500"
                type="password"
                name="password"
                placeholder="enter your password"
                value={data.password}
                onChange={handlechange}
              />
            </div>
            <div className=" flex flex-col mt-2">
              <label className="text-xl font-bold" htmlFor="">
                cpassword
              </label>
              <input
                className="mt-2 h-12 w-[300px] sm:w-[400px]
                hover:outline-none text-gray-700 rounded-md pl-2 focus:outline-none ring-1 ring-blue-500"
                type="password"
                name="cpassword"
                placeholder="enter your cpassword"
                value={data.cpassword}
                onChange={handlechange}
              />
            </div>
            <button
              onClick={handleclick}
              className=" border border-gray-300 shadow-md p-2 
               rounded-lg w-full justify-center text-gray-100 bg-blue-500
                hover:bg-gray-700 hover:text-gray-200 mt-6 flex m-auto
                 text-center text-2xl font-bold transition-all ease-in duration-1000"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="m-auto mt-1 pb-4 text-xl text-gray-200 font-semibold  flex justify-center">
          <h1 className="space-x-1">
            <NavLink to="/">Have an account?</NavLink>

            <span>
              <NavLink to="/Login">Login</NavLink>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
