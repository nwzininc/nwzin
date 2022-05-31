import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import UserListing from './components/userListing';
import { UserContainerProps } from './types';

const UserContainer:FC<UserContainerProps> = () => {
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
           <UserListing />
        </Flex>
    )
};

export default UserContainer;