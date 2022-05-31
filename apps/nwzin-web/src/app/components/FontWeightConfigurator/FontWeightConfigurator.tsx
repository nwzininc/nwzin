import { Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import {
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlignCenter,
} from 'react-icons/ai';
import React, { FC } from 'react';
import { FontWeightConfiguratorProps, FWIconProps } from './types';

const boxStyles: FlexProps = {
  borderRadius: 2,
  padding: '3px 6px',
};
const selectedStyle: FlexProps = {
  backgroundColor: 'gray.300',
};

const FWIcon: FC<FWIconProps> = ({ weight, isSelected, handleClick }) => {
  const boxProps = isSelected ? { ...boxStyles, ...selectedStyle } : boxStyles;
  return (
    <Flex
      {...boxProps}
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
      justifyContent="center"
    >
      <Heading
        fontFamily="heading"
        fontSize="sm"
        fontWeight={weight}
        cursor="pointer"
      >
        Ag
      </Heading>
    </Flex>
  );
};

const FontWeightConfigurator: FC<FontWeightConfiguratorProps> = ({
  value,
  onChange,
}) => {
  const handleClick = (value: string) => () => {
    onChange({
      target: {
        value: value,
      },
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
        Thickness
      </Flex>
      <Flex>
      <FWIcon
        handleClick={handleClick('light')}
        isSelected={value === 'light'}
        weight="light"
      />
      <FWIcon
        handleClick={handleClick('normal')}
        isSelected={value === 'normal'}
        weight="normal"
      />
      <FWIcon
        handleClick={handleClick('medium')}
        isSelected={value === 'medium'}
        weight="medium"
      />
      <FWIcon
        handleClick={handleClick('semibold')}
        isSelected={value === 'semibold'}
        weight="semibold"
      />
      <FWIcon
        handleClick={handleClick('bold')}
        isSelected={value === 'bold'}
        weight="bold"
      />
      </Flex>
    </Flex>
  );
};

export default FontWeightConfigurator;
