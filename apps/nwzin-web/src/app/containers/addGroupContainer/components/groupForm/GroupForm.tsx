import { Button, Flex, useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import { GroupFormProps } from './types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const schema = yupResolver(yup.object({
    name: yup.string().min(3).max(32).required(),
}));

const GroupForm: FC<GroupFormProps> = ({ currentGroup }) => {
const toast = useToast();
const navigate = useNavigate();

  const handleLoginSubmit = (payload: any) => {
    toast({
        title: "Created",
        description: "Group has been created",
        status: "success",
        duration: 1000,
        position:"top",
        isClosable: true,
    })
    setTimeout(()=>{
        navigate('/groups')
    }, 1000)
  };

  console.log("currentGroup", currentGroup)
  return (
     <Flex padding="16px" boxShadow="base" borderRadius="2xl" width="600px">
      <Form
        mode="onChange"
        onSubmit={handleLoginSubmit}
        resolver={schema}
        defaultValues={currentGroup}
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
          placeholder="finance"
          label="Group Name"
        />
        <Button
          backgroundColor="blackAlpha.900"
          _hover={{
            backgroundColor:"blackAlpha.900"
          }}
          type="submit"
          size="lg"
          variant="outline"
          color="white"
          width="max-content"
          fontFamily="heading"
        >
          Create Group
        </Button>
      </Form>
      </Flex>
  );
};

export default GroupForm;
