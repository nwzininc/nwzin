import { Button, Flex, Heading, Image, Stack, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import React, { FC } from 'react';
import { ContactUsProps } from './types';

const schema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required(),
});

const ContactUs: FC<ContactUsProps> = () => {
  const toast = useToast();
  const handleSubmit = (payload: any) => {
    console.log(payload, 'Payload');
    toast({
      title: 'Thanks',
      description: "Our Sales Agent will reach you soon",
      status: "success",
      duration: 1000,
      position:"top",
      isClosable: true,
    })
  }
  return (
    <Flex
      id="contact"
      bg="white"
      height={["min-content", "600px"]}
      padding={['20px 30px', '60px 250px', '60px 350px']}
      gap="15"
    >
      <Flex flex="1" flexDirection="column" gap="10">
        <Heading
          fontSize={['xl', '2xl']}
          color="primary"
          maxWidth={['100%', '70%']}
          fontFamily="heading"
          fontWeight="bold"
        >
          Contact Us
        </Heading>
        <Form
          mode="onChange"
          onSubmit={handleSubmit}
          formStyles={{ flexDirection: 'column'}}
          resolver={yupResolver(schema)}
        >
          <Stack spacing={35} width="100%">
            <FormField placeholder="your name" size="lg" borderColor="primary"  name={'name'} label={'Name'} />
            <FormField
              placeholder="you@gmail.com"
              name="email"
              size="lg"
              label="Email"
              borderColor="primary"
            />
            <Button bg="primary" color="white" width="max-content" size="lg" type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      </Flex>
      <Flex flex={[0, 1]} justifyContent="flex-end" alignItems="flex-start">
        <Image
          src="/assets/images/contactus.png"
          alt="projection"
          width="400px"
          height="auto"
          objectFit="fill"
        />
      </Flex>
    </Flex>
  );
};
export default ContactUs;
