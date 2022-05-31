/* eslint-disable no-unsafe-optional-chaining */
import { Box, Flex, forwardRef, Input } from '@chakra-ui/react';
import React, { ChangeEvent, FC, useState } from 'react';
import _get from 'lodash/get';
import _set from 'lodash/set';
import { PaddingConfiguratorProps, PaddingInputProps } from './types';

const PaddingInput: FC<PaddingInputProps> = forwardRef(
  ({ onChange, value, onBlur, label }, ref) => {
    return (
      <Input
        variant="unstyled"
        size="xs"
        ref={ref}
        cursor="pointer"
        textAlign="center"
        value={value}
        onChange={onChange}
        width="30px"
        height="20px"
        type="number"
        max={99}
        onBlur={onBlur}
        maxLength={2}
        _focus={{
          borderRadius: 1,
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderColor: 'blue.400',
        }}
      />
    );
  }
);

const indexMapping = {
  '0': 'top',
  '1': 'right',
  '2': 'bottom',
  '3': 'left',
};

const PaddingConfigurator: FC<PaddingConfiguratorProps> = ({
  value,
  onChange,
  configLabel
}) => {
  const ref = React.createRef();
  const spliValue = value?.split(' ').reduce(
    (acc, currentValue, currentIndex) => {
      const key = _get(
        indexMapping,
        currentIndex.toString()
      ) as unknown as string;
      _set(acc, key, currentValue?.replace('px', ''));
      return acc;
    },
    { left: 0, right: 0, top: 0, bottom: 0 }
  );
  const { left, right, top, bottom } = spliValue;

  const [currentSelection, setSelection] = useState(configLabel);
  const handleChange =
    (key: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = value
        ?.split(' ')
        .map((currentValue: string, currentIndex: number) => {
          return key === currentIndex
            ? `${event.target.value}px`
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
    setSelection(configLabel)
  }
  return (
    <Flex
      width="max-content"
      border="1px solid transparent"
      alignItems="baseline"
      padding="3px"
      borderRadius="4px"
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
      <Box onClick={handleClick('Top')}>
        <PaddingInput
          ref={ref as unknown as any}
          key="top"
          onBlur={handleBlur}
          onChange={handleChange(0)}
          value={top}
        />
      </Box>
      <Box onClick={handleClick('Right')}>
        <PaddingInput
          key="right"
          onChange={handleChange(1)}
          onBlur={handleBlur}
          value={right}
        />
      </Box>
      <Box onClick={handleClick('Bottom')}>
        <PaddingInput
          key="bottom"
          onBlur={handleBlur}
          onChange={handleChange(2)}
          value={bottom}
        />
      </Box>
      <Box onClick={handleClick('Left')}>
        <PaddingInput
          key="left"
          onChange={handleChange(3)}
          onBlur={handleBlur}
          value={left}
        />
      </Box>
    </Flex>
  );
};

PaddingConfigurator.defaultProps = {
  value: '0px 0px 0px 0px',
  configLabel: 'Padding'
};
export default PaddingConfigurator;
