import React, { Component } from 'react';

class ContactForm extends Component {
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

  hendlerInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  hendlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name } = this.state;
    console.log(name);
    return (
      <>
        <form onSubmit={this.hendlerSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.hendlerInput}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
