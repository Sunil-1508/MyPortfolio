import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section id="Skills" className="mx-4">
        <h1 id="title">My Skills</h1>
        <p>I excel in frontend development, problem solving, data structures and algorithms, and AWS. These skills reflect my technical proficiency, creative problem-solving abilities, and expertise in cloud computing. I am well-equipped to deliver high-quality solutions in my field.</p>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                    <hr />
                    <h4 id="list-item-1">Programming Languages</h4>
                    <ul>
                        <li>C++ <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>Python <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>Java <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                    </ul>
                    <hr />
                    <h4 id="list-item-2">Frontend Web Development</h4>
                    <ul>
                        <li>HTML <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>CSS <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>JavaScript <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"70%"}} >70%</div></div>
                        </li>
                        <li>Bootstrap <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>React <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                    </ul>
            </div>
            <div className="col-md-6">
                <hr />
                    <h4 id="list-item-3">Cloud Computing</h4>
                    <ul>
                        <li>AWS <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                        <li>DevOps <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"50%"}} >50%</div></div>
                        </li>
                    </ul>
                    <hr />
                    <h4 id="list-item-4">Other Tools</h4>
                    <ul>
                        <li>Git & GitHub<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>Figma<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                        <li>VS Code<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"70%"}} >70%</div></div>
                        </li>
                    </ul>
                    
                    
            </div>
        </div>
        </div>
    </section>
  )
}
