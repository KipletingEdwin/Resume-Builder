import React from "react";

function Languages({ formData, handleChange }) {
  return (
    <div className="Languages">
      <button>Add Languages</button>
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
