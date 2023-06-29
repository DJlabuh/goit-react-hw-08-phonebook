import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts, selectIsLoading } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Container, SectionComponents, Title, WarningText } from './App.styled';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader/Loader';

import { getVisibleContacts } from 'helpers/contactUtils';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div className="container">
      <div className="section">
        <h2>Create contact</h2>
        <ContactForm />
      </div>
      <div className='section'>
        <h2>Сontact search</h2>
        <Filter />
        {isLoading ? (
          <Loader />
        ) : visibleContacts.length ? (
          <ContactList />
        ) : (
          <p>Contact not found!</p>
        )}
      <ToastContainer />
      </div>
    </div>
  );
}

export default Contacts;