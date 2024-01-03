import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  const img =
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
  return (
    <div className="item">
      <img className="ui avatar image" src={img} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div className="">{email}</div>
        </Link>
      </div>
      <i
        style={{ float: "right", color: "red", marginTop: "7px" }}
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      ></i>

      <Link to={'/edit'} state={{ contact: props.contact }}>
        <i
          style={{ float: "right", color: "green", marginTop: "7px" }}
          className="edit alternate outline icon"
          // onClick={() => props.clickHandler(id)}
        ></i>
      </Link>
    </div>
  );
}
