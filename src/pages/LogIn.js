import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/Auth/operationsAuth';

import { EmailIcon, UnlockIcon, ArrowForwardIcon } from '@chakra-ui/icons';
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

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuthSelector = state => state.auth.isLoggedIn;
  const isAuth = useSelector(isAuthSelector);

  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const dataLogIn = { email, password };

    dispatch(logIn(dataLogIn));

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    isAuth && navigate('/');
    isAuth && toast.success('Welcome to the Phonebook!');
  }, [isAuth, navigate]);

  return (
    <div className="container">
      <div className="section">
        <Flex align="center" justify="center">
          <form onSubmit={handleSubmit}>
            <FormControl
              width="400px"
              p="20px"
              mt="20px"
              border="1px"
              borderRadius="15px"
              borderColor="gray.200"
              boxShadow="lg"
              bg="white"
            >
              <FormLabel textAlign="center" fontWeight="700" mr="0" mb="20px">
                LOGIN
              </FormLabel>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  variant="outline"
                  placeholder="Enter your email"
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
                  placeholder="Enter password"
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
                marginRight="15px"
              >
                Log In
              </Button>
              <Link to="/register">Register</Link>
            </FormControl>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default LogIn;
