import React, { FC, memo } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { LogoProps } from './types';
import { useAppSelector } from '../../../store';

const Logo: FC<LogoProps> = memo(({ color }) => {
  const appMeta = useAppSelector((state)=> state.authState?.appMeta);

  return (
    <Flex padding="24px 0px" height="min-content" justifyContent="center" alignItems="center" width="100%">
      <Image src={appMeta?.logoUrl} width="60px" height="auto" />
    </Flex>
  );
});

export default Logo;
