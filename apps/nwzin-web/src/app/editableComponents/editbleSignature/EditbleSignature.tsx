import { Box, Flex } from '@chakra-ui/react';
import React, { FC, MouseEvent, forwardRef } from 'react';
import { EditbleSignatureProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditbleSignature: FC<EditbleSignatureProps> = forwardRef<
  HTMLDivElement,
  EditbleSignatureProps
>(({ id, label, placeholder, inputStyles }, ref) => {
  const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const inputStylesId = `${id}.configurations.settings.inputStylesId`;
  const dispatch = useAppDispatch();

  const handleClick = (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId}));
  };

  return (
    <DesignerWrapper id={id} ref={ref}>
      <Box width="100%" padding="0px 16px">
        <EditableText
          componentId={id}
          {...label}
          isHeading={false}
          selectionId={'configurations.settings.label'}
          id={labelId}
          color={primaryColor[600]}
          value={label.text}
          cursor="pointer"
          placeholder="Type Signature Label"
        />
        <Flex
          alignItems="center"
          marginTop="8px" 
          justifyItems="center"
          gap="20px"
          borderColor={primaryColor[500]}
          onClick={handleClick(inputStylesId)}
          {...inputStyles}
        >
          <EditableText
            componentId={id}
            {...placeholder}
            selectionId={'configurations.settings.placeholder'}
            cursor="pointer"
            isHeading={false}
            color={primaryColor[500]}
            id={placeholderId}
            value={placeholder.text}
            placeholder="Type Sign Place holder"
          />
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditbleSignature;
