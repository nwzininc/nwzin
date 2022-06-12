import { YesNoWrapperProps, YesNoProps } from './types';
import Color from 'color';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC, forwardRef } from 'react';
import FormField from '../formField';

export const YesNo: FC<YesNoProps> = forwardRef<YesNoProps, any>(
  ({ id, pageItem, theme, onChange, value }, ref) => {
    const { configurations } = pageItem;
    const { primaryColor, backgroundColor } = theme;
    const { yesLabel, noLabel } = configurations.settings;
    const { text: yesLabelText, ...yesLabelStyles } = yesLabel || {};
    const { text: noLabelText, ...noLabelStyles } = noLabel || {};
    const negatedPrimaryColor = Color(primaryColor[500]).isDark()
      ? 'white'
      : primaryColor[900];
      const negatedBgColor = Color(backgroundColor[500]).isDark()
      ? 'white'
      : primaryColor[900];
    const isNoSelected = value === false;
    const handleClick = (currentValue: boolean) => () => {
      onChange({
        target: {
          value: currentValue,
        },
      });
    };
    return (
      <Flex
        key={id}
        ref={ref as any}
        role="checkbox"
        marginTop="8px"
        borderRadius="8px"
        overflow="hidden"
        width="max-content"
        cursor="pointer"
        border={`1px solid ${primaryColor[700]}`}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          onClick={handleClick(true)}
          backgroundColor={!isNoSelected ? primaryColor[600] : 'transparent'}
          padding="12px 20px"
        >
          <Text
            width="max-content"
            {...yesLabelStyles}
            color={!isNoSelected ? negatedPrimaryColor : negatedBgColor}
          >
            {yesLabelText}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          onClick={handleClick(false)}
          backgroundColor={isNoSelected ? primaryColor[600] : 'transparent'}
          padding="12px 20px"
        >
          <Text
            width="max-content"
            {...noLabelStyles}
            color={isNoSelected ? negatedPrimaryColor : negatedBgColor}
          >
            {noLabelText}
          </Text>
        </Flex>
      </Flex>
    );
  }
);

YesNo.displayName = 'YesNo';

const YesNoWrapper: FC<YesNoWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { label, name } = configurations.settings;
  const { text, ...labelStyles } = label || {};
  return (
    <FormField
      key={id}
      name={name || text}
      label={text}
      defaultValue={true}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <YesNo pageItem={pageItem} theme={theme} />
    </FormField>
  );
};

export default YesNoWrapper;
