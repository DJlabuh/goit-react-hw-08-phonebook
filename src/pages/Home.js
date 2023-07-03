import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="container">
      <div className="section">
        <Heading as="h1" color="#007ab8" fontSize="26px" mt="25px" mb="25px">
          Welcome to the Contact Management App
        </Heading>
        <Text mb="14px" fontSize="20px">
          This is the home page of the contact management app.
        </Text>
        <Text mb="14px" fontSize="20px">
          You can use this app to store and manage your contacts.
        </Text>
        <Text as="mark" fontSize="20px">
          To get started, you can:
        </Text>
        <List mt="10px" color="#007ab8" fontSize="20px">
          <ListItem mb="px">
            <ListIcon as={MdCheckCircle} color="#007ab8" />
            <Link to="/register">Register</Link>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#007ab8" />
            <Link to="/login">Log In</Link>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default HomePage;
