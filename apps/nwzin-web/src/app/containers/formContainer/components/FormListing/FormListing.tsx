import { Heading, Flex, Button, Box, Text, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { FormItemProps, FormListingProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { useNavigate } from 'react-router-dom';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { getFormsService } from '../../service'

const FormItem: FC<FormItemProps> = ({ description, name }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/editform/397489375');
  };

  return (
    <Flex flexDirection="column" boxShadow="md" borderRadius="2xl" border="1px" borderColor="primary" overflow="hidden" width="350px">
      <Box padding="24px 16px">
        <Heading noOfLines={2} fontFamily="heading" size="sm">{name}</Heading>
      </Box>
      <Flex width="100%" padding="12px 0px" flex={2} backgroundColor="blackAlpha.200">
        <Text width="90%" padding="0px 16px" noOfLines={2} fontFamily="heading" size="sm"> {description}</Text>
        <Box width="10%">
      <Menu>
          <MenuButton bg="transparent" padding="0px" _hover={{
            backgroundColor: 'transparent'
          }} as={EditIcon} cursor="pointer">
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem>Stop Accepting Response</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};

const FormListing: FC<FormListingProps> = () => {
  const { forms } = useAppSelector((state) => state.formState);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const handleAddForms = () => {
    navigate('/createform/new');
  };
  useEffect(()=>{
    dispatch(getFormsService())
  },[])
  return (
    <Flex flexDirection="column" gap="30px" width="100%" overflow="auto">
      <Heading>
        Forms
      </Heading>
      <Heading fontFamily="heading" size="lg" alignSelf="flex-end" marginRight="70px">
        <Button
          color="whiteAlpha.800"
          backgroundColor="black"
          _hover={{ backgroundColor: 'black' }}
          onClick={handleAddForms}
        >
          <AddIcon w={3} h={3} marginRight="8px" /> Create Form
        </Button>
      </Heading>

      <Flex padding="16px" flexWrap="wrap" gap="20px">
        {forms?.map((form) => {
          return <FormItem name={form?.name} description={form?.description} />;
        })}
      </Flex>
    </Flex>
  );
};

export default FormListing;
