import { Box, Flex } from '@chakra-ui/react';
import React, { FC, MouseEvent, forwardRef } from 'react';
import { EditbleDatePickerProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditbleDatePicker: FC<EditbleDatePickerProps> = forwardRef<
  HTMLDivElement,
  EditbleDatePickerProps
>(({ id, label, placeholder, inputStyles }, ref) => {
  const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const inputStylesId = `${id}.configurations.settings.inputStylesId`;
  const dispatch = useAppDispatch();

  const handleClick =
    (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
    };

  return (
    <DesignerWrapper id={id} ref={ref}>
      <Box padding="0px 16px">
        <EditableText
          componentId={id}
          {...label}
          isHeading={false}
          id={labelId}
          color={primaryColor[600]}
          selectionId={'configurations.settings.label'}
          value={label.text}
          placeholder="Type Date Label"
        />
        <Flex
          marginTop="8px"
          alignItems="center"
          justifyItems="flex-start"
          gap="20px"
          {...inputStyles}
          borderColor={primaryColor[500]}
          onClick={handleClick(inputStylesId)}
        >
          <EditableText
            componentId={id}
            {...placeholder}
            isHeading={false}
            color={primaryColor[500]}
            selectionId={'configurations.settings.placeholder'}
            id={placeholderId}
            value={placeholder.text}
            placeholder="Type placeholder for Date"
          />
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditbleDatePicker;
