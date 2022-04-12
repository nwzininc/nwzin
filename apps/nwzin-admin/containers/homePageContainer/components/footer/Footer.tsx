import { Stack, Text } from '@chakra-ui/react';
import Logo from '../../../../components/logo';
import React, { FC } from 'react';
import { FooterProps } from './types';

const Footer:FC<FooterProps> = () => {
    return(
        <Stack spacing={2} bg="primary" color="whiteAlpha.600" width="100%" padding={['20px 30px', '60px 250px', '60px 350px']} >
            <Logo />
             <Text>nwzin pvt ltd.</Text>
             <Text>Bangalore-560068</Text>
             <Text>KA, INDIA</Text>
        </Stack>
    )
};

export default Footer;