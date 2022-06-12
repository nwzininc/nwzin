import { PhoneFormatProps, PhoneValue, PhoneWrapperProps } from './types';
import { Box, Flex, Icon, Text, Input as ChakraInput } from '@chakra-ui/react';
import NumberFormat, {
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import React, { FC, forwardRef, useEffect, useState } from 'react';
import Flag from 'react-world-flags';
import { Tooltip } from 'react-tippy';
import FormField from '../formField';
import { MdArrowDropDown } from 'react-icons/md';
import _values from 'lodash/values';
import _replace from 'lodash/replace';
import { Code, CountryRecordByID } from './constants';
import Color from 'color';

const FlagOption = ({
  code,
  handleOptionClick,
  primaryColor,
  negatedColor,
}) => {
  return (
    <Flex
      cursor="pointer"
      onClick={handleOptionClick(code, CountryRecordByID[code].ISD)}
      key={code}
      borderBottom="0.5px solid #ccc"
      _hover={{
        backgroundColor: primaryColor[500],
        color: negatedColor,
      }}
      color={primaryColor[500]}
      padding="8px 16px"
    >
      <Flex gap="10px" alignItems="center">
        <Flag code={code} height="40px" width="40px" />
        <Text fontFamily="heading">{CountryRecordByID[code].name}</Text>
        <Text fontFamily="heading" fontWeight="extrabold">
          {CountryRecordByID[code].ISD}
        </Text>
      </Flex>
    </Flex>
  );
};

const PhoneFormat: FC<PhoneFormatProps> = forwardRef<PhoneFormatProps, any>(
  ({ pageItem, theme, onChange, value, name }, ref) => {
    const { id, configurations } = pageItem;
    const { backgroundColor, primaryColor } = theme;
    const { text: placeholder, ...placeholderStyles } =
      configurations.settings.placeholder;
    const { inputStyles } = configurations.settings;
    const negatedColor = Color(primaryColor[500]).isDark()
      ? 'white'
      : 'blackAlpha.200';
  
    const [currentCode, setCurrentCode] = useState<Omit<PhoneValue, "phone">>({
      countryCode: Code.India,
      ISD: "+91"
    });

    const handleOptionClick = (countryCode: Code, ISD: string) => () => {
      setCurrentCode({
        countryCode,
        ISD
      });
    };
    useEffect(()=>{
      if(value?.countryCode && value?.countryCode !== currentCode){
        setCurrentCode({
          countryCode: value.countryCode,
          ISD: value.ISD
        })
      }
    },[value]);

    const handleValueChange = (
      valueObject: NumberFormatValues,
    ) => {
      onChange({
        target: {
          value: {
            phone: valueObject.value,
            ...currentCode,
          },
        },
      });
    };
    const phoneFormat = _replace(
      CountryRecordByID[currentCode?.countryCode]?.phone,
      new RegExp('9', 'g'),
      '#'
    );
    return (
      <>
       <Tooltip
          trigger="click"
          interactive={false}
          position="bottom-start"
          arrow={false}
          distance={0}
          html={
            <Flex
              overflow="auto"
              marginTop="20px"
              backgroundColor={backgroundColor[500]}
              borderRadius="8px"
              boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              width="364px"
              maxHeight="400px"
              zIndex={1000}
              flexDirection="column"
            >
              {_values(Code).map((code) => {
                return (
                  <FlagOption
                    code={code}
                    key={code}
                    primaryColor={primaryColor}
                    negatedColor={negatedColor}
                    handleOptionClick={handleOptionClick}
                  />
                );
              })}
            </Flex>
          }
        >
          <Flex
            gap="5px"
            alignItems="center"
            position="absolute"
            zIndex={1000}
            height="54px"
            left="16px"
            top="30px"
          >
            <Flag code={currentCode?.countryCode} height="40px" width="40px" />
            <Icon as={MdArrowDropDown} />
          </Flex>
        </Tooltip>
        <NumberFormat
          key={id}
          customInput={ChakraInput}
          onValueChange={handleValueChange}
          value={value?.phone}
          name={name}
          thousandSeparator={false}
          getInputRef={ref}
          format={phoneFormat ? phoneFormat : ""}
          placeholder={CountryRecordByID[currentCode?.countryCode]?.phone}
          _placeholder={{
            ...placeholderStyles,
            color: primaryColor[600],
            opacity: 0.6,
          }}
          {...inputStyles}
          borderColor={primaryColor[800]}
          _focus={{
            ...inputStyles,
            borderWidth: '1.2px',
            borderColor: primaryColor[900],
            paddingLeft: '84px',
          }}
          paddingLeft="84px"
          color={primaryColor[800]}
        />
      </>
    );
  }
);

PhoneFormat.displayName = 'PhoneFormat';

const PhoneWrapper: FC<PhoneWrapperProps> = ({ pageItem, theme }) => {
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
        <PhoneFormat pageItem={pageItem} theme={theme} />
      </FormField>
  );
};

export default PhoneWrapper;
