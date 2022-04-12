import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormFieldProps } from './types';

const FormField: FC<FormFieldProps> = memo(({ name, label, placeholder, ...rest }) => {
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, error },
      }) => (
        <FormControl isInvalid={invalid}>
          {!!label && <FormLabel color="" htmlFor={name}>{label}</FormLabel>}
          <Input
            id={name}
            {...rest}
            placeholder={placeholder}
            ref={ref}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>
            {error && error?.message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
});

FormField.displayName = "FormField";

export default FormField;
