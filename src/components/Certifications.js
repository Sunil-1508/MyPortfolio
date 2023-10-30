import React from 'react'
import './Certifications.css'

export default function Certifications() {
  return (
    <section id="Certifications" className="mx-5 pt-5">
        <h1 id="title" className='pt-5'>My Certifications</h1>
        <p>I hold valuable certifications that demonstrates my dedication to continuous learning and professional growth. This certifications equipped me with a strong foundation in relevant skills and knowledge, which enhances my capabilities in my chosen field. It reflects my commitment to staying updated and competent in a rapidly evolving industry.</p>
        <div className="container-fluid crd row mt-1">
        <div className="col-md-3 mycard" onClick={()=>window.open("https://www.linkedin.com/posts/sunil-noolu_coding-owlcoder-thub-activity-7051423799015084032-Ajaz?utm_source=share&utm_medium=member_desktop")}>
          <h4 className="coll">OWL CODER Admiration</h4>
          <p>Achieved Level-5 Badge in the OWL CODER Program Conducted by Our College</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://drive.google.com/file/d/1qoqZ-rIxUABPtqHAeWPF25Rd07muF1VQ/view?usp=sharing")} >
          <h4 className="coll">C++ Programming</h4>
          <p>CPA: Programming Essentials in C++</p>
          <p>C++ 5 starts in Hacker Rank</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://www.credly.com/badges/5d5c5dd2-8925-4203-bc3f-c475cebce9a5/public_url")}>
        <h4 className="coll">Python Programming</h4>
          <p>PCAP - Programming Essentials in Python</p>
          <p>Python 5 starts in Hacker Rank</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://www.credly.com/badges/6d7c606d-4a1c-48a2-a4e6-8eec97378db2/public_url")}>
          <h4 className="coll">Cloud Computing</h4>
          <p>AWS CLOUD PRACTITIONER FOUNDATIONAL</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://drive.google.com/file/d/1ocXbF2uY16Wt1SCm3TAgn6BXO_bQX_k1/view?usp=sharing")}>
          <h4 className="coll">Master Git & GitHub</h4>
          <p>Done Master Git & GitHub: Beginner to Expert Course in Udemy</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://drive.google.com/file/d/1NkxSq3mwIa3YfLxidVaQb3VkLud7qLZY/view?usp=sharing")}>
          <h4 className="coll">Java Programming</h4>
          <p>ORACLE JAVA FOUNDATION CERTIFICATION</p>
        </div>
        </div>
    </section>
  )
}
