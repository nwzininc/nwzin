import { Heading, Flex} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { AddEditDataStoreProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { getCurrentDataStoreService } from '../../service';
import DataStoreForm from '../dataStoreForm';
import { clearCurrentGroupState } from '../../reducer';

const AddEditDataStore: FC<AddEditDataStoreProps> = ({ isEdit, dataStoreId }) => {
  const { currentDataStore, serviceStatus } = useAppSelector((state) => state.currentDataStoreState);
  const dispatch = useAppDispatch();
  // Load
  useEffect(()=>{
    if(isEdit && dataStoreId){
      dispatch(getCurrentDataStoreService({
        dataStoreId,
      }))
    }
  },[isEdit, dataStoreId]);

  // Clean Up
  useEffect(()=>{
    return () => {
      dispatch(clearCurrentGroupState());
    }
  },[])

  const loadForm = isEdit ?  serviceStatus === "fulfilled" : true;

  return (
    <Flex flexDirection="column" gap="30px" width="100%">
      <Heading fontFamily="heading" size="lg">
        {isEdit ? "Edit Data Store" : "Add Data Store"}
      </Heading>
       {loadForm && <DataStoreForm currentDataStore={currentDataStore} />}
    </Flex>
  );
};

export default AddEditDataStore;
