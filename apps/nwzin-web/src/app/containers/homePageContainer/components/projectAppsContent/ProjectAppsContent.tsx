import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import projectionImg from '../../../../../assets/projection.png';
import { ProjectAppsContentProps } from './types';

const ProjectAppsContent: FC<ProjectAppsContentProps> = () => {
  return (
    <Flex
      bg="Background"
      height="max-content"
      padding={['24px', '60px 124px']}
      marginTop={['30px', '200px']}
      flexDirection="column"
      gap={['5', '10']}
    >
      <Heading
        fontSize={['xl', '4xl']}
        color="white"
        maxWidth="70%"
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
        src={projectionImg}
        width="100%"
        height="auto"
        objectFit="contain"
      />
    </Flex>
  );
};

export default ProjectAppsContent;
