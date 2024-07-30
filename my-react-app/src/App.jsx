import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './features/contacts/ContactList';
import CreateContact from './features/contacts/CreateContact';
import ContactDetail from './features/contacts/ContactDetail';

const App = () => {
  return (
    <Router>
      <div className="container">
        <CreateContact />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

