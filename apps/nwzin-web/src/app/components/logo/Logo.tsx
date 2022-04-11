import React, { FC, memo } from 'react';
import { Box } from '@chakra-ui/react';
import { LogoProps } from './types';

const Logo: FC<LogoProps> = memo(({ color }) => {
  return (
    <Box
      fontSize="3xl"
      fontWeight="extrabold"
      color={color || 'white'}
      fontFamily="heading"
    >
      nwzin
    </Box>
  );
});

export default Logo;
