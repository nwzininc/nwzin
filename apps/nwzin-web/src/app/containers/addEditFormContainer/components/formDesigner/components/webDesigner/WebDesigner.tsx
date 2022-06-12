import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../../../../../../store';
import React, { FC } from 'react';
import Root from '../root';
import { WebDesignerProps } from './types';

const WebDesigner: FC<WebDesignerProps> = () => {
  const mode = useAppSelector((state) => state.currentFormState.currentMode);
  const isDesktop = mode === 'Desktop';
  const widthByMode = isDesktop ? 'calc(100% - 600px)' : '400px';
  return (
    <Flex
      width={widthByMode}
      borderTopRadius={isDesktop ? '0px' : '8px'}
      boxShadow={isDesktop ? 'none' : 'lg'}
      bg="whitesmoke"
      height="calc(100% - 76px)"
      marginBottom="76px"
      overflow="auto"
      marginTop={isDesktop ? "0px" : "2px"}
    >
      <Root />
    </Flex>
  );
};

export default WebDesigner;
