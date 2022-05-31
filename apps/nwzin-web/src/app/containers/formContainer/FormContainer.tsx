import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import FormListing from './components/FormListing';
import {  FormContainerProps } from './types';

const FormContainer:FC<FormContainerProps> = () => {
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
           <FormListing />
        </Flex>
    )
};

export default FormContainer;