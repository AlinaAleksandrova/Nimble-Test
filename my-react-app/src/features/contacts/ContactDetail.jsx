import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetContactDetailQuery , useAddTagsToContactMutation } from './contactsAPI';

const ContactDetail = () => {
  const { id } = useParams();
  const { data: contact, error, isLoading } = useGetContactDetailQuery(id);
  const [tags, setTags] = useState('');
  const [addTagsToContact] = useAddTagsToContactMutation();

  const handleAddTags = async () => {
    const newTags = tags.split(',').map(tag => tag.trim());
    await addTagsToContact({ id, tags: newTags });
    setTags('');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
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
        </div>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button onClick={handleAddTags} className="btn btn-primary mt-2">Add Tags</button>
      </div>
    </div>
  );
};

export default ContactDetail;
