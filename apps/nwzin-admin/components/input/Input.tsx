import { InputWrapperProps } from './types';
import { Input as ChakraInput } from '@chakra-ui/react';
import React, { FC } from 'react';
import FormField from '../formField';

const InputWrapper: FC<InputWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { backgroundColor, primaryColor } = theme;
  const { text: label, ...labelStyles } = configurations.settings.label;
  const { text: placeholder, ...placeholderStyles } =
    configurations.settings.placeholder;
  const { inputStyles } = configurations.settings;
  return (
    <FormField
      key={id}
      name={label}
      label={label}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
      placeholder={placeholder}
    >
      <ChakraInput
        placeholder={placeholder}
        _placeholder={{ ...placeholderStyles, color: primaryColor[600], opacity: 0.6 }}
        {...inputStyles}
        borderColor={primaryColor[800]}
        color={primaryColor[800]}
        _focus={{
          ...inputStyles,
          borderWidth: '1.2px',
          borderColor:primaryColor[900],
        }}
      />
    </FormField>
  );
};

export default InputWrapper;
