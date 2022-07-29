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
  handleDelete,
  projectT,
  projectURL,
  projectdescription,
  id,
  info,
}) {
  // function handleDelete() {
  //   fetch(`http://localhost:4000/resumes/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then(() => onDelete(id));
  // }

  // function onDelete(id) {
  //   const updated = data.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setFormData(updated);
  // }

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
      <p>Project Title:{projectT}</p>
      <p>Project_Description:{projectdescription}</p>
      <p>Project_URL:{projectURL}</p>

      <h2>Languages</h2>
      <p>Languages:{languages}</p>
      <button className="del" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Resume;
