import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import {
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlignCenter,
} from 'react-icons/ai';
import React, { FC } from 'react';
import { AlignConfiguratorProps, AlignIconProps } from './types';

const boxStyles: FlexProps = {
  borderRadius: 2,
  padding: '3px 6px',
};
const selectedStyle: FlexProps = {
  backgroundColor: 'gray.300',
};

const AlignIcon: FC<AlignIconProps> = ({
  iconType,
  isSelected,
  handleClick,
}) => {
  const boxProps = isSelected ? { ...boxStyles, ...selectedStyle } : boxStyles;
  return (
    <Flex
      {...boxProps}
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
      justifyContent="center"
    >
      <Icon cursor="pointer" boxSize="15px" as={iconType} />
    </Flex>
  );
};

const AlignConfigurator: FC<AlignConfiguratorProps> = ({ value, onChange }) => {
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
        Align
      </Flex>
      <Flex>
      <AlignIcon
        iconType={AiOutlineAlignLeft}
        handleClick={handleClick('left')}
        key="left"
        isSelected={value === 'left'}
      />
      <AlignIcon
        iconType={AiOutlineAlignCenter}
        key="center"
        handleClick={handleClick('center')}
        isSelected={value === 'center'}
      />
      <AlignIcon
        iconType={AiOutlineAlignRight}
        key="right"
        handleClick={handleClick('right')}
        isSelected={value === 'right'}
      />
      </Flex>
    </Flex>
  );
};

export default AlignConfigurator;
