import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

class Contacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerInput = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    return value;
  };

  addContacts = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filteringContactsBeforeAdding = name => {
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}\\b`, 'i');
    return this.state.contacts.filter(contact => regex.test(contact.name));
  };

  searchForContacts = name => {
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}`, 'i');
    return this.state.contacts.filter(contact => regex.test(contact.name));
  };

  filterContacts = e => {
    const name = this.handlerInput(e);
    const arrayFilterContact = this.searchForContacts(name);
    if (arrayFilterContact.length > 1) {
      return;
    }
    return arrayFilterContact;
  };

  deleteContact = e => {
    const contactId = e.currentTarget.value;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handlerSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    const findContact = this.filteringContactsBeforeAdding(name);
    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    this.addContacts(name, number);
    resetForm();
  };

  render() {
    // console.log(`Re render ${Date.now()}`);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handlerSubmit={this.handlerSubmit} />
        <Filter state={this.state} filterContacts={this.filterContacts} />
        <Phonebook
          state={this.state}
          arrayFilterContact={this.searchForContacts(this.state.filter)}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default Contacts;
