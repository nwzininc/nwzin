import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  LinkBox,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../logo';
import { TopbarProps } from './types';

const Topbar: FC<TopbarProps> = ({ isLoggedIn, showLogout }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      height="70px"
      width="100%"
      alignItems="center"
      padding={['24px', '0px 200px', '0px 300px']}
      position="fixed"
      top="0px"
      zIndex="modal"
      bg="secondary"
    >
      <Link href="/" passHref>
        <LinkBox>
          <Logo />
        </LinkBox>
      </Link>
      {!isLoggedIn && (
        <>
          <Flex
            justifyContent="flex-end"
            width="100%"
            alignItems="center"
            gap="30px"
            display={['none', 'flex']}
          >
            <Link href="/learn" passHref>
              <Box
                color="white"
                fontWeight="bold"
                fontFamily="heading"
                cursor="pointer"
              >
                Learn
              </Box>
            </Link>
            <Link href="/pricing" passHref>
              <Box
                color="white"
                fontWeight="bold"
                fontFamily="heading"
                cursor="pointer"
              >
                Pricing
              </Box>
            </Link>
            <Link href="/contact" passHref>
              <Box
                color="white"
                fontWeight="bold"
                fontFamily="heading"
                cursor="pointer"
              >
                Contact
              </Box>
            </Link>
            <Link href="/login" passHref>
              <Button
                bg="primary"
                fontFamily="heading"
                color="white"
                marginLeft="50px"
              >
                Login
              </Button>
            </Link>
          </Flex>
          <Flex
            justifyContent="flex-end"
            width="100%"
            display={['flex', 'none']}
          >
            <Button variant="link" ref={btnRef as any} onClick={onOpen}>
              <HamburgerIcon
                w={6}
                h={6}
                onClick={onOpen}
                color="white"
                cursor="pointer"
              />
            </Button>
            <Drawer
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
                    <Link href="/learn" passHref>
                      <Box
                        color="primary"
                        fontWeight="bold"
                        textAlign="center"
                        fontFamily="heading"
                      >
                        Learn
                      </Box>
                    </Link>
                    <Link href="/pricing" passHref>
                      <Box
                        color="primary"
                        fontWeight="bold"
                        textAlign="center"
                        fontFamily="heading"
                      >
                        Pricing
                      </Box>
                    </Link>
                    <Link href="/contact" passHref>
                      <Box
                        color="primary"
                        fontWeight="bold"
                        textAlign="center"
                        fontFamily="heading"
                      >
                        Contact
                      </Box>
                    </Link>
                    <Link href="/login" passHref>
                      <Button
                        bg="primary"
                        fontFamily="heading"
                        textAlign="center"
                        color="white"
                      >
                        Login
                      </Button>
                    </Link>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </>
      )}
      {isLoggedIn && showLogout && (
        <Flex
          justifyContent="flex-end"
          width="100%"
          alignItems="center"
          gap="30px"
          display={['none', 'flex']}
        >
          <Link href="/login" passHref>
            <Button
              bg="primary"
              fontFamily="heading"
              textAlign="center"
              color="white"
            >
              Logout
            </Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Topbar;
