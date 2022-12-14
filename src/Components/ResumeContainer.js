import React, { useEffect, useState } from "react";
import Resume from "./Resume";

function ResumeContainer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://resumebuildaresume.herokuapp.com/resumes")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const resumeList = info.map((data, index) => {
    return (
      <Resume
        name={data.name}  
        proffesion={data.proffesion}
        email={data.email}
        phone={data.phone}
        address={data.address}
        level={data.level}
        start={data.start}
        end={data.end}
        languages={data.languages}
        school={data.school}
        projectURL={data.project_url}
        skills={data.skills}
        projectT={data.head}
        projectdescription={data.description}
        id={data.id}
        setInfo={setInfo}
        data={data}
      />
    );
  });

  return <div>{resumeList}</div>;
}

export default ResumeContainer;
