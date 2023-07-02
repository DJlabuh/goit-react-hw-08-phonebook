import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerAuth } from 'redux/Auth/operationsAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  EditIcon,
  EmailIcon,
  UnlockIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';
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
import { useDispatch } from 'react-redux';

function SignUp() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => setShow(!show);

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const userdata = { name, email, password };
    
    dispatch(registerAuth(userdata));
    toast.success(`Registration user ${name} successful! Please Log In.`);
    navigate('/login');
  } catch (error) {
    console.log(error.response.status);
    if (error.response && error.response.status === 400) {
        toast.error('Invalid request. Please check your input.');
      } else if (error.response && error.response.status === 409) {
        toast.error('User already exists. Please choose a different email.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
  }

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
                marginRight="15px"
              >
                REGISTER
              </Button>
              <Link to="/login">Log In</Link>
            </FormControl>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default SignUp;
