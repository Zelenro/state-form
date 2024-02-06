import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Phonebook from './Phonebook/Phonebook';

class Contacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlerInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    return value;
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addContacts = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  findContactInState = name => {
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}`, 'i');
    return this.state.contacts.filter(contact => regex.test(contact.name));
  };

  filterContacts = event => {
    const findContact = this.listContacts(event);
    this.setState({ findContact });
  };

  listContacts = event => {
    const name = this.handlerInput(event);
    const findContact = this.findContactInState(name);
    if (!findContact) {
      return;
    }
    return findContact;
  };

  handlerSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      console.log('No name or number');
      return;
    }
    const findContact = this.findContactInState(name);
    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    this.addContacts(name, number);
    this.reset();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          state={this.state}
          handlerInput={this.handlerInput}
          handlerSubmit={this.handlerSubmit}
        />
        <Phonebook
          state={this.state}
          filterContacts={this.filterContacts}
          findContact={this.findContactInState}
        />
      </>
    );
  }
}

export default Contacts;
