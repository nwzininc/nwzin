import { Flex, Select } from '@chakra-ui/react';
import React, { FC } from 'react';
import { SizeConfiguratorProps } from './types';

const SizeConfigurator: FC<SizeConfiguratorProps> = ({ value, onChange }) => {
  return (
      <Flex
      width="max-content"
      border="1px solid transparent"
      alignItems="baseline"
      padding="3px"
      borderRadius="4px"
      _hover={{
        borderColor: '#000',
      }}
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        width={'60px'}
        height={'30px'}
        alignItems="center"
      >
        Size
      </Flex>
      <Select width="max-content" variant="unstyled" iconColor="white" size="xs" value={value} onChange={onChange}>
        <option style={{ backgroundColor: "black", color: "white"}} value="xs">Extra Small</option>
        <option value="md">Medium</option>
        <option value="sm">Small</option>
        <option value="lg">Large</option>
        <option value="4xl">4XL</option>
        <option value="3xl">3XL</option>
        <option value="2xl">2XL</option>
        <option value="xl">XL</option>
      </Select>
    </Flex>
  );
};

export default SizeConfigurator;
