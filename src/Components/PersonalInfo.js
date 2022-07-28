import React from "react";


function PersonalInfo({formData,handleChange}) {


  return (
    <div className="PersonalInfo">
      <button>Personal Information</button>

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
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        
        />
        <input
          type="text"
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
        {/* <button onClick={()=>handleClick(personalData)}>Complete</button> */}
      </div>
    </div>
  );
}

export default PersonalInfo;
