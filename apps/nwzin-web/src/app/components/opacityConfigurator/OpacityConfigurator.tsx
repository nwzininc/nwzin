/* eslint-disable no-unsafe-optional-chaining */
import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdGraphicEq } from 'react-icons/md';
import { OpacityConfiguratorProps } from './types';

const OpacityConfigurator: FC<OpacityConfiguratorProps> = ({
  value,
  onChange,
  configLabel,
}) => {
  const handleChange = (value: number) => {
    onChange({
      target: {
        value: value,
      },
    });
  };
  return (
    <Flex
      width="auto"
      border="1px solid transparent"
      alignItems="center"
      padding="3px"
      borderRadius="4px"
      _hover={{
        borderColor: '#000',
      }}
      gap="10px"
      cursor="pointer"
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        height={'30px'}
        alignItems="center"
      >
        {configLabel}
      </Flex>
      <Flex width="100%">
        <Slider
          aria-label="slider-ex-5"
          onChangeEnd={handleChange}
          onChange={handleChange}
          colorScheme="teal"
          defaultValue={1}
          min={0}
          max={1}
          step={0.1}
          width={150}
          isDisabled={false}
        >
          <SliderTrack bg="red.100" width="100%">
            <SliderFilledTrack bg="blackAlpha" />
          </SliderTrack>
          <SliderThumb boxSize={4}>
            <Box color="blackAlpha" as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </Flex>
    </Flex>
  );
};

OpacityConfigurator.defaultProps = {
  value: 1,
};
export default OpacityConfigurator;
