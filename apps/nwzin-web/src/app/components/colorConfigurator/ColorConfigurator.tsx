/* eslint-disable no-unsafe-optional-chaining */
import { Flex } from '@chakra-ui/react';
import _case from 'lodash/startCase'
import { ColorConfiguratorProps } from './types';
import ColorPicker from '../colorPicker';
import { FC } from 'react';

const ColorConfigurator: FC<ColorConfiguratorProps> = ({
  value,
  onChange,
  configLabel,
}) => {
  return (
    <Flex
      width="auto"
      border="1px solid transparent"
      alignItems="center"
      padding="3px"
      borderRadius="4px"
      _hover={{
        borderColor: '#000',
      }}
      gap="10px"
      cursor="pointer"
    >
      <Flex
        textAlign="left"
        fontSize="sm"
        fontWeight="bold"
        fontFamily="heading"
        height={'30px'}
        alignItems="center"
      >
        {_case(configLabel)}
      </Flex>
       <Flex alignItems="center">
        <ColorPicker
          name={'color'}
          id={'color'}
          onChange={onChange}
          value={value}
        />
       </Flex>
     
    </Flex>
  );
};

ColorConfigurator.defaultProps = {
  value: '',
};
export default ColorConfigurator;
