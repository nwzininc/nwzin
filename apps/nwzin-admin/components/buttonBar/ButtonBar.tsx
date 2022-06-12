import { Flex, Text, Button, Container } from '@chakra-ui/react';
import Color from 'color';
import React, { FC } from 'react';
import { ButtonBarProps } from './types';

const ButtonBar: FC<ButtonBarProps> = ({ pageItem, theme }) => {
  const { configurations } = pageItem;
  const { primaryColor } = theme;
  const { showResetButton, showBackButton, showSubmitButton, submitButtonlabel, resetButtonlabel, backButtonlabel } =
    configurations.settings;
  const negatedColor = Color(primaryColor[500]).isDark()
    ? 'white'
    : 'blackAlpha.200';
  return (
    <Flex
      position="fixed"
      left="0px"
      bottom="0px"
      width="100%"
      zIndex={1000}
      backgroundColor="#fff"
      padding={['8px 8px', '24px 16px']}
    >
      <Container maxW={['100%', '800px']}>
        <Flex
          justifyContent="flex-end"
          gap={['8px', '15px']}
          alignItems="center"
        >
          {showBackButton && (
            <Button size="md" variant="outline" type="reset" marginRight="auto">
             {backButtonlabel?.text}
            </Button>
          )}
          {showResetButton && (
            <Button size="md" variant="outline" type="reset">
              {resetButtonlabel?.text}
            </Button>
          )}
          {showSubmitButton && (
            <Button
              size="md"
              variant="solid"
              type="submit"
              _focus={{
                backgroundColor: primaryColor[600],
              }}
              backgroundColor={primaryColor[500]}
              color={negatedColor}
            >
              {submitButtonlabel?.text}
            </Button>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};

export default ButtonBar;
