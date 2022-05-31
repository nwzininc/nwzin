import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import WebDesigner from './components/webDesigner';
import { FormDesignerProps } from './types';

const FormDesigner:FC<FormDesignerProps> = () => {
    return(
        <Flex bg="whitesmoke" alignItems="center" justifyContent="center" height="calc(100vh - 60px)" width="100%" marginTop="60px">
          <WebDesigner />
        </Flex>
    )
};

export default FormDesigner;