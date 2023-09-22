import React, { useState } from "react";

export default function Emailverify() {
  const [mail, setmail] = useState({ email: "" });

  const handleemail = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setmail(() => {
      return {
        ...mail,
        [name]: value,
      };
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email } = mail;
    if (email === "") {
      alert("please email required");
    } else if (!email.includes("@")) {
      alert("please valid email required");
    } else {
      //console.log("email messase successfully");
      const fetchdata = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const res = await fetchdata.json();
      if (res.status === 401 || !res) {
        console.log("error");
      } else {
        setmail({
          ...mail,
          email: "",
        });
      }
    }
  };
  return (
    <div className="head bg-gradient-to-b py-5 from-slate-950 to-slate-700 text-white h-auto w-full">
      <h1 className="text-center text-2xl font-bold mt-3">
        send email with node js
      </h1>
      <div className=" shadow-md sm:w-[600px] w-auto py-10 flex m-auto justify-center ">
        <form action="">
          <div className="flex flex-col">
            <label className="text-xl font-bold" htmlFor="">
              email
            </label>
            <input
              className="w-auto mt-2 sm:w-[500px] h-11 rounded-md p-2 text-gray-800"
              type="email"
              name="email"
              placeholder="enter your mail"
              value={mail.email}
              onChange={handleemail}
            />
          </div>
          <button
            onClick={handlesubmit}
            className=" border border-gray-300 shadow-md p-2 
               rounded-lg w-full justify-center text-gray-100 bg-blue-500
                hover:bg-gray-700 hover:text-gray-200 mt-6 flex m-auto
                 text-center text-2xl font-bold transition-all ease-in duration-1000"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
