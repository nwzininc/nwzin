import { Heading, Flex} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { AddEditGroupProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { getCurrentGroupService } from '../../service';
import GroupForm from '../groupForm';
import { clearCurrentGroupState } from '../../reducer';

const AddEditGroup: FC<AddEditGroupProps> = ({ isEdit, groupId }) => {
  const { currentGroup, serviceStatus } = useAppSelector((state) => state.currentGroupState);
  const dispatch = useAppDispatch();
  // Load
  useEffect(()=>{
    if(isEdit && groupId){
      dispatch(getCurrentGroupService({
        groupId,
      }))
    }
  },[isEdit, groupId]);

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
        {isEdit ? "Edit Group" : "Add Group"}
      </Heading>
       {loadForm && <GroupForm currentGroup={currentGroup} />}
    </Flex>
  );
};

export default AddEditGroup;
