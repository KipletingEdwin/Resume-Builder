import React  from "react";

function Languages(languageData, setLanguageData) {
  return (
    <div className="Languages">
      <button>Add Languages</button>
      <input
        type="text"
        id="languages"
        value={languageData.languages}
        placeholder="Add Languages"
      ></input>
    </div>
  );
}

export default Languages;
