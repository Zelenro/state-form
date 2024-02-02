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

  handlerSubmit = event => {
    event.preventDefault();

    const { name, number } = event.currentTarget.elements;
    console.log(name.value);
    console.log(number.value);

    // const { name } = this.state;
    // console.log('State name:', name);
    // this.setState(prevState + newState);

    // const formData = new FormData(event.target);
    // const name = formData.get('name');
    // console.log('Name:', name);

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
