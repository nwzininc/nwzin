import React, { FC, forwardRef } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import EditableText from '../editbleText';
import EditableOption from './Options';
import { Box, Flex, Text } from '@chakra-ui/react';
import { MultiSelectProps } from './types';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { updateChildNode } from '../../containers/addEditFormContainer/reducer';

const MultiSelect: FC<MultiSelectProps> = forwardRef(
  ({ id, options, question }, ref) => {
    const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor);
    
    const questionId = `${id}.configurations.settings.question.text`;
    const dispatch = useAppDispatch();
    const currentSelected = useAppSelector(
      (state) => state.currentFormState.currentSelectedField
    );
    const isCurrentSelceted = currentSelected === id;
    const handleAddOption = () => {
      const newOptionList = [
        ...options,
        { label: 'New Option', value: 'New Option' },
      ];
      const updateId = `${id}.configurations.settings.options`;
      dispatch(updateChildNode({ id: updateId, value: newOptionList }));
    };

    const handleDelete = (index: number) => () => {
      const newOptionList = [...options];
      newOptionList.splice(index, 1);
      const updateId = `${id}.configurations.settings.options`;
      dispatch(updateChildNode({ id: updateId, value: newOptionList }));
    };

    return (
      <DesignerWrapper id={id} ref={ref}>
        <Flex
          flexDirection="column"
          margin="8px 0px"
          gap="8px"
          minWidth="max-content"
          boxSizing="border-box"
        >
          <EditableText
            componentId={id}
            paddingLeft="4px"
            isHeading={false}
            id={questionId}
            selectionId={'configurations.settings.question'}
            value={question.text}
            marginBottom="10px"
            placeholder="Type you question"
            {...question}
            color={primaryColor[600]}
          />
          {options.map(
            (option: { value: string; label: string }, index: number) => {
              const optionId = `${id}.configurations.settings.options.${index}`;
              return (
                <EditableOption
                  id={optionId}
                  value={option?.label}
                  key={optionId}
                  componentId = {id}
                  handleDelete={handleDelete}
                  index={index}
                  isCurrentSelceted={isCurrentSelceted}
                  optionStyles={{ color: primaryColor[600]}}
                />
              );
            }
          )}
          {options?.length < 26 && isCurrentSelceted && (
            <Box cursor="pointer">
              <Text
                margin="20px"
                onClick={handleAddOption}
                width="max-content"
                border="2px solid #333"
                color="blackAlpha.900"
                borderRadius={8}
                padding="8px 12px"
              >
                Add Option
              </Text>
            </Box>
          )}
        </Flex>
      </DesignerWrapper>
    );
  }
);

export default MultiSelect;
