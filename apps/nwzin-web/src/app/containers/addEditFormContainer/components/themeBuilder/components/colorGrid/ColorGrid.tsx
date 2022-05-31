import { Flex, Text } from '@chakra-ui/react';
import _map from 'lodash/map';
import Color from 'color';
import React, { FC } from 'react';
import { ColorBoxProps, ColorGridProps } from './types';

const ColorBox: FC<ColorBoxProps> = ({ colorKey, colorCode }) => {
const isDark = Color(colorCode).isDark()
const textColor = isDark ? Color(colorCode).negate().lighten(10) :  Color(colorCode).negate().darken(10)
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg={colorCode}
      height="40px"
      width="60px"
      boxShadow="base"
    >
      <Text fontSize="sm" fontFamily="heading" color={textColor.hex()} >{colorKey}</Text>
    </Flex>
  );
};
const ColorGrid: FC<ColorGridProps> = ({ colorScale }) => {
  return (
    <Flex flexWrap="wrap" width="300px" maxWidth="300px" borderRadius="4px" overflow="hidden">
      {_map(colorScale, (value, key) => {
        return <ColorBox key={key} colorKey={key} colorCode={value} />;
      })}
    </Flex>
  );
};

export default ColorGrid;
