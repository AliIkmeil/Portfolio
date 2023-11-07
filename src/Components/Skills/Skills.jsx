import React from 'react'
import "./Skills.css"
import {BiLogoReact,BiLogoMongodb,BiLogoPostgresql,BiLogoHtml5,BiLogoNodejs,BiLogoRedux,BiLogoCss3} from "react-icons/bi"

import {SiJavascript} from "react-icons/si"

const Skills = () => {
  return (
    <div className='iconsContainer'>
        <div></div>
        <div className='iconsDiv'>
        <span><a href='https://legacy.reactjs.org/' target='_blank'><BiLogoReact className='icons reactIcon'/></a>
        <h1 className='names react'>React</h1></span>
        <span><a href='https://www.javascript.com/' target='_blank'><SiJavascript className='icons javaScriptIcon'/></a>
            <h1 className='names'>JavaScript</h1></span>
        <span><a href='https://www.mongodb.com/' target='_blank'><BiLogoMongodb className='icons mongoDBIcon'/></a>
            <h1 className='names'>MongooDB</h1></span>
        <span><a href='https://www.postgresqltutorial.com/' target='_blank'><BiLogoPostgresql className='icons postgreSQLIcon'/></a>
            <h1 className='names'>PostgreSQL</h1></span>
        <span><a href='https://www.w3schools.com/html/' target='_blank'><BiLogoHtml5 className='icons HTMLIcon'/></a>
        <h1 className='names html'>HTML 5</h1></span>
        <span><a href='https://www.w3schools.com/nodejs/nodejs_intro.asp' target='_blank'><BiLogoNodejs className='icons nodeJSIcon'/></a><h1 className='names nodeJS'>Node JS</h1></span>
        <span><a href='https://redux.js.org/' target='_blank'><BiLogoRedux className='icons reduxIcon'/></a>
        <h1 className='names redux'>Redux</h1></span>
        <span><a href='https://www.w3schools.com/css/' target='_blank'><BiLogoCss3 className='icons cssIcon'/></a>
        <h1 className='names css'>Css</h1></span>
        </div>
        <div></div>

    </div>
  )
}

export default Skills