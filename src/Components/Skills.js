import React from "react";

function Skills({ formData, handleChange }) {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <textarea
        type="text"
        name="skills"
        onChange={handleChange}
        value={formData.skills}
        placeholder="Enter your skillls"
      ></textarea>
    </div>
  );
}

export default Skills;
