import React from 'react'
import './Projects.css'
import snake from '../assets/snake_and _ladder.png'
import ansible from '../assets/ansible.png'

export default function Projects() {
  return (
    <section id="Projects" className="mx-4">
        <div className="row  card-row mx-1 mt-5">
            <h1>My Projects</h1>

            <div className="card col-md-3">
            <img src={snake} className="card-img-top" alt="Snake & Ladder" />
            <div className="card-body">
            <p className="title">Snake and Ladder</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>

            <div className="card col-md-3">
            <img src={ansible} className="card-img-top" alt="Ansible" />
            <div className="card-body">
            <p className="title">Snake and Ladder</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>

            <div className="card col-md-3">
            <img src={snake} className="card-img-top" alt="snake & Lader" />
            <div className="card-body">
            <p className="title">Snake and Ladder</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>      
        </div>
    </section>
  )
}
