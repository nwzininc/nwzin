/* eslint-disable no-unsafe-optional-chaining */
import { Flex, forwardRef, Textarea } from '@chakra-ui/react';
import React, { ChangeEvent, FC } from 'react';
import { OptionsConfiguratorProps } from './types';

const OptionsConfigurator: FC<OptionsConfiguratorProps> = forwardRef(
  ({ onChange, value, label }, ref) => {
    const values = Array.isArray(value) && value.map(( option )=> option.value).join(",");
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      event.stopPropagation();
      const innerValue = event.target.value;
      const optionsList  = innerValue.split(',').map((option)=>{
        return ({
          label: option,
          value: option
        })
      });
      onChange({
        target: {
          value: optionsList
        }
      })
    }
    return (
      <Flex
        border="1px solid transparent"
        borderRadius="4px"
        cursor="pointer"
        flexDirection="column"
        gap="4px"
        width="100%"
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
        <Flex   width="100%">
          <Textarea
            variant="outline"
            size="md"
            ref={ref}
            fontSize="sm"
            cursor="pointer"
            textAlign="left"
            value={values as unknown as string}
            onChange={handleChange}
            width="100%"
            height="40px"
          />
        </Flex>
      </Flex>
    );
  }
);

export default OptionsConfigurator;
