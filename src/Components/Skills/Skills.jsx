import React from 'react'
import "./Skills.css"
import {BiLogoReact,BiLogoMongodb,BiLogoPostgresql,BiLogoHtml5,BiLogoNodejs,BiLogoRedux,BiLogoCss3} from "react-icons/bi"

import {SiJavascript} from "react-icons/si"

const Skills = () => {
  return (
    <div className='iconsContainer'>
        <div></div>
        <div className='iconsDiv'>
        <span><BiLogoReact className='icons reactIcon'/><h1 className='names react'>React</h1></span>
        <span><SiJavascript className='icons javaScriptIcon'/><h1 className='names'>JavaScript</h1></span>
        <span><BiLogoMongodb className='icons mongoDBIcon'/><h1 className='names'>MongooDB</h1></span>
        <span><BiLogoPostgresql className='icons postgreSQLIcon'/><h1 className='names'>PostgreSQL</h1></span>
        <span><BiLogoHtml5 className='icons HTMLIcon'/><h1 className='names html'>HTML 5</h1></span>
        <span><BiLogoNodejs className='icons nodeJSIcon'/><h1 className='names nodeJS'>Node JS</h1></span>
        <span><BiLogoRedux className='icons reduxIcon'/><h1 className='names redux'>Redux</h1></span>
        <span><BiLogoCss3 className='icons cssIcon'/><h1 className='names css'>Css</h1></span>
        </div>
        <div></div>

    </div>
  )
}

export default Skills