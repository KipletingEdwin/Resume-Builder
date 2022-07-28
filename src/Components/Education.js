import React from "react";

function Education({formData,handleChange }) {






  return (
    <div className="Education">
      <button>Education Details</button>
      <input
        type="text"
        name="school"
        onChange={handleChange}
        value={formData.school}
        placeholder="School/University"
      />
      <input
        type="text"
        name="level"
        onChange={handleChange}
        value={formData.level}
        placeholder="Class/Degree"
      />
      <input
        type="text"
        name="start"
        onChange={handleChange}
        value={formData.start}
        placeholder="Start Date"
      />
      <input
       type="text"
        name="end" 
        onChange={handleChange}
        value={formData.end}
       placeholder="End Date" />
     
    </div>
  );
}

export default Education;
