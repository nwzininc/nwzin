import { DatePickerProps, DatePickerWrapperProps } from './types';
import { Input as ChakraInput } from '@chakra-ui/react';
import isMatch from  'date-fns/isMatch';
import React, { FC, forwardRef } from 'react';
import _replace from 'lodash/replace';
import FormField from '../formField';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { validateDate } from './helper';
import isValidDate from 'date-fns/isValid';
import { enIN } from 'date-fns/locale';

const DatePicker: FC<DatePickerProps> = forwardRef<
  DatePickerProps,
  any
>(({ pageItem, theme, onChange, value, name }, ref) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { text: placeholder, ...placeholderStyles } =
    configurations.settings.placeholder;
  const { inputStyles } = configurations.settings;
  const handleValueChange = (
    valueObject: NumberFormatValues,
  ) => {
    onChange({
      target: {
        value: valueObject.formattedValue
      },
    });
  };
  const format = (placeholder as string) ? _replace(
    placeholder,
    new RegExp('[D,M,Y,d,m,y]', 'g'),
    '#'
  ): '##/##/####';

  const processedValue = _replace(value,  new RegExp('[-,/]', 'g'),'')
  return (
    <NumberFormat
      key={id}
      customInput={ChakraInput}
      onValueChange={handleValueChange}
      value={processedValue}
      name={name}
      thousandSeparator={true}
      getInputRef={ref}
      format={format}
      mask={['_','_','_','_','_','_','_','_']}
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
      fixedDecimalScale
      isNumericString
    />
  );
});

DatePicker.displayName = "DatePicker"

const DatePickerWrapper: FC<DatePickerWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { backgroundColor, primaryColor } = theme;
  const { text: label, ...labelStyles } = configurations.settings.label;
  const { text: placeholder, ...placeholderStyles } =
    configurations.settings.placeholder;
  const { inputStyles } = configurations.settings;
  const format = (placeholder as string) ? _replace(
    placeholder,
    new RegExp('[D,M,Y,d,m,y]', 'g'),
    '#'
  ): '##/##/####';
  return (
    <FormField
      key={id}
      name={label}
      rules={{
        valueAsDate: true,
        validate: validateDate(placeholder)
      }}
      label={label}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <DatePicker
          pageItem={pageItem}
          theme={theme}
      />
    </FormField>
  );
};

export default DatePickerWrapper;
