import { NumberFormatProps, NumberWrapperProps } from './types';
import NumberFormat, {
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import { Flex, forwardRef, Input as ChakraInput } from '@chakra-ui/react';
import React, { FC } from 'react';
import FormField from '../formField';

const NumberFormatWrapper: FC<NumberFormatProps> = forwardRef<
  NumberFormatProps,
  any
>(({ pageItem, theme, onChange, value, name }, ref) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { text: placeholder, ...placeholderStyles } =
    configurations.settings.placeholder;
  const { inputStyles } = configurations.settings;
  const handleValueChange = (
    valueObject: NumberFormatValues,
    sourceInfo: SourceInfo
  ) => {
    onChange({
      ...sourceInfo.event,
      target: {
        ...sourceInfo.event.target,
        value: valueObject.value,
      },
    });
  };
  return (
    <NumberFormat
      key={id}
      customInput={ChakraInput}
      onValueChange={handleValueChange}
      value={value}
      name={name}
      thousandSeparator={true}
      prefix={'$'}
      getInputRef={ref}
      format="$####-####-####"
      placeholder={placeholder}
      _placeholder={{
        ...placeholderStyles,
        color: primaryColor[600],
        opacity: 0.6,
      }}
      {...inputStyles}
      borderColor={primaryColor[800]}
      _focus={{
        ...inputStyles,
        borderWidth: '1.2px',
        borderColor: primaryColor[900],
      }}
      color={primaryColor[800]}
      allowedDecimalSeparators={[',', '.']}
      fixedDecimalScale
      decimalScale={2}
      decimalSeparator="."
      isNumericString
    />
  );
});

const InputWrapper: FC<NumberWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { text: label, ...labelStyles } = configurations.settings.label;
  return (
    <FormField
      key={id}
      name={label}
      label={label}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <NumberFormatWrapper pageItem={pageItem} theme={theme} />
    </FormField>
  );
};

export default InputWrapper;
