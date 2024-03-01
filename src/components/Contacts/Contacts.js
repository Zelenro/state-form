import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    toast('Phonebook already!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    const itemLocal = localStorage.getItem('contacts');

    const contactsLocal = JSON.parse(itemLocal);
    if (contactsLocal !== null) {
      return setContacts(contactsLocal);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handlerInput = e => {
    const { value } = e.currentTarget;
    setFilter(value);
    return value;
  };

  const addContacts = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const filteringContactsBeforeAdding = name => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}\\b`, 'i');
    return contacts.filter(contact => regex.test(contact.name));
  };

  const searchForContacts = name => {
    if (!Array.isArray(contacts)) {
      console.error('contacts is not an array');
      return [];
    }
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}`, 'i');
    const result = contacts.filter(contact => regex.test(contact.name));
    return result;
  };

  const filterContacts = e => {
    const name = handlerInput(e);
    const arrayFilterContact = searchForContacts(name);
    if (arrayFilterContact.length > 1) {
      return;
    }
    return arrayFilterContact;
  };

  const deleteContact = e => {
    const contactId = e.currentTarget.value;
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handlerSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    const findContact = filteringContactsBeforeAdding(name);
    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    addContacts(name, number);
    resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handlerSubmit={handlerSubmit} />
      <Filter filter={filter} filterContacts={filterContacts} />
      <Phonebook
        contacts={contacts}
        arrayFilterContact={searchForContacts(filter)}
        deleteContact={deleteContact}
      />
      <ToastContainer />
    </>
  );
};

export default Contacts;
