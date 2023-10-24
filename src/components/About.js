import React from 'react'
import './About.css'
import { Cursor } from 'react-simple-typewriter'
export default function About(props) {
  return (
    <section id="About" className="mx-5 pt-5">
      <div className="container-fluid row pt-5">
        < div className="col-md-7 ">
            <h1 className="text1">Hi I'm {props.Name},</h1>
            <p className="text2">I'm a <span id="typing">Frontend Web-Developer</span><Cursor /></p>
            <p className="text3">I am an <b>engineering student</b>, an avid <b>technology lover</b>, and a passionate <b>coder</b>. It brings me great pleasure to learn new <b>development platforms</b> and use them to solve <b>technological challenges</b>.</p>
            <div className="bottom">
                <div className="connect">
                    <a href={props.button1}> 
                    <button className="btn btn-primary" type="button">{props.btnName1}</button>
                    </a>
                </div>
                <div className="github">
                    <a href={props.button2}> 
                    <button className="btn btn-primary" type="button">{props.btnName2}</button>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-md-4 "><img className="image" src={props.image} alt="profile pic"/></div>
      </div>  
      </section>
    
  )
}

