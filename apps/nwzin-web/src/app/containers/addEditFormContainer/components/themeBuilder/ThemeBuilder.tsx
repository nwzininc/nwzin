import { Flex, Text, Heading, Button, Input } from '@chakra-ui/react';
import ColorPicker from '../../../../components/colorPicker';
import React, { FC } from 'react';
import { ColorScale, colorVariationBuilder } from '../../helper';
import ColorGrid from './components/colorGrid';
import { ThemeBuilderProps, ThemeColorPickerProps } from './types';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import { updateColorScale, saveTheme } from '../../reducer';
import Color from 'color';

const ThemeColorPicker: FC<ThemeColorPickerProps> = ({
  colorScale,
  title,
  handleChange,
}) => {
  const handleColorChange = (event: any) => {
    const { value } = event.target;
    const newColorScale = colorVariationBuilder(value);
    handleChange(newColorScale);
  };
  return (
    <Flex flexDirection="column" gap="20px" marginTop="50px">
      <Heading size="sm" fontFamily="heading">
        {title}
      </Heading>
      <Flex flexDirection="row" alignItems="center" gap="20px">
        <ColorPicker
          id="#4f1bde"
          name="colorPicker"
          value={colorScale[500]}
          onChange={handleColorChange}
        />
        <Flex>
          <Text size="sm" padding="8px 12px" boxShadow="base" borderRadius={4}>
            {colorScale[500]}
          </Text>
        </Flex>
        <ColorGrid colorScale={colorScale} />
      </Flex>
    </Flex>
  );
};

const ThemeBuilder: FC<ThemeBuilderProps> = () => {
  const dispatch = useAppDispatch();
  const handleColorChange = (key: string) => (colorScale: ColorScale) => {
    dispatch(
      updateColorScale({
        key,
        colorScale,
      })
    );
  };
  const handleSave = () => {
    dispatch(saveTheme());
  };
  const currentTheme = useAppSelector(
    (state) => state.currentFormState.currentTheme
  );
  const isDark = Color(currentTheme.primaryColor[900]).isDark();
  const textColor = isDark
    ? Color(currentTheme.primaryColor[900]).negate().lighten(10)
    : Color(currentTheme.primaryColor[700]).negate().darken(10);
    const isInputDark = Color(currentTheme.backgroundColor[500]).isDark();
    const inputTextColor = isInputDark
    ? Color(currentTheme.backgroundColor[500]).negate().lighten(10)
    : Color(currentTheme.backgroundColor[500]).negate().darken(10);

  return (
    <>
      <Flex
        height="calc(100%)"
        padding="24px"
        position="fixed"
        top="0px"
        left="0px"
        width="60%"
        gap="10px"
        flexDirection="column"
        boxShadow="lg"
        bg="#f8f8f8"
        justifyContent="center"
      >
        <Flex gap="10px" flexDirection="column" alignItems="center"  padding="24px" borderRadius="24px"> 
          <Heading textAlign="center" size="lg" fontFamily="heading">
            Choose Colors
          </Heading>
          <ThemeColorPicker
            title="Primary Color"
            handleChange={handleColorChange('primaryColor')}
            colorScale={currentTheme?.primaryColor}
          />
          <ThemeColorPicker
            title="Background Color"
            handleChange={handleColorChange('backgroundColor')}
            colorScale={currentTheme?.backgroundColor}
          />
          <Flex alignItems="center" justifyContent="center">
            <Button
              marginTop="50px"
              maxWidth="max-content"
              variant="solid"
              colorScheme="purple"
              size="lg"
              onClick={handleSave}
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        height="calc(100%)"
        padding="24px"
        position="fixed"
        top="0px"
        right="0"
        width="calc(100% - 60%)"
        gap="10px"
        flexDirection="column"
        boxShadow="lg"
        alignItems="center"
        justifyContent="center"
        bg={currentTheme.backgroundColor[500]}
      >
        <Flex
          flexDirection="column"
          gap="16px"
          borderRadius="8px"
          border="1px solid"
          borderColor={currentTheme.primaryColor[600]}
          padding="34px"
        >
          <Heading color={inputTextColor.hex()} fontFamily="heading" size="md"> Demo Form </Heading>
          <Text fontFamily="heading" color={inputTextColor.hex()} size="xs"> * This is how your form looks *</Text>
          <Input 
            borderColor={currentTheme.primaryColor[700]}
            _focus={{
              boxShadow: 'none',
              borderColor: currentTheme.primaryColor[900],
            }}
            _hover={{
              boxShadow: 'none',
              borderColor: currentTheme.primaryColor[900],
            }}
            placeholder="Username"
            fontFamily="heading"
            color={inputTextColor.hex()}
            width="364px"
            disabled
            size="lg"
          />
          <Input
            borderColor={currentTheme.primaryColor[700]}
            fontFamily="heading"
            type="password"
            color={inputTextColor.hex()}
            size="lg"
            disabled
            _focus={{
              boxShadow: 'none',
              borderColor: currentTheme.primaryColor[900],
            }}
            width="364px"
            _hover={{
              boxShadow: 'none',
              borderColor: currentTheme.primaryColor[900],
            }}
            placeholder="Password"
          />
          <Button
            marginTop="10px"
            maxWidth="max-content"
            variant="solid"
            fontFamily="heading"
            size="lg"
            color={textColor.hex()}
            bgColor={currentTheme.primaryColor[700]}
            _hover={{
              boxShadow: 'none',
              bgColor:currentTheme.primaryColor[700],
            }}
            _focus={{
              boxShadow: 'none',
              bgColor:currentTheme.primaryColor[700],
            }}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ThemeBuilder;
