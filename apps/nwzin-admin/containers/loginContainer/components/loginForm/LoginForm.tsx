/* eslint-disable react/no-unescaped-entities */
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import Link from 'next/link';
import * as yup from 'yup';
import React, { FC } from 'react';
import { LoginFormProps } from './types';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';
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

const LoginForm: FC<LoginFormProps> = () => {
  const handleLoginSubmit = (payload) => {
    console.log(payload, 'Payload');
  };
  return (
    <Flex
      padding={["10px","50px"]}
      width={["90%","600px"]}
      height="calc(100vh - 30%)"
      borderRadius="30px"
      flexDirection="column"
      alignItems="center"
      gap="10px"
    >
      <Text fontSize={["4xl","7xl"]} fontWeight="extrabold" fontFamily="heading" textAlign="center">
        Log In
      </Text>
      <Text fontSize="xl" fontWeight="bold" fontFamily="heading" textAlign="center">
        Don't have an account?
        <Link href="/signup">
          <Button variant="link" size="lg" marginLeft="10px" color="secondary">
            Sign Up
          </Button>
        </Link>
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
        <Button
          backgroundColor="secondary"
          type="submit"
          size="lg"
          variant="outline"
          color="white"
          fontFamily="heading"
        >
          Log In
        </Button>
      </Form>
    </Flex>
  );
};

export default LoginForm;
