import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const history = useNavigate();
  const deshboard = async () => {
    const token = localStorage.getItem("token");

    const fetchdata = await fetch("http://localhost:5000/api/validate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const res = await fetchdata.json();
    console.log(res);
    if (res.status === 400 || !res) {
      history("*");
      //console.log("error page redirect");
    } else {
      history("/About");
      console.log("user verify");
    }
  };

  useEffect(() => {
    deshboard();
  });

  return (
    <div className="about bg-gradient-to-b py-10 from-black to-slate-700 h-auto w-full text-white">
      <h1 className="text-2xl text-center">this is about pages</h1>
      <p className="text-sm font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto
        recusandae perferendis similique vero magni! Beatae nesciunt ducimus
        tempore autem obcaecati natus quos, ratione voluptatibus eligendi, minus
        laborum tempora similique incidunt reprehenderit harum officiis dolorum
        itaque quibusdam, repudiandae eveniet quidem dignissimos quas? Nemo
        corrupti ad, quasi id deserunt natus tempore.
      </p>
    </div>
  );
}
