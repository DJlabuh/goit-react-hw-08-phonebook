import { Heading } from '@chakra-ui/react';

import React from 'react';

export const Error = () => {
  return (
    <div className="container">
      <div className="section">
        <Heading as="h1" mb="25px" color="#007ab8">
          404 - Page Not Found
        </Heading>
        <p>Sorry, the page you requested could not be found.</p>
      </div>
    </div>
  );
};
