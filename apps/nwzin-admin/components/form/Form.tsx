import { Flex } from '@chakra-ui/react';
import React , { FC } from 'react';
import { FormProvider, useForm, UseFormReturn, UseFormProps, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { FormProps } from './types';

const Form:FC<UseFormProps & FormProps> = ({ defaultValues, resolver, reValidateMode, onSubmit, onSubmitError, children, formStyles, ...rest}) => {
    const methods: UseFormReturn = useForm({
        defaultValues,
        resolver,
        mode: reValidateMode,
        ...rest
      });

    const handleSubmit = methods.handleSubmit(onSubmit as unknown as SubmitHandler<any>, onSubmitError as unknown as SubmitErrorHandler<any> );
    return (
    <FormProvider {...methods}>
       <Flex 
        as="form"
        onSubmit={handleSubmit}
        {...formStyles}
        >
        {children}
       </Flex>
    </FormProvider>
    )
}

export default Form;