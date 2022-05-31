import {Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import GroupListing from './components/groupListing';
import { GroupsContainerProps } from './types';

const GroupsContainer:FC<GroupsContainerProps> = () => {
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
            <GroupListing />
        </Flex>
    )
};

export default GroupsContainer;