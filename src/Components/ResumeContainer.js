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
        key={index}
      />
    );
  });

  return <div>{resumeList}</div>;
}

export default ResumeContainer;
