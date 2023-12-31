import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { selectFilter } from 'redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

import { Text } from '@chakra-ui/react';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader/Loader';

import { getVisibleContacts } from 'helpers/contactUtils';

function Contacts() {
  const {
    refetch,
    data: contacts = [],
    isFetching: isLoading,
    isLoading: isFirstLoading,
  } = useFetchContactsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const filter = useSelector(selectFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div className="container">
      <div className="section">
        {isLoading && <Loader />}

        <Text fontSize="18px" fontWeight="700" color="#007ab8">
          Create Contact
        </Text>
        <ContactForm />
      </div>
      <div className="section">
        <Text fontSize="18px" fontWeight="700" color="#007ab8">
          Search Сontact
        </Text>
        <Filter />
        <Text fontSize="18px" fontWeight="700" color="#007ab8" mb="16px">
          My Сontacts
        </Text>
        {visibleContacts.length && !isFirstLoading ? (
          <ContactList contacts={visibleContacts} />
        ) : (
          <Text color="red" fontSize="lg" mt="1">
            Contact not found!
          </Text>
        )}
      </div>
    </div>
  );
}

export default Contacts;
