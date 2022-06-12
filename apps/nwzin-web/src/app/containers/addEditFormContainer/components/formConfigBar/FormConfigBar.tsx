import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { FormConfigBarProps } from './types';
import ConfigSettings from '../configSettings';
import ValidationSettings from '../validationSettings';

const FormConfigBar: FC<FormConfigBarProps> = () => {
  return (
    <Flex
      bg="white"
      boxShadow="2xl"
      height="calc(100% - 60px)"
      width="300px"
      position="fixed"
      top="60px"
      right="0px"
    >
      <Tabs width="100%" variant="line" colorScheme="black">
        <TabList width="100%">
          <Tab
            width="100%"
            padding="15px"
            fontSize="md"
            fontFamily="heading"
            fontWeight="semibold"
            _focus={{ boxShadow: 'none' }}
          >
            Design
          </Tab>
          <Tab
            width="100%"
            fontSize="md"
            fontFamily="heading"
            fontWeight="semibold"
            _focus={{ boxShadow: 'none' }}
          >
            Validations
          </Tab>
          <Tab
            width="100%"
            fontSize="md"
            fontFamily="heading"
            fontWeight="semibold"
            _focus={{ boxShadow: 'none' }}
          >
            Settings
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ConfigSettings />
          </TabPanel>
          <TabPanel>
            <ValidationSettings />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default FormConfigBar;
