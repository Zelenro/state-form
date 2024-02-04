import React from 'react';
import { ContactItem, ContactList, ContactsList } from './Phonebook.styled';

const Phonebook = ({ contacts }) => (
  <ContactsList>
    <h3>My contacts</h3>
    <ContactList>
      {contacts &&
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button type="submit">Delete contact</button>
          </ContactItem>
        ))}
    </ContactList>
  </ContactsList>
);

export default Phonebook;
