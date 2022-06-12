import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
} from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { errorMessageMaping } from './constant';
import { FormFieldProps } from './types';

const FormField: FC<FormFieldProps> = memo(
  ({ children, rules, name: labelName, label, labelStyles, placeholder, defaultValue, ...rest }) => {
    return (
      <Controller
        name={labelName}
        rules={rules}
        defaultValue={defaultValue}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error, invalid },
        }) => (
          <FormControl isInvalid={invalid}>
            {!!label && (
              <FormLabel
                fontFamily="heading"
                htmlFor={name}
                {...(labelStyles as unknown as FormLabelProps)}
              >
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
              />
            )}
            {React.Children.map(children, (child: any) => {
              console.log("error", error)
              return React.cloneElement(child as unknown as ReactJSXElement, {
                onChange,
                onBlur,
                value,
                name,
                ref,
                error,
              });
            })}
            <FormErrorMessage>{error && errorMessageMaping(error?.type) } </FormErrorMessage>
        </FormControl>
        )}
      />
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;
