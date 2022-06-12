import { Box, Flex, Icon } from '@chakra-ui/react';
import React, { FC, forwardRef, MouseEvent } from 'react';
import Flag from 'react-world-flags';
import { EditbleEmailProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { MdArrowDropDown } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditblePhone: FC<EditbleEmailProps> = forwardRef<
  HTMLDivElement,
  EditbleEmailProps
>(({ id, label, placeholder, inputStyles, isInternational }, ref) => {
  const  primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const inputStylesId = `${id}.configurations.settings.inputStyles`;
  const dispatch = useAppDispatch();

  const handleClick =
    (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
    };

  return (
    <DesignerWrapper id={id} ref={ref}>
      <Box padding="0px 0px">
        <EditableText
          componentId={id}
          {...label}
          isHeading={false}
          id={labelId}
          color={primaryColor[600]}
          selectionId={'configurations.settings.label'}
          value={label.text}
          cursor="pointer"
          placeholder="Type placeholder for Label"
        />
        <Flex
          marginTop="8px"
          alignItems="center"
          justifyItems="flex-start"
          gap="20px"
          onClick={handleClick(inputStylesId)}
          borderColor={primaryColor[500]}
          {...inputStyles}
        >
          <Flex gap="5px" alignItems="center">
            <Flag code={'IN'} height="40px" width="40px" />
            <Icon as={MdArrowDropDown} />
          </Flex>
          <EditableText
            componentId={id}
            {...placeholder}
            color={primaryColor[500]}
            cursor="pointer"
            selectionId={'configurations.settings.placeholder'}
            isHeading={false}
            id={placeholderId}
            value={placeholder.text}
            placeholder="Type you place holder for Phone"
          />
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditblePhone;
