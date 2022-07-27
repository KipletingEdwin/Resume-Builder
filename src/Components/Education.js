import React from "react";

function Education(eduData, setEduData) {
  return (
    <div className="Education">
      <button>Education Details</button>
      <input
        type="text"
        id="school"
        value={eduData.school}
        placeholder="School/University"
      />
      <input
        type="text"
        id="class"
        value={eduData.class}
        placeholder="Class/Degree"
      />
      <input
        type="text"
        id="start"
        value={eduData.start}
        placeholder="Start Date"
      />
      <input type="text" id="end" value={eduData.end} placeholder="End Date" />
    </div>
  );
}

export default Education;
