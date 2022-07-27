import React from "react";
// import { ReactDOM } from "react";
// import App from '../App';

function PersonalInfo(personalData, setPersobalData) {
  return (
    <div className="PersonalInfo">
      <button>Personal Information</button>

      <div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={personalData.name}
        />
        <input
          type="text"
          id="proffesion"
          placeholder="Proffesion"
          value={personalData.proffesion}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={personalData.email}
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          value={personalData.phone}
        />
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={personalData.address}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
