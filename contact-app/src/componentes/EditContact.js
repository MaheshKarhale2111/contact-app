import React, { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"

export default function EditContact(props) {
  let {state} = useLocation(); 
  const {id,name,email} = state.contact; 
  const [formData, setFormData] = useState({id:id, name: name, email: email });
  const navigate = useNavigate();
  const updateForm = (e) => {
    e.preventDefault();
    if(formData.name === "" || formData.email === ""){
      alert("All fields are mandatory");
    }
    else {
      props.updateContactHandler(formData);
      setFormData({name :"", email:""});
      navigate('/');
    }

    // console.log(props);
  }
  return (
    <div className="ui main">
      <h2>Update Contact</h2>
      <form action="" className="ui form" onSubmit={updateForm}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}
