import React from 'react';

const ContactCard = ({ contact, onDelete }) => (
  <div className="card">
    <img src={contact.avatar} alt="Avatar" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{contact.first_name} {contact.last_name}</h5>
      <p className="card-text">{contact.email}</p>
      <p className="card-text">
        {contact.tags.map(tag => (
          <span key={tag} className="badge badge-secondary">{tag}</span>
        ))}
      </p>
      <button onClick={() => onDelete(contact.id)} className="btn btn-danger">Delete</button>
    </div>
  </div>
);

export default ContactCard;
