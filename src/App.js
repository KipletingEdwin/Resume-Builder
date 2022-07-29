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
    head:"",
    description: "",
    project_url: "",
    skills: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.languages ===""|| 
    formData.phone ===""     ||
    formData.address ==="" ||
    formData.school === "" ||
    formData.level ===""||
    formData.start ===""||
    formData.end ===""||
    formData.name ===""||
    formData.proffesion ===""||
    formData.email ===""||
    formData.head ===""||
    formData.description ===""||
    formData.project_url ===""||
    formData.skills ===""


    ){
      alert ("Please fill in all fields")
    } else{
    fetch("http://localhost:4000/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((info) => console.log(info));
      setFormData({...formData,phone:"",address:"",school:"",level:"",start:"",end:"",name:"",proffesion:"",email:"",head:"",description:"",project_url:"",skills:"",languages:""})
  }

  

  
}

  return (
    <div className="app">
      <h4>RESUME BUILDER</h4>
      <p>....Your Resume is just seconds away...</p>

      <div className="resume">
        <form>
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Education
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Skills
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Projects
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Languages
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <button className="sub" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <ResumeContainer />
        <Resume />
      </div>
    </div>
  );
}

export default App;
