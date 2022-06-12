import { Text, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import WebDesigner from './components/webDesigner';
import { useAppSelector, useAppDispatch } from './../../../../../store';
import { FormDesignerProps, Mode, ModeSwitcherProps } from './types';
import { updateMode } from '../../reducer';

const ModeSwitcher: FC<ModeSwitcherProps> = () => {
  const mode = useAppSelector((state)=> state.currentFormState.currentMode);
  const dispatch = useAppDispatch()
  const handleChangeMode = (currentMode: Mode) => () => {
    dispatch(updateMode(currentMode))
  };
  return (
    <Flex
      position="fixed"
      alignItems="center"
      justifyContent="center"
      top="70px"
      width="160px"
      left="calc(50% - 80px)"
      borderRadius="8px"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="lg"
      zIndex={1000}
    >
      <Text
        width="100%"
        textAlign="center"
        padding="8px"
        onClick={handleChangeMode('Desktop')}
        cursor="pointer"
        backgroundColor={mode === 'Desktop' ? 'gray.300' : 'transparent'}
        fontFamily="heading"
        fontSize="md"
        userSelect="none"
      >
        Desktop
      </Text>
      <Text
        padding="8px"
        textAlign="center"
        width="100%"
        cursor="pointer"
        fontFamily="heading"
        onClick={handleChangeMode('Mobile')}
        fontSize="md"
        userSelect="none"
        backgroundColor={mode === 'Mobile' ? 'gray.300' : 'transparent'}
      >
        Mobile
      </Text>
    </Flex>
  );
};
const FormDesigner: FC<FormDesignerProps> = () => {
  return (
    <Flex
      bg="whitesmoke"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 120px)"
      width="100%"
      marginTop="120px"
    >
      <WebDesigner />
      <ModeSwitcher />
    </Flex>
  );
};

export default FormDesigner;
