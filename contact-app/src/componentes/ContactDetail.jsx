import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ContactDetail(props) {
  let { state } = useLocation();
  const { name, email } = state.contact;

  const img =
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
  return (
    <div className="main">
      <div className="ui card centerd">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <Link to="/">
        <div className="center-div">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </div>
      </Link>
    </div>
  );
}
