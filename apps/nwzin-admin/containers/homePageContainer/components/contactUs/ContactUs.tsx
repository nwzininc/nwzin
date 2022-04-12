import { Button, Flex, Heading, Image, Input, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ContactUsProps } from './types';

const ContactUs:FC<ContactUsProps> = () => {
    return(
        <Flex id="contact" bg="white" height={["400px","600px"]} padding={['20px 30px', '60px 250px', '60px 350px']}  gap="15">
            <Flex flex="1" flexDirection="column" gap="10">
                <Heading fontSize={["xl","2xl"]} color="primary" maxWidth={["100%","70%"]} fontFamily="heading" fontWeight="bold">
                Contact Us
                </Heading>
                <Stack spacing={35} width="100%">
                    <Input placeholder='your name' size='lg' borderColor='primary'/>
                    <Input placeholder='you@gmail.com' size='lg' borderColor='primary' />
                    <Button bg="primary" color="white" width="max-content" size="lg"> Submit </Button>
                </Stack>
              </Flex>
              <Flex flex={[0, 1]} justifyContent="flex-end" alignItems="flex-start">
                <Image src="/assets/images/contactus.png"  alt="projection" width="400px" height="auto" objectFit="fill"/>
              </Flex>
        </Flex>
    )
};
export default ContactUs;