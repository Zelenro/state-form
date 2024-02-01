import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class Contacts extends Component {
  formSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
      </>
    );
  }
}

export default Contacts;
