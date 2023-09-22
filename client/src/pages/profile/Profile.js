import React, { useContext } from "react";
import { useEffect } from "react";
import { Logindata } from "../../Component/context/Createcontext";

export default function Profile() {
  const { logindata, setlogindata } = useContext(Logindata);
  console.log(logindata.validuser);

  const getdata = async () => {
    const token = localStorage.getItem("token");
    const fetchdata = await fetch("http://localhost:4000/api/validuser", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    });
    const response = await fetchdata.json();

    if (response.status === 200) {
      setlogindata(response.validuser);
    }
  };

  useEffect(() => {
    getdata();
  });
  return (
    <div>
      <h1>name:</h1>
    </div>
  );
}
