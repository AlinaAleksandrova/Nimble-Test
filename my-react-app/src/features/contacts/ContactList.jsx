import React from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from './contactsAPI';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <div className="row">
        {contacts.map(contact => (
          <div key={contact.id} className="col-md-4">
            <ContactCard contact={contact} onDelete={deleteContact} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
