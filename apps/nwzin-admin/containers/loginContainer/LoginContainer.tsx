import {
    Flex,
  } from '@chakra-ui/react';
  import React, { FC } from 'react';
  import Topbar from '../../components/topbar';
import LoginForm from './components/loginForm';
  import { LoginContainerProps } from './types';
  
  const LoginContainer: FC<LoginContainerProps> = () => {
    return (
      <Flex flexDirection="column" width="100%" height="100vh" alignItems="center" justifyContent="center">
        <Topbar />
        <LoginForm />
      </Flex>
    );
  };
  
  export default LoginContainer;
  