import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useDeleteContactsMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RiDeleteBinLine } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';
import { ContactsUl, ContactsLi, ContactsText } from './ContactList.styled.jsx';

import { getVisibleContacts } from 'helpers/contactUtils';

export const ContactList = () => {
  const [deleteContact] = useDeleteContactsMutation();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.info('Contact deleted successfully!');
  };

  return (
    <ContactsUl>
      {visibleContacts.map(({ name, phone, id }, index) => (
        <ContactsLi key={id} dark={index % 2 === 0}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{phone}</ContactsText>
          <Button
            colorScheme="telegram"
            size="sm"
            onClick={() => handleDeleteContact(id)}
          >
            <RiDeleteBinLine />
          </Button>
        </ContactsLi>
      ))}
    </ContactsUl>
  );
};
