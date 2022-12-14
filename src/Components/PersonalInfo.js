import React from "react";

function PersonalInfo({ formData, handleChange }) {
  return (
    <div className="PersonalInfo">
      <h3>Personal Information</h3>

      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="proffesion"
          placeholder="Proffesion"
          onChange={handleChange}
          value={formData.proffesion}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
