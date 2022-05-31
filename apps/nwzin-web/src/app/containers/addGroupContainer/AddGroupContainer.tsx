import {Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Params, useParams } from 'react-router-dom';
import AddEditGroup from './components/addEditGroup';
import { GroupsContainerProps } from './types';

const AddGroupContainer:FC<GroupsContainerProps> = () => {
  const params = useParams<Params<"groupId">>();
  const isEdit = params.groupId ? true : false;
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
            <AddEditGroup isEdit={isEdit} groupId={params?.groupId} />
        </Flex>
    )
};

export default AddGroupContainer;