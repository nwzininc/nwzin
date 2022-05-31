import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldProps } from './types';

const FormField: FC<FormFieldProps> = memo(
  ({ children, name, label, placeholder, isDisabled, ...rest }) => {
    return (
      <Controller
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, error },
        }) => (
          <FormControl isInvalid={invalid}>
            {!!label && (
              <FormLabel fontFamily="heading" color="" htmlFor={name}>
                {label}
              </FormLabel>
            )}
            {!children && (
              <Input
                id={name}
                {...rest}
                placeholder={placeholder}
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={isDisabled}
              />
            )}
            {children && React.cloneElement(children as unknown as ReactJSXElement, { onChange, onBlur, value, name, ref, error, invalid})}
            <FormErrorMessage>{error && error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;
