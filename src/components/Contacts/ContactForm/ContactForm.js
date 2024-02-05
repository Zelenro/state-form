import React from 'react';
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

const ContactForm = ({
  state: { name, number },
  handlerInput,
  handlerSubmit,
}) => (
  <>
    <FormContainer>
      <form onSubmit={handlerSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handlerInput}
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="text"
            name="number"
            value={number}
            onChange={handlerInput}
            required
          />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </form>
    </FormContainer>
  </>
);

export default ContactForm;
