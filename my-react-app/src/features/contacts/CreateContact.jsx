import React, { useState } from 'react';
import { useCreateContactMutation } from './contactsAPI';

const CreateContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName && !lastName) return alert('Please fill at least first name or last name');
    if (email && !/\S+@\S+\.\S+/.test(email)) return alert('Invalid email');

    const contact = {
      'first name': [{ value: firstName, modifier: '', label: 'first name' }],
      'last name': [{ value: lastName, modifier: '', label: 'last name' }],
      'email': [{ value: email, modifier: '', label: 'email' }],
      record_type: 'person',
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
    };

    await createContact(contact);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="sticky-top p-3 bg-light">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>Create Contact</button>
    </form>
  );
};

export default CreateContact;
