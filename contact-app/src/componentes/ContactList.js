import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const contacts = props.contacts;
  const delteContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={delteContactHandler}
      />
    );
  });

  return (
    <div className="main" style={{ marginTop: "10%" }}>
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h1>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search contacts" className="prompt"/>
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list"> {renderContactList}</div>
    </div>
  );
}
