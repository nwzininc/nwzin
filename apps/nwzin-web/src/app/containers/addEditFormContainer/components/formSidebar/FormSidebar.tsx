import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import ComponentBrowser from './components/componentBrowser';
import { FormSidebarProps } from './types';

const FormSidebar:FC<FormSidebarProps> = () => {
    return(
        <Flex boxShadow="2xl" bg="whitesmoke" gap="20px" height="calc(100% - 60px)" width="300px" position="fixed" top="60px" left="0px">
            <ComponentBrowser />
        </Flex>
    )
};

export default FormSidebar;   