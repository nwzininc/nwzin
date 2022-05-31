/* eslint-disable react/no-unescaped-entities */
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import _head from 'lodash/head';
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import * as yup from 'yup';
import React, { FC } from 'react';
import { LoginFormProps } from './types';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../../../../store';
YupPassword(yup);

const schema = yupResolver(
  yup.object({
    email: yup.string().email().max(32).required(),
    password: yup
      .string()
      .password()
      .min(8)
      .minLowercase(1)
      .minUppercase(1)
      .minSymbols(1)
      .minNumbers(1)
      .max(32)
      .required(),
  })
);

const LoginForm: FC<LoginFormProps> = ({ logoUrl, isBasicAuthAllowed, isGoogleAuthAllowed, isMicroSoftAuthAllowed, handleLoginSubmit }) => {
  const authState = useAppSelector((state)=> state.authState);
   const { message} = _head(authState.error) || {}
  return (
    <Flex
      padding={["20px 0px","20px"]}
      borderRadius="30px"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap="10px"
    >
      {logoUrl && <Image src={logoUrl} width="100px" height="auto" objectFit="contain" />}
     {isBasicAuthAllowed && <>
      <Text fontSize={["2xl","4xl"]} fontWeight="extrabold" fontFamily="heading" textAlign="center">
        Log In
      </Text>
      <Form
        mode="onChange"
        onSubmit={handleLoginSubmit}
        resolver={schema}
        formStyles={{
          gap: '25px',
          marginTop: '20px',
          width: '80%',
          flexDirection: 'column',
        }}
      >
        <FormField
          size="lg"
          width="100%"
          name="email"
          placeholder="Email"
          label=""
        />
        <FormField
          size="lg"
          width="100%"
          name="password"
          placeholder="Password"
          label=""
          type="password"
        />
        <Text fontSize="xl" fontWeight="bold" fontFamily="heading" textAlign="center">
          Forgot Password?
          <Button variant="link" size="lg" marginLeft="10px" color="primary">
            Reset Now
          </Button>
        </Text>
        <Button
          bg="primary"
          type="submit"
          size="lg"
          variant="solid"
          color="white"
          _hover={{
            bg:'primary'
          }}
          _active={{
            bg:'primary'
          }}
          fontFamily="heading"
          isLoading={authState?.serviceStatus === "pending"}
        >
          Log In
        </Button>
        {message && <Text margin="15px 0px" fontFamily="heading" color="red.700"> {message} </Text>}
      </Form> 
      </>
     }
    </Flex>
  );
};

LoginForm.defaultProps = {
  isBasicAuthAllowed: true,
}
export default LoginForm;
