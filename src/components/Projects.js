import React from 'react'
import './Projects.css'
import snake from '../assets/snake_and _ladder.png'
import ansible from '../assets/ansible.png'
import portfolio from '../assets/portfolio.png'

export default function Projects() {
  function openp1(){ window.open("https://sunil-1508.github.io/Snakes-Ladders/");}
  function openp2(){ window.open("https://github.com/Sunil-1508/cloud_storms/tree/main");}
  function openp3(){ window.open("https://sunil-1508.github.io/Snakes-Ladders/");}
  return (
    <section id="Projects" className="mx-4">
        <div className="row  card-row mx-1 mt-5">
            <h1 id="title">My Projects</h1>

            <div className="card col-md-3" onClick={openp1}>
            <img src={snake} className="card-img-top" alt="Snake & Ladder" />
            <div className="card-body">
            <p className="title">Snake and Ladder</p>
            <p className="card-text">Designed a fully responsive & attractive web application for classical Snake and Ladder game. Developed and established the fundamental game mechanics, including player movement, snakes and ladders placement, 
and the winning criteria.</p>
            </div></div>

            <div className="card col-md-3" onClick={openp2}>
            <img src={ansible} className="card-img-top" alt="Ansible" />
            <div className="card-body">
            <p className="title">Snake and Ladder</p>
            <p className="card-text">Ansible: an open-source automation tool. With Ansible, we can automate repetitive tasks and maintain consistency
throughout your infrastructure with ease.</p>
            </div></div>

            <div className="card col-md-3" onClick={openp3}>
            <img src={portfolio} className="card-img-top" alt="snake & Lader" />
            <div className="card-body">
            <p className="title">Portfolio</p>
            <p className="card-text">Developed a dynamic and visually engaging portfolio using React, showcasing my passion for web development and design.</p>
            </div></div>      
        </div>
    </section>
  )
}
