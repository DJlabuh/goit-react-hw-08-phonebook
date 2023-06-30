import React, { useState } from 'react';
import { EditIcon, EmailIcon, UnlockIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';

function SignUp() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);

  const handleSubmit = event => {
    event.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="section">
        <Flex align="center" justify="center">
          <form onSubmit={handleSubmit}>
            <FormControl
              width="500px"
              p="20px"
              mt="20px"
              border="1px"
              borderRadius="15px"
              borderColor="gray.200"
              boxShadow="lg"
              bg="white"
            >
              <FormLabel textAlign="center" fontWeight="700" mr="0" mb="20px">
                REGISTER
              </FormLabel>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <EditIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="name"
                  name="name"
                  value={name}
                  variant="outline"
                  placeholder="Your name"
                  size="md"
                  mb="10px"
                  onChange={e => setName(e.target.value)}
                  required
                />
              </InputGroup>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  variant="outline"
                  placeholder="Your email"
                  size="md"
                  mb="10px"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </InputGroup>
              <InputGroup size="md" mb="20px">
                <InputLeftElement pointerEvents="none">
                  <UnlockIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  name="password"
                  variant="outline"
                  placeholder="Your password"
                  size="md"
                  mb="10px"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement width="5rem">
                  <Button h="1.2rem" size="xs" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                type="submit"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="telegram"
                variant="outline"
              >
                REGISTER
              </Button>
            </FormControl>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default SignUp;
