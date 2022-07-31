import React, { useState } from "react";
import{Routes,Route} from "react-router-dom";
import NavBar from "./Components/Navbar";
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
    head: "",
    description: "",
    project_url: "",
    skills: "",
  });
 

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.languages === "" ||
      formData.phone === "" ||
      formData.address === "" ||
      formData.school === "" ||
      formData.level === "" ||
      formData.start === "" ||
      formData.end === "" ||
      formData.name === "" ||
      formData.proffesion === "" ||
      formData.email === "" ||
      formData.head === "" ||
      formData.description === "" ||
      formData.project_url === "" ||
      formData.skills === ""
    ) {
      alert("Please fill in all fields");
    } else {
      fetch("https://resumebuildaresume.herokuapp.com/resumes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((info) => console.log(info));
      setFormData({
        ...formData,
        phone: "",
        address: "",
        school: "",
        level: "",
        start: "",
        end: "",
        name: "",
        proffesion: "",
        email: "",
        head: "",
        description: "",
        project_url: "",
        skills: "",
        languages: "",
      });
    }
  }
  return (
    <div className="app">
      <div className="resume">
        <h4>RESUME BUILDER</h4>
        <h6>....Your Resume is just seconds away...</h6>
        <form>
          <NavBar />
          
          <Routes>
          <Route path="home"element={<App/>} />
            <Route path="personalinformation" element ={ <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />}/>

         <Route path="education" element={ <Education
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />} />

         <Route path="skills" element={ <Skills
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />} />
         <Route path="projects" element={  <Projects
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />} />
        <Route path="languages" element={ <Languages
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />}  />
         
          </Routes>
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
