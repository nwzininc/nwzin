import { Flex, Heading } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import React, { FC, useEffect } from 'react';
import { AddEditFormProps } from './types';
import { clearCurrentFormState } from '../../reducer';
import { getCurrentFormService } from '../../service';

const AddEditForm: FC<AddEditFormProps> = ({ isEdit, formId}) => {
  const { currentGroup, serviceStatus } = useAppSelector((state) => state.currentGroupState);
  const dispatch = useAppDispatch();
  // Load
  useEffect(()=>{
    if(isEdit && formId){
      dispatch(getCurrentFormService({
        formId,
      }))
    }
  },[isEdit, formId]);

  // Clean Up
  useEffect(()=>{
    return () => {
      dispatch(clearCurrentFormState());
    }
  },[])
  return (
    <Flex>
       
    </Flex>
  );
};

export default AddEditForm;
