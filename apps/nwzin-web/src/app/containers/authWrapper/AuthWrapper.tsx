/* eslint-disable react/jsx-no-useless-fragment */
import { useAppSelector } from '../../../store';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthWrapperProps } from './types';
import { useDispatch } from 'react-redux';
import { authCheckService } from './service';
import { Flex, Spinner } from '@chakra-ui/react';

export const AuthWrapper: FC<AuthWrapperProps> = ({
  children,
  isLoginPage,
  authProtected,
  authRole,
}) => {
  const state = useAppSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(authCheckService())
  },[]);

  const authStateFullFilled = state.authAPIstatus === "fulfilled"
  const shouldRenderChildren =
    authProtected && authRole === state?.currentUser?.role && state?.isLoggedIn && authStateFullFilled;
  const shouldRenderLoginPage = isLoginPage && !state?.isLoggedIn && authStateFullFilled;
  if (state?.isLoggedIn && isLoginPage) {
    navigate('/');
  }
  if(!isLoginPage && !state.isLoggedIn && authStateFullFilled){
    navigate('/login');
  }
  if (shouldRenderChildren || shouldRenderLoginPage) {
    return <>{children}</>;
  }
  return (
    <Flex width="100%" height="100vh" justifyContent="center" alignItems="center"> 
        {!authStateFullFilled && <Spinner size="xl" thickness="3px" colorScheme="twitter" />}
    </Flex>
  );
};

export default AuthWrapper;
