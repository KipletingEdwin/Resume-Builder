import React from "react";

function Skills(skillData, setSkillData) {
  return (
    <div className="Skills">
      <textarea
        type="text"
        value={skillData.skills}
        id="skills"
        placeholder="Enter your skillls"
      ></textarea>
    </div>
  );
}

export default Skills;
