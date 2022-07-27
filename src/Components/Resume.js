import React from "react";

function Resume({ name, proffesion, email, phone, address, school }) {
  return (
    <div className="final-resume">
      <h1>Personal Information</h1>
      <h2>Name:{name}</h2>
      <h2>Proffesion:{proffesion}</h2>
      <p>Email:{email}</p>
      <p>Phone Number:{phone}</p>
      <p>Address:{address}</p>

      <h1>Education Details</h1>
      {/* <h1>School:{data.school}</h1> */}
      {/* <h2>Class:{data.level}</h2>
      <p>Start Date:{data.start}</p>
      <p>End Date:{data.end}</p> */}

      <h1>Skills</h1>
      <p>Skills</p>

      <h1>Projects</h1>
      <h3>Project Title</h3>
      <p>Project_Description</p>
      <p>Project_URL</p>

      <h1>Languages</h1>
      <p>Languages</p>
    </div>
  );
}

export default Resume;
