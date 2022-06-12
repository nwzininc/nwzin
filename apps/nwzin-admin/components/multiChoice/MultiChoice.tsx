import { MultiChoiceWrapperProps, MultiChoiceProps } from './types';
import Color from 'color';
import { Text, Flex, Icon, Box } from '@chakra-ui/react';
import React, { FC, forwardRef, Fragment } from 'react';
import { Tooltip } from 'react-tippy';
import { MdArrowDropDown } from 'react-icons/md';
import FormField from '../formField';
import Option from './Options';

export const MultiChoice: FC<MultiChoiceProps> = forwardRef<
  MultiChoiceProps,
  any
>(({ pageItem, theme, onChange, value, name }, ref) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;

  const { options = [] } = configurations.settings;
  const negatedColor = Color(primaryColor[500]).isDark()
    ? 'white'
    : 'blackAlpha.200';

  const handleOptionClick = (currentValue: string) => () => {
    onChange({
      target: {
        value: currentValue
      },
    });
  };
  return (
    <Flex flexDirection="column" ref={ref as unknown as any} gap="10px" marginTop="8px" role="Select"> 
      {
        options.map(({ label, value:optionValue }, currentIndex) => {
          return (
            <Option
              key={optionValue}
              label={label}
              index={currentIndex}
              value={optionValue}
              color={primaryColor[500]}
              isSelected={value === optionValue}
              negatedColor={negatedColor}
              handleClick={handleOptionClick(optionValue)}
            />
          );
        })
      }
    </Flex>
  )
});

MultiChoice.displayName = 'MultiChoice';

const MultiChoiceWrapper: FC<MultiChoiceWrapperProps> = ({
  pageItem,
  theme,
}) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { question, name } = configurations.settings;
  const { text: label, ...labelStyles } = question;
  return (
    <FormField
      key={id}
      name={name || label}
      label={label}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <MultiChoice pageItem={pageItem} theme={theme} />
    </FormField>
  );
};

export default MultiChoiceWrapper;
