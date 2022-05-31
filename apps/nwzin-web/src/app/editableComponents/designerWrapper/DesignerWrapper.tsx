import { Flex } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../store';
import React, { FC, forwardRef, MouseEvent } from 'react';
import { DesignerWrapperProps } from './types';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const DesignerWrapper: FC<DesignerWrapperProps> = forwardRef(
  ({ children, id }, ref) => {
    const currentSelectedField = useAppSelector(
      (state) => state.currentFormState.currentSelectedField
    );
    const dispatch = useAppDispatch();
    const isCurrentSelectedItem = id === currentSelectedField;
    const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatch(setCurrentField({ currentField: id, subField: '' }));
    };
    return (
      <Flex
        _hover={{
          border: '1px dashed green',
        }}
        border={
          isCurrentSelectedItem ? '1px dashed blue' : '1px solid transperant'
        }
        onClick={handleContainerClick as unknown as any}
        ref={ref as any}
      >
        {children}
      </Flex>
    );
  }
);

export default DesignerWrapper;
