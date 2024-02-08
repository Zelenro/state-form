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
  };

  handlerInput = e => {
    const { name, value } = e.currentTarget;
    console.log([name], value);
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

  handlerSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    if (!name || !number) {
      console.log('No name or number');
      return;
    }
    const findContact = this.filteringContactsBeforeAdding(name);

    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    this.addContacts(name, number);
    this.reset();
  };

  deleteContact = e => {
    const contactId = e.currentTarget.value;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handlerInput={this.handlerInput}
          handlerSubmit={this.handlerSubmit}
        />
        <Phonebook
          state={this.state}
          filterContacts={this.filterContacts}
          arrayFilterContact={this.searchForContacts(this.state.filter)}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default Contacts;
