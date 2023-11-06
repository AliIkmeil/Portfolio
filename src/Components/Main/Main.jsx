import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "./Main.css";
const Main = () => {
  return (
    <div className="all">
      <header className="navBarContainer">
        <NavBar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
