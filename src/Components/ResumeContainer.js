import React, { useEffect, useState } from "react";
import Resume from "./Resume";

function ResumeContainer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:4000/resumes")
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
        project={data.project_url}
        skills={data.skills}
        projectT={data.head}
        id={data.id}
        

      />
    );
  });

  return <div>{resumeList}</div>;
}

export default ResumeContainer;
