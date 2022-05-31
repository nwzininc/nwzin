import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Root from '../root';
import { WebDesignerProps } from './types';

const WebDesigner:FC<WebDesignerProps> = () => {
    return(
        <Flex width="calc(100% - 600px)" bg="whitesmoke" height="calc(100% - 76px)" marginBottom="76px" overflow="auto">
            <Root />
        </Flex> 
    )
};

export default WebDesigner;