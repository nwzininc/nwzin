import { Flex } from '@chakra-ui/react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import React, { ChangeEvent, FC } from 'react';
import { ValidationSettingsProps } from './types';
import { getCMCMapping } from '../../mapping';
import { getComponentByValidationMapping } from './map';
import { updateChildNode } from '../../reducer';

const ValidationSettings: FC<ValidationSettingsProps> = () => {
  const { currentForm, currentSelectedField, currentPage } = useAppSelector(
    (state) => state.currentFormState
  );
  const dispatch = useAppDispatch();
  if (currentSelectedField) {
    const currentPageIndex = currentForm.pages.findIndex(
      (page) => page.pageId === currentPage
    );
    const field = _get(
      currentForm?.pages[currentPageIndex].pageItems,
      currentSelectedField
    );
    const { validations } = getCMCMapping(field.componentId);
    console.log('validations', validations, field);
    const handleChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateChildNode({
          id, value: event.target.value 
        }))
    } 

    return (
      <Flex flexDirection="column" gap="10px">
        {_map(validations, (value, key) => {
          const {label, id} = value
          const Component = getComponentByValidationMapping(value?.type);
          if(Component){
            return <Component label={label} value={_get(field, id)} onChange={handleChange(`${field.id}.${id}`)} />
          }
          return null;
        })}
      </Flex>
    );
  }

  return <Flex bg="primary">Validation can be set to form fields</Flex>;
};

export default ValidationSettings;
