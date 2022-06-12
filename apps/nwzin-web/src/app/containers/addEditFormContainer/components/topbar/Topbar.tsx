import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import PageList from './PageList';
import SavePublish from './SavePublish';
import { TopbarProps } from './types';

const Topbar: FC<TopbarProps> = () => {
  return (
    <Flex
      bg="whitesmoke"
      width="100%"
      alignItems="center"
      gap="20px"
      justifyContent="center"
      height="60px"
      position="fixed"
      top="0px"
      left="0px"
      boxShadow="lg"
    >
        <PageList />
        <SavePublish />
    </Flex>
  );
};

export default Topbar;
