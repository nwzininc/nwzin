/* eslint-disable no-unsafe-optional-chaining */
import { Flex, forwardRef, Input } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ValidationInputProps } from './types';

const ValidationInput: FC<ValidationInputProps> = forwardRef(
  ({ onChange, value, label }, ref) => {
    return (
      <Flex
        width="max-content"
        border="1px solid transparent"
        borderRadius="4px"
        cursor="pointer"
        flexDirection="column"
        gap="4px"
      >
        <Flex
          textAlign="left"
          fontSize="sm"
          fontWeight="bold"
          fontFamily="heading"
          height={'30px'}
          alignItems="center"
        >
          {label}
        </Flex>
        <Flex>
          <Input
            variant="outline"
            size="md"
            ref={ref}
            cursor="pointer"
            textAlign="left"
            value={value}
            onChange={onChange}
            width="200px"
            height="40px"
            type="number"
          />
        </Flex>
      </Flex>
    );
  }
);

export default ValidationInput;
