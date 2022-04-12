import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CreateAppsContentProps } from './types';

const CreateAppsContent:FC<CreateAppsContentProps> = () => {
    return(
        <Flex bg="white" height="max-content" padding={['20px 30px', '60px 250px', '60px 350px']} flexDirection="column" gap={["10","10"]}>
            <Heading color="primary" maxWidth={["100%", "70%"]} fontFamily="heading" fontSize={["2xl","4xl"]} fontWeight="bold">
                Customize Mobile and Web Apps without coding
            </Heading>
            <Text fontFamily="heading" fontSize={["small","xl"]} fontWeight="bold">
              Use our Application designer to develop apps and connect with our powerful data stores. 
            </Text>
            <Image src="/assets/images/apps.png" width={["100%","90%"]} height="auto" objectFit="fill" alt="Apps Image"/>
        </Flex>
    )
};

export default CreateAppsContent;