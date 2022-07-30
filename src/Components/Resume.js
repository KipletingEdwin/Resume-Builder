import React from "react";

function Resume({
  name,
  proffesion,
  email,
  phone,
  address,
  school,
  level,
  start,
  end,
  languages,
  skills,
  projectT,
  projectURL,
  projectdescription,
  setInfo,
  id,
  data,
  info,


}) {
  function handleDelete() {
    fetch(`http://localhost:4000/resumes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(id));
  }

  function onDelete(id) {
    const updated = data.filter((item) => {
      return item.id !== id;
    });
    setInfo(updated);
  }

  return (
    <div className="final-resume">
      <h2>Personal Information</h2>
      <h3><span>Name</span>:{name}</h3>
      <p><span>Proffesion</span>:{proffesion}</p>
      <p><span>Email</span>:{email}</p>
      <p><span>Phone Number</span>:{phone}</p>
      <p><span>Address</span>:{address}</p>

      <h2>Education Details</h2>
      <p><span>School</span>:{school}</p>
      <p><span>Course</span>:{level}</p>
      <p><span>Start Date</span>:{start}</p>
      <p><span>End Date</span>:{end}</p>

      <h2>Skills</h2>
      <p><span>Skills</span>:{skills}</p>

      <h2>Projects</h2>
      <p><span>Project Title</span>:{projectT}</p>
      <p><span>Project_Description</span>:{projectdescription}</p>
      <p><span>Project_URL</span>:{projectURL}</p>

      <h2>Languages</h2>
      <p><span>Languages</span>:{languages}</p>
      <button className="del" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Resume;
