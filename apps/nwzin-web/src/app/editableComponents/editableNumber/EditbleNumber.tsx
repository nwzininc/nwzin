import { Box, Flex } from '@chakra-ui/react';
import React, { FC, MouseEvent, forwardRef } from 'react';
import { EditbleNumberProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditbleNumber: FC<EditbleNumberProps> = forwardRef<
  HTMLDivElement,
  EditbleNumberProps
>(({ id, label, placeholder, inputStyles }, ref) => {
  const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const inputStylesId = `${id}.configurations.settings.inputStylesId`;
  const dispatch = useAppDispatch();

  const handleBoxClick =
    (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
    };

  return (
    <DesignerWrapper id={id} ref={ref}>
      <Box>
        <EditableText
          componentId={id}
          {...label}
          isHeading={false}
          id={labelId}
          color={primaryColor[600]}
          selectionId={'configurations.settings.label'}
          value={label.text}
          placeholder="Type Number Label"
        />
        <Flex
          marginTop="8px" 
          alignItems="center"
          justifyItems="flex-start"
          gap="20px"
          onClick={handleBoxClick(inputStylesId)}
          {...inputStyles}
          borderColor={primaryColor[500]}
        >
          <EditableText
            componentId={id}
            {...placeholder}
            color={primaryColor[500]}
            isHeading={false}
            selectionId={'configurations.settings.placeholder'}
            id={placeholderId}
            value={placeholder.text}
            placeholder="Type placeholder for Number"
          />
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditbleNumber;
