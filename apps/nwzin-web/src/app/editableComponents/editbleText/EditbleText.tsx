import { Box, Text, Textarea, TextareaProps, useOutsideClick } from '@chakra-ui/react';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import autosize from 'autosize';
import { EditableTextProps } from './types';
import { useAppDispatch } from '../../../store';
import { setCurrentField, updateChildNode } from '../../containers/addEditFormContainer/reducer';

const EditableText: FC<EditableTextProps> = ({
  value,
  fontWeight,
  size,
  color,
  placeholder,
  padding,
  align,
  letterSpacing,
  id,
  selectionId,
  componentId,
  onFieldSelect,
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const ref = React.useRef();
  const [isEditable, setEditable] = useState<boolean>(false);
  useEffect(() => {
    autosize(ref.current as unknown as HTMLTextAreaElement);
  }, [value, isEditable]);
  useOutsideClick({
    ref: ref as unknown as any,
    handler: () => setEditable(false),
  });
  const toggleEditable = () => {
    setEditable(true);
  };
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setCurrentField({ currentField: componentId, subFieldId: selectionId}));
  }
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if(Array.isArray(id)){
      id.forEach((uniqueId)=>{
        dispatch(updateChildNode({id: uniqueId, value:event.target.value}))
      })
      return;
    }
    dispatch(updateChildNode({id, value:event.target.value}))
  }
  return (
    <Box width="100%" onClick={handleClick}>
      {!isEditable && (
        <Text
          padding={padding}
          onClick={toggleEditable}
          fontSize={size}
          color={color}
          fontFamily="heading"
          letterSpacing={letterSpacing}
          fontWeight={fontWeight}
          width="100%"
          userSelect="none"
          textAlign={align}
          minHeight="20px"
          minWidth="20px"
          {...rest}
        >
            {value}
        </Text>
      )}
      {isEditable && (
        <Textarea
          rows={1}
          fontSize={size}
          minHeight="20px"
          fontFamily="heading"
          minWidth="20px"
          letterSpacing={letterSpacing}
          padding={padding || "0px"}
          color={color}
          textAlign={align}
          fontWeight={fontWeight}
          resize="none"
          width="100%"
          ref={ref as unknown as any}
          variant="unstyled"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          {...rest as unknown as TextareaProps}
        />
      )}
    </Box>
  );
};

export default EditableText;
