import {Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Params, useParams } from 'react-router-dom';
import AddEditDataStore from './components/addEditDataStore';
import { AddDataStoreContainerProps } from './types';

const AddDataStoreContainer:FC<AddDataStoreContainerProps> = () => {
  const params = useParams<Params<"dataStoreId">>();
  const isEdit = params.dataStoreId ? true : false;
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
            <AddEditDataStore isEdit={isEdit} dataStoreId={params?.dataStoreId} />
        </Flex>
    )
};

export default AddDataStoreContainer;