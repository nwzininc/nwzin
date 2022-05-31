import { Box, Flex } from '@chakra-ui/react';
import React, { FC, forwardRef, MouseEvent } from 'react';
import { EditbleEmailProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';
const EditbleEmail: FC<EditbleEmailProps> = forwardRef<
  HTMLDivElement,
  EditbleEmailProps
>(({ id, label, placeholder, inputStyles }, ref) => {
  const  primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const inputStyleId = `${id}.configurations.settings.inputStyles`;
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setCurrentField({ currentField: id, subFieldId: inputStyleId }));
  };
  return (
    <DesignerWrapper id={id} ref={ref}>
      <Box onClick={handleClick} padding="0px 16px">
        <EditableText
          componentId={id}
          cursor="pointer"
          {...label}
          selectionId={'configurations.settings.label'}
          isHeading={false}
          id={labelId}
          color={primaryColor[600]}
          value={label.text}
          placeholder="Type your Label"
        />
        <Flex
          marginTop="8px"
          alignItems="center"
          onClick={handleClick}
          justifyItems="flex-start"
          borderColor={primaryColor[500]}
          {...inputStyles}
        >
          <EditableText
            componentId={id}
            cursor="pointer"
            {...placeholder}
            isHeading={false}
            color={primaryColor[500]}
            selectionId={'configurations.settings.placeholder'}
            id={placeholderId}
            height="max-content"
            value={placeholder.text}
            placeholder="Type Placeholder"
          />
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditbleEmail;
