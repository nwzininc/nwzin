import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import Link  from 'next/link';
import { HomeContentProps } from './types';

const HomeContent: FC<HomeContentProps> = () => {
  return (
    <Flex height={["90vh","80vh"]} width="100%" position="relative">
      <Image src="/assets/images/bg.png" alt="background" position="absolute" zIndex="base" width="100%" height="100%" objectFit="cover" /> 
    <Flex
      flexDirection="column"
      width="100%"
      padding={["24px","124px"]}
      gap="40px"
      justifyContent="center"
      height="100%"
      zIndex="banner"
      position="relative"
      backgroundColor="#000000a6"
    >
      <Heading color="white" fontFamily="heading" size="3xl" fontWeight="bold">
        Data collection made simple
      </Heading>
      <Text color="white" fontFamily="heading" fontSize="2xl" width={["100%", "50%"]}>
        nwzin helps non-devlopers to create Android and Web applications to
        collect, analysize and store data.
      </Text>
      <Flex gap={["30px", "20px"]} flexDirection={["column", "row"]}>
        <Link href="/login" passHref><Button size="lg" fontFamily="heading"> Login </Button></Link>
        <Link href="/signUp" passHref><Button size="lg" fontFamily="heading"  bg="primary" color="whiteAlpha.800"> Try for Free </Button></Link>
      </Flex>
    </Flex>
    </Flex>
  );
};

export default HomeContent;
