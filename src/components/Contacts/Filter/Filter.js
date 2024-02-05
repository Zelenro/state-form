import React from 'react';
import {
  ContactItem,
  ContactList,
  ContactsList,
  FormButton,
} from './Phonebook.styled';

const Phonebook = ({ state: { findContact }, filterContacts }) => {
  return (
    <ContactsList>
      <h3>My contacts</h3>
      <label>
        Find contact
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterContacts}
        />
      </label>
      <ContactList>
        findContact.map(contact => (
        <ContactItem key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <FormButton type="submit">Delete contact</FormButton>
        </ContactItem>
        ))
      </ContactList>
    </ContactsList>
  );
};

export default Phonebook;
