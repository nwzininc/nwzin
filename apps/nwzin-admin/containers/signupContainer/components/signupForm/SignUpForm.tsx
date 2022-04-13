/* eslint-disable react/no-unescaped-entities */
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import Link from 'next/link';
import * as yup from 'yup';
import React, { FC } from 'react';
import { SignUpFormProps } from './types';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';
YupPassword(yup);

const schema = yupResolver(
  yup.object({
    email: yup.string().email().max(32).required(),
    confirmEmail: yup.string()
    .email().oneOf([yup.ref('email'), null], 'Emails must match').required(),
    confirmPassword: yup
    .string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
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

const SignUpForm: FC<SignUpFormProps> = () => {
  const handleSignUpSubmit = (payload) => {
    console.log(payload, 'Payload');
  };
  return (
    <Flex
      padding={["10px","50px"]}
      height="calc(100vh - 30%)"
      borderRadius="30px"
      flexDirection="column"
      alignItems="center"
      width={["90%","600px"]}
      gap="10px"
    >
      <Text fontSize={["4xl","7xl"]} fontWeight="extrabold" fontFamily="heading">
        Sign Up
      </Text>
      <Text fontSize="xl" fontWeight="bold" fontFamily="heading" textAlign="center">
        Already have an account?
        <Link href="/login">
          <Button variant="link" size="lg" marginLeft="10px" color="secondary">
            Log In
          </Button>
        </Link>
      </Text>
      <Form
        mode="onChange"
        onSubmit={handleSignUpSubmit}
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
          name="confirmEmail"
          placeholder="Type Email Again"
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
        <FormField
          size="lg"
          width="100%"
          name="confirmPassword"
          placeholder="ConfirmPassword"
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
          Sign Up
        </Button>
      </Form>
    </Flex>
  );
};

export default SignUpForm;
