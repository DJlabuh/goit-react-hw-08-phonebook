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
  const [addContacts] = useAddContactsMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addContacts({ name, phone });
      toast.success('Contact added successfully');
      setName('');
      setPhone('');
    } catch (error) {
      toast.error('Failed to add contact');
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
          value={phone}
          onChange={e => setPhone(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}
            </li>
          ))}
        </ul>
      )}
      <FormButton type="submit">Add contact</FormButton>
    </FormContact>
  );
};
