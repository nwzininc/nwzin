import {
  Box,
  Divider,
  Flex,
  Icon,
  Text,
  useOutsideClick,
} from '@chakra-ui/react';
import React, { FC, forwardRef, MouseEvent, useState } from 'react';
import { EditableDropdownProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { MdArrowDropDown } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';
import Color from 'color';

const EditableDropdown: FC<EditableDropdownProps> = forwardRef<
  HTMLDivElement,
  EditableDropdownProps
>(({ id, label, placeholder, inputStyles, options }, ref) => {
  const dropDownref = React.useRef();
  const [isDropdwonOpen, setDropdownOpen] = useState<boolean>(false);
  useOutsideClick({
    ref: dropDownref as any,
    handler: () => setDropdownOpen(false),
  });
  const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
  const labelId = `${id}.configurations.settings.label.text`;
  const placeholderId = `${id}.configurations.settings.placeholder.text`;
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setDropdownOpen(true);
  };

const isDark = Color(primaryColor[500]).isDark()
const textColor = isDark ? Color(primaryColor[500]).negate().lighten(10) :  Color(primaryColor[500]).negate().darken(10)
  const inputStylesId = `${id}.configurations.settings.inputStylesId`;
  const dispatch = useAppDispatch();

  const handleBoxClick =
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
          color={primaryColor[600]}
          isHeading={false}
          selectionId={'configurations.settings.label'}
          id={labelId}
          value={label.text}
          placeholder="Type Number Label"
        />
        <Flex
          marginTop="8px" 
          alignItems="center"
          ref={dropDownref as any}
          position="relative"
          justifyItems="space-between"
          gap="20px"
          onClick={handleBoxClick(inputStylesId)}
          {...inputStyles}
          borderColor={primaryColor[600]}
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
          <Icon
            as={MdArrowDropDown}
            boxSize="8"
            cursor="pointer"
            onClick={handleClick as any}
          />
          {isDropdwonOpen && (
            <Flex
              width="100%"
              top="54px"
              left="0px"
              position="absolute"
              flexDirection="column"
              boxShadow="lg"
              zIndex={100}
              backgroundColor="#fff"
              borderRadius="8px"
              cursor="pointer"
            >
              {options.map(({ label }, index) => {
                const isFirst = index === 0;
                return (
                  <Box
                    _hover={{
                      backgroundColor: primaryColor[500],
                      color: textColor.hex(),
                    }}
                  >
                    {!isFirst && <Divider />}
                    <Text padding="8px 12px" noOfLines={1} fontFamily="heading">
                      {label}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          )}
        </Flex>
      </Box>
    </DesignerWrapper>
  );
});

export default EditableDropdown;
