import { Button, Flex, Heading, Select, SelectField, Switch, useToast } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import _noop from 'lodash/noop';
import { nanoid } from 'nanoid'
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import { DataStoreFormProps } from './types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import { DeleteIcon } from '@chakra-ui/icons';

const schema = yupResolver(
  yup.object({
    name: yup.string().min(3).max(20).required(),
    schema: yup.array(yup.object({
      name:  yup.string().min(2).max(32).required("Name is Required"),
      type: yup.string().required("Type is Required")
    }))
  })
);

const intialFormValue = {
  name: 'Account',
  schema:[{
    name: 'id',
    type: 'String'
  }]
}

const SchemaField = () => {
  const { control } = useForm();
  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'schema', // unique name for your Field Array,
      shouldUnregister: true,
    }
  );

  useEffect(()=>{
    swap(0,0);
  },[])
  const handleAdd = () => {
    append({ id: nanoid(),name: ''});
  };
  const handleDelete = (index: number) => () => {
    remove(index);
  };
  return (
    <Flex flexDirection="column" gap="20px" width="max-content" padding="16px 24px" boxShadow="base" backgroundColor="white" borderRadius="base">
      <Heading fontFamily="heading" size="md" fontWeight="semibold"> Schema </Heading>
      {fields.map((field, index) => {
        const isFirst = index === 0;
      return (
        <Flex gap="15px" key={field.id} alignItems="center">
          <FormField
            key={`${index}.name`}
            size="lg"
            name={`schema[${index}].name`}
            placeholder="Property Name"
            label=""
            autoCapitalize="on"
            isDisabled={isFirst}
            width="400px"
          />
          <FormField
            key={`${index}.type`}
            size="lg"
            width="100%"
            name={`schema[${index}].type`}
            placeholder="Select Data Type"
            label=""
            isDisabled={isFirst}
          >
           <Select placeholder='Select option' variant="filled" isDisabled={isFirst}  width="400px">
            <option value='String'>String</option>
            <option value='Number'>Number</option>
            <option value='Date'>Date</option>
            <option value='DateTime'>Date Time</option>
            <option value='Currency'>Currency</option>
            <option value='Email'>Email</option>
          </Select>
          </FormField>
          <DeleteIcon
            key={`${field.id}.delete`}
            onClick={isFirst ? _noop: handleDelete(index)}
            cursor="pointer"
            w={4}
            h={4}
            color={isFirst ? "transparent" :"gray.700"}
          />
        </Flex>
      )}
      )}
      <Button onClick={handleAdd} width="max-content" justifySelf="flex-end"> Add Property</Button>
    </Flex>
  );
};

const DataStoreForm: FC<DataStoreFormProps> = ({ currentDataStore }) => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleFormSubmit = (payload: any) => {
    console.log('payload', payload);
    toast({
      title: 'Created',
      description: 'Data Store has been created',
      status: 'success',
      duration: 1000,
      position: 'top',
      isClosable: true,
    });
    setTimeout(()=>{
        navigate('/datastore')
    }, 1000)
  };

  console.log('currentGroup', currentDataStore);
  return (
    <Flex padding="16px" boxShadow="base" borderRadius="2xl" width="100%">
      <Form
        mode="onChange"
        onSubmit={handleFormSubmit}
        defaultValues={currentDataStore || intialFormValue}
        shouldUnregister
        resolver={schema}
        formStyles={{
          gap: '25px',
          marginTop: '20px',
          width: '80%',
          flexDirection: 'column',
        }}
      >
        <FormField
          size="lg"
          width="100%"
          name="name"
          placeholder="Data Store Name"
          label="Data Store Name"
          maxWidth="364px"
        />
        <SchemaField />

        <Button
          backgroundColor="blackAlpha.900"
          _hover={{
            backgroundColor: 'blackAlpha.900',
          }}
          type="submit"
          size="lg"
          variant="outline"
          color="white"
          width="max-content"
          fontFamily="heading"
        >
          Create Data Store
        </Button>
      </Form>
    </Flex>
  );
};

export default DataStoreForm;
