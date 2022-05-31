import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { DataStoreContainerProps } from './types';
import DataStoreListing from './components/dataStoreListing';

const DataContainer:FC<DataStoreContainerProps> = () => {
    return(
        <Flex width="100%" bg="whiteAlpha.900" height="100%" padding="24px" overflow="hidden">
           <DataStoreListing />
        </Flex>
    )
};

export default DataContainer;