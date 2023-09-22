import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../share/Navbar";
import Footer from "./../share/Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
