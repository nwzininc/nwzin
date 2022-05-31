import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { EffectConfiguratorProps, EffectIconProps } from './types';

const boxStyles: FlexProps = {
  borderRadius: 2,
  padding: '3px 6px',
};
const selectedStyle: FlexProps = {
  backgroundColor: 'gray.300',
};

const EffectIcon: FC<EffectIconProps> = ({
  isSelected,
  handleClick,
  header,
}) => {
  const boxProps = isSelected ? { ...boxStyles, ...selectedStyle } : boxStyles;
  return (
    <Flex
      {...boxProps}
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
      fontSize="sm"
      justifyContent="center"
    >
      {header}
    </Flex>
  );
};

const EffectConfigurator: FC<EffectConfiguratorProps> = ({
  value,
  onChange,
}) => {
  const handleClick = (value: string) => () => {
    onChange({
      target: {
        value: value,
      },
    });
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
      gap="10px"
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        height={'30px'}
        boxShadow="revert"
        alignItems="center"
      >
        Effect
      </Flex>
      <Flex>
       <EffectIcon
          header="Border"
          handleClick={handleClick('base')}
          key="base"
          isSelected={value === 'base'}
        />
        <EffectIcon
          header="Base"
          handleClick={handleClick('lg')}
          key="lg"
          isSelected={value === 'lg'}
        />
        <EffectIcon
          header="Deep"
          handleClick={handleClick('xl')}
          key="xl"
          isSelected={value === 'xl'}
        />
        <EffectIcon
          header="Dark"
          handleClick={handleClick('dark-lg')}
          key="dark-lg"
          isSelected={value === 'dark-lg'}
        />
      </Flex>
    </Flex>
  );
};

export default EffectConfigurator;
