import React from "react";

function Languages({ formData, handleChange }) {
  return (
    <div className="Languages">
      <h3>Languages</h3>
      <input
        type="text"
        name="languages"
        onChange={handleChange}
        value={formData.languages}
        placeholder="Add Languages"
      ></input>
    </div>
  );
}

export default Languages;
