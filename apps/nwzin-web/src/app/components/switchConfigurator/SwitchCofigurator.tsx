import { Flex, Switch } from '@chakra-ui/react';
import React, { ChangeEvent, FC } from 'react';
import { SwitchCofiguratorProps } from './types';

const SwitchCofigurator: FC<SwitchCofiguratorProps> = ({ value, label, onChange }) => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
       ...event,
       target: {
         ...event.target,
         value: event.target.checked
       }
    });
  };
  return (
    <Flex
      width="max-content"
      border="1px solid transparent"
      alignItems="center"
      padding="3px"
      borderRadius="4px"
      cursor="pointer"
      _hover={{
        borderColor: '#000',
      }}
      gap="10px"
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        height={'30px'}
        alignItems="center"
      >
        { label }
      </Flex>
      <Flex>
        <Switch colorScheme='teal' isFocusable={false} size='md' isChecked={value} onChange={handleClick} _focus={{ boxShadow: "0px"}} />
      </Flex>
    </Flex>
  );
};

export default SwitchCofigurator;
