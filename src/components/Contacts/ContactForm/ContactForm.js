import React, { Component } from 'react';
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  render() {
    const { handlerInput, handlerSubmit } = this.props;
    return (
      <>
        <FormContainer>
          <form onSubmit={handlerSubmit}>
            <FormLabel>
              Name
              <FormInput
                type="text"
                name="name"
                value={this.state.name}
                onChange={handlerInput}
                required
              />
            </FormLabel>
            <FormLabel>
              Number
              <FormInput
                type="text"
                name="number"
                value={this.state.number}
                onChange={handlerInput}
                required
              />
            </FormLabel>

            <FormButton type="submit">Add contact</FormButton>
          </form>
        </FormContainer>
      </>
    );
  }
}

export default ContactForm;
