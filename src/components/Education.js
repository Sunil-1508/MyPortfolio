import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section id="Certifications" className="mx-5 pt-5">
      <h1 id="title" className="pt-4">Education Timeline</h1>
      <div className="container-fluid row mt-1 text-center">
        <div className="col-md-5 left">
          <div className="ebox">
            <p>
              <b>Bachelor of Technology in CSE</b><br />
              Aditya Engineering College, Surampalem<br />
              Year: 2024<br />
              CGPA: 8.53 (As of Now)
            </p>
          </div>
          <div className="ebox">
            <p>
              <b>Secondary School</b><br />
              Amalodbhavi ST Mary's E M High School, Eluru<br />
              Year: 2018<br />
              CGPA: 10.0
            </p>
          </div>
        </div>
        <div className="col-md-1 parent justify-content-center">
          <div className="bar"></div>
        </div>
        <div className="col-md-5 right">
          <div className="ebox">
            <p>
              <b>Intermediate (M.P.C)</b><br />
              Sri Chaitanya Jr College, Eluru<br />
              Year: 2020<br />
              CGPA: 9.82
            </p>
          </div>
          <div className="ebox text-align-justify">
            <p>
              <b>Amazon Web Services Intern</b><br />
              Technical Hub<br />
              Worked on Various Services in AWS. Deployed a React JS application using EC2 instance and also using S3 bucket. Worked on developing and testing new features for the AWS cloud platform. Collaborated with team members to identify and troubleshoot technical issues.<br />
              Duration: Jul 2022-Nov-2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
