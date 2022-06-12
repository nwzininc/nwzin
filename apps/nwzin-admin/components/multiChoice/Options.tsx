import React, { FC } from 'react';
import { MdCheck } from 'react-icons/md';
import { AlphabetMapper } from './constants';
import { OptionProps } from './types';
import { Flex, Text } from '@chakra-ui/react';

const Option: FC<OptionProps> = ({
  isSelected,
  label,
  handleClick,
  index,
  color,
  negatedColor
}) => {
  const order = AlphabetMapper[index];
  return (
    <Flex alignItems="center" cursor="pointer" onClick={handleClick}>
      <Flex
        width="100%"
        minWidth="364px"
        alignItems="center"
        border={`1px solid ${color}`}
        padding="8px 12px"
        borderRadius="8px"
        maxWidth="364px"
      >
        <Flex
          height="26px"
          width="26px"
          minWidth="26px"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${color}`}
          boxShadow="base"
          backgroundColor={isSelected ? color : 'transperent'}
        >
          <Text
            fontSize="md"
            fontFamily="heading"
            color={isSelected ? '#fff' : color}
          >
            {order}
          </Text>
        </Flex>
        <Text
          width="100%"
          paddingLeft="10px"
          color={color}
        >
          {label}
        </Text>
        <Flex
          height="26px"
          width="26px"
          minWidth="26px"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${color}`}
          boxShadow="base"
          backgroundColor={isSelected ? color : 'negatedColor'}
        >
          {isSelected && <MdCheck color={negatedColor} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Option;
