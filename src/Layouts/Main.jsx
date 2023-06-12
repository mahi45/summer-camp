import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="border-2">
        <Outlet></Outlet>
      </div>
      <Footer className="min-height-screen"></Footer>
    </div>
  );
};

export default Main;
