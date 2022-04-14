import React from "react";
import contacts from "../contacts";

function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.avatar} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.contact}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function Contact() {
  let content = [];
  for (let item in contacts) {
    content.push(
      <Cards
        name={contacts[item].name}
        avatar={contacts[item].imgURL}
        contact={contacts[item].phone}
        email={contacts[item].email}
      />
    );
  }
  return <div>{content}</div>;
}

export default Contact;
