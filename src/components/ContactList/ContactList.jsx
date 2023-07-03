import { useDeleteContactsMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RiDeleteBinLine } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';
import { ContactsUl, ContactsLi, ContactsText } from './ContactList.styled.jsx';

export const ContactList = ({ contacts }) => {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  const handleDeleteContact = contactId => {
    deleteContact(contactId);
    toast.info('Contact deleted successfully!');
  };

  return (
    <ContactsUl>
      {contacts.map(({ name, number, id }, index) => (
        <ContactsLi key={id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{number}</ContactsText>
          <Button
            colorScheme="telegram"
            size="sm"
            onClick={() => handleDeleteContact(id)}
            disabled={isLoading}
          >
            <RiDeleteBinLine />
          </Button>
        </ContactsLi>
      ))}
    </ContactsUl>
  );
};
