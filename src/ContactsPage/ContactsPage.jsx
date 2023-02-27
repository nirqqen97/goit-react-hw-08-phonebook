import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './ContactsPage.styled';
import { Form } from '../components/Form/Form';
import { InputFilter } from 'components/InputFilter/InputFilter';
import { selectFilters } from 'redux/Contacts/Contacts.selector';
import { usersSearchAction } from 'redux/Contacts/Contacts.slice';
import { useFetchContactsQuery } from 'redux/rtk-contacts/rtk-contacts.api';

const LazyContacts = lazy(() => import('../components/Contacts/Contacts'));

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useFetchContactsQuery();
  const filter = useSelector(selectFilters);
  const addFilter = (value) => {
    dispatch(usersSearchAction(value));
  };

  return (
    <>
      <Form />
      <Title>Contacts</Title>
      <InputFilter onInput={addFilter} value={filter} />
      {isLoading && <Title>Loading...</Title>}
      {isSuccess && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyContacts />
        </Suspense>
      )}
    </>
  );
};

export default ContactsPage;
