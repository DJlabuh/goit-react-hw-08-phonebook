import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  useAddContactsMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import { FormControl, Input, Button, Text } from '@chakra-ui/react';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const contactSchema = object({
  name: string()
    .min(6, 'Name must be at least 6 digits!')
    .required('Name is required!'),
  number: string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const { data: contacts = [] } = useFetchContactsQuery();
  const [addContact, { isError, isFetching, isSuccess }] =
    useAddContactsMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const isDuplicateNumber = contacts.some(
      contact => contact.number === values.number
    );
    if (isDuplicateName) {
      toast.error(`Contact with this "${values.name}" already exists!`);
      return;
    }
    if (isDuplicateNumber) {
      toast.error(`Contact with this "${values.number}" already exists!`);
      return;
    }
    try {
      await addContact(values).unwrap();
      toast.info('Contact added successfully!');
      resetForm();
    } catch (error) {
      toast.error('Failed to add contact. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <FormControl
            width="360px"
            p="20px"
            mt="14px"
            border="1px"
            borderRadius="15px"
            borderColor="gray.200"
            boxShadow="lg"
            bg="white"
          >
            <Field
              as={Input}
              type="text"
              name="name"
              variant="outline"
              placeholder="Enter name"
              size="md"
              title="Please enter a name contact"
            />
            <ErrorMessage
              name="name"
              component={({ children }) => (
                <Text color="red" fontSize="sm" mt="1">
                  {children}
                </Text>
              )}
            />
            <Field
              as={Input}
              type="tel"
              name="number"
              placeholder="Enter phone"
              size="md"
              mt="12px"
              title="Please enter a phone number in the format (123) 456-7890"
            />
            <Text fontSize="sm" color="gray.500" mt="2">
              Example: (123) 456-7890
            </Text>
            <ErrorMessage
              name="number"
              component={({ children }) => (
                <Text color="red" fontSize="sm" mt="1">
                  {children}
                </Text>
              )}
            />
            <Button
              type="submit"
              colorScheme="telegram"
              variant="outline"
              mt="20px"
              isLoading={isSubmitting || isFetching}
              loadingText="Contact added"
              spinnerPlacement="end"
              disabled={isSuccess || isError}
            >
              Add contact
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};
