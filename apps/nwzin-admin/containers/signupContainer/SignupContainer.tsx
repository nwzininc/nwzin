import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Topbar from '../../components/topbar';
import SignUpForm from './components/signupForm';
import { SignupContainerProps } from './types';

const SignupContainer: FC<SignupContainerProps> = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Topbar />
      <SignUpForm />
    </Flex>
  );
};

export default SignupContainer;
