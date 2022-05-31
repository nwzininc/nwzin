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
  Portal,
} from '@chakra-ui/react';
import { SketchPicker } from 'react-color';
import React, { FC, memo, useCallback } from 'react';
import { ColorPickerProps, ColorSchemeProps } from './types';

const Color: FC<ColorSchemeProps> = ({ value, id, onChange }) => {
  const handleChangeComplete = useCallback((color) => {
    onChange(color.hex);
  }, [id, onChange, value]);
  const currentColor = value;
  return (
    <Flex flexDirection="column" cursor="pointer">
      <Popover placement="top" computePositionOnMount>
        <PopoverTrigger>
          <Box
            cursor="pointer"
            height="20px"
            tabIndex={0}
            width="20px"
            borderRadius="50%"
            bg={currentColor}
            border="1px solid"
            borderColor="gray.200"
          />
        </PopoverTrigger>
        <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontFamily="heading" fontSize="xl" textTransform="capitalize">
            Color
          </PopoverHeader>
          <PopoverBody>
            <SketchPicker disableAlpha presetColors={[]} width="auto" color={value} onChangeComplete={handleChangeComplete} />
          </PopoverBody>
        </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
};


const ColorPicker: FC<ColorPickerProps> = memo(({ onChange, value, id }) => {
  const handleChange = useCallback((value: string) => {
    const newValue = {
        target: {
          value,
        },
    }
    onChange(newValue);
  }, [value, id]);
  return (
     <Color onChange={handleChange} value={value} id={id} />
  );
});

ColorPicker.displayName = "ColorPickerProps";

export default ColorPicker;
