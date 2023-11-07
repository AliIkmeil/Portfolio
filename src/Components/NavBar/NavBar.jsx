import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="homeNav">
      <ul className="navItems">
        <li>
          <a href="#">
            <h1 className="jt --debug">
              <span className="jt__row" onClick={()=>{navigate("/")}}>
                <span className="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span className="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span className="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span className="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
            </h1>
          </a>
        </li>
        <li>
          <a href="#">
            <h1 className="jt --debug">
              <span className="jt__row">
                <span className="jt__text" onClick={()=>{navigate("./aboutme")}}>About Me</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("./aboutme")}}>About Me</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("./aboutme")}}>About Me</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text" onClick={()=>{navigate("./aboutme")}}>About Me</span>
              </span>
            </h1>
          </a>
        </li>
        <li>
          <a href="#">            <h1 className="jt --debug">
  <span className="jt__row" onClick={()=>{navigate("/projects")}}>
    <span className="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span className="jt__text" onClick={()=>{navigate("/projects")}} >Projects</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span className="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span className="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
</h1></a>
        </li><li>
          <a href="#">            <h1 className="jt --debug">
  <span className="jt__row" onClick={()=>{navigate("/skills")}}>
    <span className="jt__text" onClick={()=>{navigate("/skills")}}>Skills</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/skills")}}>
    <span className="jt__text" onClick={()=>{navigate("/skills")}} >Skills</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/skills")}}>
    <span className="jt__text" onClick={()=>{navigate("/skills")}}>Skills</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/skills")}}>
    <span className="jt__text" onClick={()=>{navigate("/skills")}}>Skills</span>
  </span>
</h1></a>
        </li>
        <li>
          <a href="#">            <h1 className="jt --debug">
  <span className="jt__row">
    <span className="jt__text" onClick={()=>{navigate("/game")}}>Game</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text" onClick={()=>{navigate("/game")}}>Game</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text" onClick={()=>{navigate("/game")}}>Game</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text" onClick={()=>{navigate("/game")}}>Game</span>
  </span>
</h1></a>
        </li>
      </ul>
      <div className="links">
        <a href="https://www.linkedin.com/in/aliikmeil/" target="_blank">
          {" "}
          <i className="fa fa-linkedin-square icon linkedIn"></i>
        </a>
        <a href="https://www.instagram.com/ali_ikmail8/" target="_blank">
          <i className="fa fa-instagram icon instagram"></i>{" "}
        </a>
        <a href="https://github.com/AliIkmeil" target="_blank">
          <i className="fa fa-github icon github"></i>
        </a>
      </div>
    </nav>

  
  );
};

export default NavBar;
