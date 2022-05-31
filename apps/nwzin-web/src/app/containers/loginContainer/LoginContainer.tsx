import { Flex } from '@chakra-ui/react';
import { useAppDispatch } from '../../../store';
import React, { FC } from 'react';
import LoginForm from './components/loginForm';
import { LoginContainerProps } from './types';
import { LoginPayload } from './components/loginForm/types';
import { loginService } from '../authWrapper';

const LoginContainer:FC<LoginContainerProps> = (props) => {
    const dispatch = useAppDispatch();
    const handleLoginSubmit = (payload: LoginPayload) => {
        dispatch(loginService(payload))
    };

    return(
        <Flex height="calc(100vh)" width="100%" justifyContent="center">
            <Flex height="max-content" borderRadius="base" marginTop="100px"  maxWidth="600px" width="100%">
              <LoginForm handleLoginSubmit={handleLoginSubmit} {...props} />
            </Flex>
        </Flex>
    )
};

export default LoginContainer;