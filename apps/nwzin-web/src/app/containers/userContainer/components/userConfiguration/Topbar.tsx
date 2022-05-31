import { Avatar, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TopbarProps } from './types';

const Topbar:FC<TopbarProps> = () => {
    return(
        <Flex bg="primary" height="1">
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Flex>
    )
};

export default Topbar;