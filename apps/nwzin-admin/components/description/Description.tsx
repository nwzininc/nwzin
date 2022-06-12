import {  Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { DescriptionProps } from './types';

const Description: FC<DescriptionProps> = ({ pageItem }) => {
  const { configurations } = pageItem;
  const { text, size, ...headingStyles } = configurations.settings.description;
  const { containerStyles} = configurations.settings;
  console.log(configurations.settings.text, 'headingStyles')
  return (
     <Text
        fontFamily="heading"
        width="100%"
        userSelect="none"
        fontSize={size}
        {...headingStyles}
        {...containerStyles}
    >
        {text}
    </Text>
  )
};

export default Description;
