import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProjectAppsContentProps } from './types';

const ProjectAppsContent: FC<ProjectAppsContentProps> = () => {
  return (
    <Flex
      bg="secondary"
      height="max-content"
      padding={['20px 30px', '60px 250px', '60px 350px']} 
      marginTop={['30px', '40px']}
      flexDirection="column"
      gap={['5', '10']}
    >
      <Heading
        fontSize={['xl', '4xl']}
        color="white"
        maxWidth={["100%", "70%"]}
        fontFamily="heading"
        fontWeight="bold"
      >
        Store Your Data and Analyse your data
      </Heading>
      <Text fontFamily="heading" fontSize={["small","xl"]} color="white" fontWeight="bold">
        Seamlessly collect and project data on apps and analyse data with our
        visualization tool.
      </Text>
      <Image
        src="/assets/images/projection.png"
        alt="projection"
        width="100%"
        height="auto"
        objectFit="contain"
      />
    </Flex>
  );
};

export default ProjectAppsContent;
