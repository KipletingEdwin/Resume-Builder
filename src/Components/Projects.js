import React from "react";

function Projects({ formData, handleChange }) {
  return (
    <div className="Projects">
     <h3>Projects</h3>
      <input
        type="text"
        name="head"
        onChange={handleChange}
        value={formData.head}
        placeholder="Title"
      />
      <textarea
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
        placeholder="Projects' Description"
      />
      <input
        type="text"
        name="project_url"
        onChange={handleChange}
        value={formData.project_url}
        placeholder="Project URL"
      />
    </div>
  );
}

export default Projects;
