import { Flex, useToast } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import Topbar from '../../components/topbar';
import SetupService from './components/setupService';
import SignUpForm from './components/signupForm';
import { useRouter } from 'next/router'
import { SignupContainerProps, SignUpPayload, SetUpPayload } from './types';

const SignupContainer: FC<SignupContainerProps> = () => {
  const toast = useToast();
  const router = useRouter()
  const [signupState, setSignupState] = useState<SignUpPayload>(null);

   const handleSetupService = (_payload: SetUpPayload) => {
    toast(
      {
        title: 'Registered',
        description: 'Successfully registered with us',
        status: "success",
        duration: 1000,
        isClosable: true,
      }
    )
    setTimeout(()=>{
      router.push('/')
    }, 2000)
   }

  const handleSignup = (payload: SignUpPayload) => {
    setSignupState(payload);
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Topbar isLoggedIn showLogout={false} />
      {!signupState && <SignUpForm handleSignup={handleSignup} />}
      {signupState && <SetupService handleSetupService={handleSetupService} />}
    </Flex>
  );
};

export default SignupContainer;
