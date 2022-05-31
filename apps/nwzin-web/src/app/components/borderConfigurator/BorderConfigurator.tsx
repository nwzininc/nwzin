/* eslint-disable no-unsafe-optional-chaining */
import { Box, Flex, FlexProps, Icon, Input, useOutsideClick } from '@chakra-ui/react';
import React, { ChangeEvent, FC, useState } from 'react';
import _get from 'lodash/get';
import _set from 'lodash/set';
import { CgBorderStyleDashed, CgBorderStyleDotted, CgBorderStyleSolid } from 'react-icons/cg';
import {
  BorderConfiguratorProps,
  BorderStyleProps,
  StyleIconProps,
} from './types';
import ColorPicker from '../colorPicker';

const indexMapping = {
  '0': 'width',
  '1': 'style',
  '2': 'color',
};

const boxStyles: FlexProps = {
  borderRadius: 2,
  padding: '3px 6px',
};
const selectedStyle: FlexProps = {
  backgroundColor: 'gray.300',
};

const StyleIcon: FC<StyleIconProps> = ({
  iconType,
  isSelected,
  handleClick,
}) => {
  const boxProps = isSelected ? { ...boxStyles, ...selectedStyle } : boxStyles;
  return (
    <Flex
      {...boxProps}
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
      justifyContent="center"
    >
      <Icon cursor="pointer" boxSize="15px" as={iconType} />
    </Flex>
  );
};
const BorderStyle: FC<BorderStyleProps> = ({ value, onBlur, onChange, handleClick }) => {
  const ref = React.useRef()
  useOutsideClick({
    ref: ref as unknown as any,
    handler: () => onBlur(),
  })
  const handleChange = (value: string) => () => {
    onChange({
      target: {
        value,
      },
    } as unknown as any);
  };
  return (
    <Flex
      width="max-content"
      border="1px solid transparent"
      _hover={{
        borderColor: 'gray.400',
      }}
      onClick={handleClick}
      ref={ref as unknown as any}
    >
      <StyleIcon
        iconType={CgBorderStyleSolid}
        handleClick={handleChange('solid')}
        key="solid"
        isSelected={value === 'solid'}
      />
      <StyleIcon
        iconType={CgBorderStyleDotted}
        handleClick={handleChange('dashed')}
        key="dashed"
        isSelected={value === 'dashed'}
      />
      <StyleIcon
        iconType={CgBorderStyleDashed}
        handleClick={handleChange('dotted')}
        key="dotted"
        isSelected={value === 'dotted'}
      />
    </Flex>
  );
};
const BorderConfigurator: FC<BorderConfiguratorProps> = ({
  value,
  onChange,
}) => {
  const ref = React.createRef();
  const { width, style, color } = value?.split(' ').reduce(
    (acc, currentValue, currentIndex) => {
      const key = _get(
        indexMapping,
        currentIndex.toString()
      ) as unknown as string;
      _set(acc, key, currentValue?.replace('px', ''));
      return acc;
    },
    { width: 0, style: 'solid', color: 'transparent' }
  );

  const [currentSelection, setSelection] = useState('Border');
  const handleChange =
    (key: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = value
        ?.split(' ')
        .map((currentValue: string, currentIndex: number) => {
          const suffix = key=== 0 ? 'px' :'';
          return key === currentIndex
            ? `${event.target.value}${suffix}`
            : currentValue;
        })
        .join(' ');
      onChange({
        target: {
          value: newValue,
        },
      });
    };
  const handleClick = (value: string) => () => {
    setSelection(value);
  };
  const handleFocusTop = () => {
    (ref as unknown as any)?.current?.focus();
  };
  const handleBlur = () => {
    setSelection('Border');
  };
  return (
    <Flex
      width="max-content"
      border="1px solid transparent"
      alignItems="center"
      padding="3px"
      borderRadius="4px"
      cursor="pointer"
      _hover={{
        borderColor: '#000',
      }}
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        width={'60px'}
        height={'30px'}
        alignItems="center"
        onClick={handleFocusTop}
      >
        {currentSelection}
      </Flex>
      <Box onClick={handleClick('B-width')}>
        <Input
          variant="unstyled"
          size="xs"
          ref={ref as unknown as any}
          cursor="pointer"
          textAlign="center"
          value={width}
          onChange={handleChange(0)}
          width="30px"
          height="20px"
          type="number"
          max={99}
          onBlur={handleBlur}
          maxLength={2}
          _focus={{
            borderRadius: 1,
            borderRight: '1px solid',
            borderLeft: '1px solid',
            borderColor: 'blue.400',
          }}
        />
      </Box>
      <BorderStyle 
         value={style as unknown as any} 
         onChange={handleChange(1)} 
         onBlur={handleBlur}
         handleClick={handleClick('B-style')}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        marginLeft="10px"
        onClick={handleClick('B-color')}
      >
        <ColorPicker
          name="color"
          id="borderColor"
          onChange={handleChange(2)}
          value={color}
        />
      </Flex>
    </Flex>
  );
};

BorderConfigurator.defaultProps = {
  value: '1px solid #000',
};
export default BorderConfigurator;
