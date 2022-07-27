import React, { useState,useEffect } from "react";
// import './App.css';
import PersonalInfo from "./Components/PersonalInfo";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Languages from "./Components/Languages";
import Projects from "./Components/Projects";
import ResumeContainer from "./Components/ResumeContainer";
import Resume from "./Components/Resume";

function App() {
  const [formData, setFormData] = useState({
    school: "",
    level: "",
    start: "",
    end: "",
    languages: "",
    name: "",
    proffesion: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    project_url: "",
    skills: "",
  });

  const [eduData, setEduData] = useState({
    school: "",
    level: "",
    start: "",
    end: "",
  });

  const [languageData, setLanguageData] = useState({
    languages: "",
  });

  const [personalData, setPersobalData] = useState({
    name: "",
    proffesion: "",
    email: "",
    phone: "",
    address: "",
  });

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    project_url: "",
  });

  const [skillData, setSkillData] = useState({
    skills: "",
  });

  function formSubmit() {
    useEffect(() =>{
      fetch ("http://localhost:4000/resumes")
      .then ((res) =>res.json())
      .then((cv) =>console.log(cv))
    })
   
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("  http://localhost:4000/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }



  return (
    <div className="app">
      <h4>RESUME BUILDER</h4>
      <p>....Your Resume is just seconds aways...</p>

      <div className="resume">
        <form onSubmit={formSubmit}>
          <PersonalInfo />
          <Education />
          <Skills />
          <Projects />
          <Languages />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <ResumeContainer />
        <Resume />
      </div>
    </div>
  );
}

export default App;
