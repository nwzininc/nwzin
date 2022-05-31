import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  Icon,
  Input,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../logo';
import { TopbarProps } from './types';

const Topbar: FC<TopbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      height="70px"
      width="calc(100% - 200px)"
      bg="white"
      alignItems="center"
      padding={['24px']}
      position="fixed"
      top="0px"
      left="200px"
      zIndex="modal"
      boxShadow="sm"
    >
      <Flex justifyContent="flex-end" width="100%">
         <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        {/* <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef as any}
        >
          <DrawerOverlay />
          <DrawerContent bg="white" padding={'16px'}>
              <DrawerHeader>
                 <Logo color="primary" />
                 <DrawerCloseButton />
              </DrawerHeader>
            <DrawerBody display={'flex'} justifyContent="center">
              <Stack spacing={25}>
                <Link to="/learn">
                  <Box color="primary" fontWeight="bold" textAlign="center" fontFamily="heading">
                    Learn
                  </Box>
                </Link>
                <Link to="/pricing">
                  <Box color="primary" fontWeight="bold" textAlign="center" fontFamily="heading">
                    Pricing
                  </Box>
                </Link>
                <Link to="#contact">
                  <Box color="primary" fontWeight="bold" textAlign="center" fontFamily="heading">
                    Contact
                  </Box>
                </Link>
                <Link to="/login">
                  <Button bg="primary" fontFamily="heading" textAlign="center" color="white">
                    Login
                  </Button>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer> */}
      </Flex>
    </Flex>
  );
};

export default Topbar;
