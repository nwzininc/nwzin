import {  Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({ pageItem }) => {
  const { configurations } = pageItem;
  const { text, size, ...headingStyles } = configurations.settings.text;
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

export default Heading;
