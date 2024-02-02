import React from 'react';

const ContactForm = ({
  state: { name, number },
  handlerInput,
  handlerSubmit,
}) => (
  <>
    <form onSubmit={handlerSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handlerInput}
          required
        />
      </label>
      <label>
        Name
        <input
          type="text"
          name="number"
          value={number}
          onChange={handlerInput}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  </>
);

export default ContactForm;
