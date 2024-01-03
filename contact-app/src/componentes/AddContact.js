import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function AddContact(props) {
  let [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    if(formData.name === "" || formData.email === ""){
      alert("All fields are mandatory");
    }
    else {
      props.addContactHandler(formData);
      setFormData({name :"", email:""});
      navigate('/');
    }

    console.log(props);
  }
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form" onSubmit={submitForm}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
