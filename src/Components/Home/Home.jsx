import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="table center">
        <div className="monitor-wrapper center">
          <div className="monitor center">
            <p>Hello I'm Ali Ikmeil</p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="cols cols0">
          <span className="topline">Software Developer</span>
          <h1 className="esme">
            Stalk{" "}
            <span className="multiText">
              Into
              <br /> my <br />
              Portfolio<b>.</b>
            </span>
          </h1>
          <div className="emptyDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
