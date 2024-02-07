import React from 'react';
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { Formik } from 'formik';

const ContactForm = ({
  name = '',
  number = '',
  handlerInput,
  handlerSubmit,
}) => {
  return (
    <>
      <Formik onSubmit={handlerSubmit}>
        <FormContainer>
          <form autoComplete="off" onSubmit={handlerSubmit}>
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
      </Formik>
    </>
  );
};

export default ContactForm;
