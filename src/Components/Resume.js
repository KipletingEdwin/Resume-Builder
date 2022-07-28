import React from "react";

function Resume({ name, proffesion, email, phone, address, school,level,start,end,languages,description,project_url,skills,head }) {
  return (
    <div className="final-resume">
      <h2>Personal Information</h2>
      <h3>Name:{name}</h3>
      <p>Proffesion:{proffesion}</p>
      <p>Email:{email}</p>
      <p>Phone Number:{phone}</p>
      <p>Address:{address}</p>

      <h2>Education Details</h2>
      <p>School:{school}</p> 
       <p>Course:{level}</p>
      <p>Start Date:{start}</p>
      <p>End Date:{end}</p>

      <h2>Skills</h2>
      <p>Skills:{skills}</p>

      <h2>Projects</h2>
      <h3>Project Title:{head}</h3>
      <p>Project_Description:{description}</p>
      <p>Project_URL:{project_url}</p>

      <h2>Languages</h2>
      <p>Languages:{languages}</p>
    </div>
  );
}

export default Resume;
