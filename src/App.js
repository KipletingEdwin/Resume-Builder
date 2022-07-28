import React, { useState } from "react";
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

  // const [eduData, setEduData] = useState({
  //   school: "",
  //   level: "",
  //   start: "",
  //   end: "",
  // });

  // const [languageData, setLanguageData] = useState({
  //   languages: "",
  // });

  // const [personalData, setPersonalData] = useState({
  //   name: "",
  //   proffesion: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  // });

  // const [projectData, setProjectData] = useState({
  //   title: "",
  //   description: "",
  //   project_url: "",
  // });

  // const [skillData, setSkillData] = useState({
  //   skills: "",
  // });

  // function handleClick(updatedState){
  //   setFormData({...formData,updatedState})
  //   console.log(formData)

  // }

  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
  }

 

  return (
    <div className="app">
      <h4>RESUME BUILDER</h4>
      <p>....Your Resume is just seconds aways...</p>

      <div className="resume">
        <form>
          <PersonalInfo  formData={formData} setFormData={setFormData} handleChange={handleChange} />
          <Education  formData={formData} setFormData={setFormData} handleChange={handleChange} />
          <Skills   formData={formData} setFormData={setFormData} handleChange={handleChange} />
          <Projects  formData={formData} setFormData={setFormData} handleChange={handleChange} />
          <Languages  formData={formData} setFormData={setFormData} handleChange={handleChange} />
          <button>Submit</button>
        </form>
        <ResumeContainer />
        <Resume />
      </div>
    </div>
  );
}

export default App;
