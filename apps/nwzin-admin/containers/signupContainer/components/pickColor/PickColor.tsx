import {
  Flex,
  Box,
  Text,
  PopoverTrigger,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/react';
import { SketchPicker } from 'react-color';
import React, { FC, memo, useCallback } from 'react';
import { PickColorProps, ColorSchemeProps } from './types';

const Color: FC<ColorSchemeProps> = ({ value, id, onChange }) => {
  const handleChangeComplete = useCallback((color) => {
    onChange({...value, [id]: color?.hex});
  }, [id, onChange, value]);
  const currentColor = value[id];
  return (
    <Flex flexDirection="column" alignItems="center" cursor="pointer">
      <Popover placement="top">
        <PopoverTrigger>
          <Box
            height="20px"
            tabIndex={0}
            width="20px"
            borderRadius="50%"
            bg={currentColor}
            border="1px solid"
            borderColor="gray.200"
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontFamily="heading" fontSize="xl" textTransform="capitalize">
            {id} Color
          </PopoverHeader>
          <PopoverBody>
            <SketchPicker disableAlpha style={{fields: {display: 'none'}}} presetColors={[]} width="auto" color={value} onChangeComplete={handleChangeComplete} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Text fontFamily="heading" marginTop="10px" fontSize="medium" textTransform="capitalize" opacity="0.5">
        {id}
      </Text>
    </Flex>
  );
};


const PickColor: FC<PickColorProps> = memo(({ onChange, value }) => {
  const handleChange = useCallback((value: Record<string, string>) => {
    const newValue = {
        target: {
          value,
        },
    }
    onChange(newValue);
  }, [value]);
  return (
    <Flex gap="20px">
      {Object.entries(value).map(([key, color]) => {
        return (
          <Color onChange={handleChange} key={key} value={value} id={key} />
        );
      })}
    </Flex>
  );
});

PickColor.displayName = "PickColor";

export default PickColor;
