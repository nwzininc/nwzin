import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { componentListTypes } from './constants';
import { ComponentBrowserProps, DraggableFormFieldProps } from './types';

const DraggableFormField: FC<DraggableFormFieldProps> = ({
  id,
  icon,
  label,
  bgColor,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_FIELD',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Flex
      ref={drag}
      boxShadow="sm"
      _hover={{ bg: 'white' }}
      cursor="pointer"
      alignItems="center"
      key={id}
      gap="15px"
      width="100%"
      padding="8px 16px"
      border={`1px solid #ccc`}
      bgColor="whitesmoke"
      borderRadius="4px"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        height="30px"
        width="30px"
        bgColor={bgColor}
        borderRadius="4px"
      >
        <Icon as={icon} size="20px" color="white" />
      </Flex>
      <Text
        userSelect="none"
        fontFamily="heading"
        color="blackAlpha.900"
        fontWeight="semibold"
      >
        {label}
      </Text>
    </Flex>
  );
};

const ComponentBrowser: FC<ComponentBrowserProps> = () => {
  return (
    <Flex
      maxHeight="100%"
      overflow="auto"
      gap="20px"
      bg="white"
      padding="16px 24px"
      width="100%"
      flexDirection="column"
    >
      <Heading
        fontFamily="heading"
        fontWeight="bold"
        userSelect="none"
        color="secondary"
        size="md"
      >
        Form Fields
      </Heading>
      <Flex gap="10px" flexDirection="column">
        {componentListTypes.map(({ id, label, icon, bgColor }) => {
          return (
            <DraggableFormField
              key={id}
              label={label}
              icon={icon}
              bgColor={bgColor}
              id={id}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ComponentBrowser;
