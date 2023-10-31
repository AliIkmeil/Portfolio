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
            <h1 class="jt --debug">
              <span class="jt__row" onClick={()=>{navigate("/")}}>
                <span class="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span class="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span class="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span class="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span class="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
              <span class="jt__row jt__row--sibling" onClick={()=>{navigate("/")}} aria-hidden="true">
                <span class="jt__text" onClick={()=>{navigate("/")}}>Home</span>
              </span>
            </h1>
          </a>
        </li>
        <li>
          <a href="#">
            <h1 class="jt --debug">
              <span class="jt__row">
                <span class="jt__text">About Me</span>
              </span>
              <span class="jt__row jt__row--sibling" aria-hidden="true">
                <span class="jt__text">About Me</span>
              </span>
              <span class="jt__row jt__row--sibling" aria-hidden="true">
                <span class="jt__text">About Me</span>
              </span>
              <span class="jt__row jt__row--sibling" aria-hidden="true">
                <span class="jt__text">About Me</span>
              </span>
            </h1>
          </a>
        </li>
        <li>
          <a href="#">            <h1 class="jt --debug">
  <span class="jt__row" onClick={()=>{navigate("/projects")}}>
    <span class="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span class="jt__text" onClick={()=>{navigate("/projects")}} >Projects</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span class="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true" onClick={()=>{navigate("/projects")}}>
    <span class="jt__text" onClick={()=>{navigate("/projects")}}>Projects</span>
  </span>
</h1></a>
        </li>
        <li>
          <a href="#">            <h1 class="jt --debug">
  <span class="jt__row">
    <span class="jt__text">Skills</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Skills</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Skills</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Skills</span>
  </span>
</h1></a>
        </li>
      </ul>
      <div className="links">
        <a href="#">
          {" "}
          <i className="fa fa-linkedin-square icon linkedIn"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram icon instagram"></i>{" "}
        </a>
        <a href="#">
          <i className="fa fa-twitter icon twitter"></i>
        </a>
      </div>
    </nav>

  
  );
};

export default NavBar;
