import { DropdownProps, DropdownWrapperProps } from './types';
import Color from 'color';
import { Text, Flex, Icon, Divider } from '@chakra-ui/react';
import React, { FC, forwardRef, Fragment } from 'react';
import { Tooltip } from 'react-tippy';
import { MdArrowDropDown } from 'react-icons/md';
import FormField from '../formField';

export const Dropdown: FC<DropdownProps> = forwardRef<DropdownProps, any>(
  ({ pageItem, theme, onChange, value, name }, ref) => {
    const { id, configurations } = pageItem;
    const { backgroundColor, primaryColor } = theme;
    const { text: placeholder, ...placeholderStyles } =
      configurations.settings.placeholder;
    const { options } = configurations.settings;
    const negatedColor = Color(primaryColor[500]).isDark()
      ? 'white'
      : 'blackAlpha.200';

    const handleOptionClick = (value: string) => () => {
      onChange({
        target: {
          value,
        },
      });
    };
    return (
      <Tooltip
        trigger="click"
        interactive={false}
        position="bottom-start"
        arrow={false}
        distance={0}
        html={
          <Flex
            overflow="hidden"
            backgroundColor={backgroundColor[500]}
            borderRadius="8px"
            boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            width="364px"
            zIndex={1000}
            flexDirection="column"
          >
            {options.map((option) => {
              return (
                <Fragment
                  key={option.label}
                >
                  <Flex
                    cursor="pointer"
                    onClick={handleOptionClick(option.value)}
                    key={option.label}
                    borderBottom="0.5px solid #ccc"
                    _hover={{
                      backgroundColor: primaryColor[500],
                      color: negatedColor,
                    }}
                    color={primaryColor[500]}
                    padding="8px 16px"
                  >
                    {option.label}
                  </Flex>
                </Fragment>
              );
            })}
          </Flex>
        }
      >
        <Flex
          width="364px"
          minHeight="54px"
          border="1px solid"
          alignItems="center"
          borderRadius="8px"
          {...placeholderStyles}
          borderColor={primaryColor[700]}
          padding="8px 16px"
          justifyContent="space-between"
        >
          {!value && (
            <Text
              fontFamily="heading"
              fontSize="md"
              color={primaryColor[500]}
              opacity="0.8"
            >
              {placeholder}
            </Text>
          )}
          {value && (
            <Text fontFamily="heading" fontSize="md" color={primaryColor[600]}>
              {value}
            </Text>
          )}
          <Icon
            as={MdArrowDropDown}
            boxSize="8"
            color={primaryColor[500]}
            cursor="pointer"
          />
        </Flex>
      </Tooltip>
    );
  }
);

Dropdown.displayName = 'Dropdown';

const DropdownWrapper: FC<DropdownWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { text: label, ...labelStyles } = configurations.settings.label;
  return (
    <FormField
      key={id}
      name={label}
      label={label}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <Dropdown pageItem={pageItem} theme={theme} />
    </FormField>
  );
};

export default DropdownWrapper;
