import React, { Component } from 'react';
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
    this.setState({ name: '' });
  };

  handlerSubmit = event => {
    event.preventDefault();
    const what = event.currentTarget;
    // this.onSubmit(this.state);
    console.log(what);
    this.reset();
  };

  render() {
    return (
      <>
        <h1>Phone book</h1>
        <ContactForm
          state={this.state}
          handlerInput={this.handlerInput}
          handlerSubmit={this.handlerSubmit}
        />
        <Phonebook value={this.value} />
      </>
    );
  }
}

export default Contacts;
