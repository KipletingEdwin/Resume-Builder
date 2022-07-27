import React from "react";

function Projects(projectData, setProjectData) {
  return (
    <div className="Projects">
      <button>Projects</button>
      <input
        type="text"
        id="title"
        value={projectData.title}
        placeholder="Title"
      />
      <textarea
        id="description"
        value={projectData.description}
        placeholder="Projects' Description"
      />
      <input
        type="text"
        id="project_url"
        value={projectData.project_url}
        placeholder="Project URL"
      />
    </div>
  );
}

export default Projects;
