import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAddContactsMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import {
  FormContact,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const { data: contacts = [] } = useFetchContactsQuery();
  const [addContact] = useAddContactsMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = contacts.some(
      contact => contact.number === number
    );

    if (isDuplicateName) {
      toast.error(`Contact with this "${name}" already exists!`);
      return;
    }

    if (isDuplicateNumber) {
      toast.error(`Contact with this "${number}" already exists!`);
      return;
    }

    try {
      await addContact({ name, number }).unwrap();
      toast.info('Contact added successfully!');
      setName('');
      setNumber('');
    } catch (error) {
      toast.error('Failed to add contact. Please try again.');
    }
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Telephone
        <FormInput
          type="tel"
          name="phone"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContact>
  );
};
