import {
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { FcSettings } from 'react-icons/fc';
import { FaDatabase } from 'react-icons/fa';
import { MdColorLens } from 'react-icons/md';
import { FormConfigBarProps } from './types';
import ConfigSettings from '../configSettings';

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
      <Tabs width="100%" variant="line" colorScheme="cyan">
        <TabList width="100%">
          <Tab width="100%" padding="15px" fontWeight="semibold">
            <Icon as={FcSettings} title="Settings" />
          </Tab>
          <Tab width="100%" fontWeight="semibold" >
            <Icon as={MdColorLens} title="Styles"  />
          </Tab>
          <Tab width="100%" fontWeight="semibold">
            <Icon as={FaDatabase} title="Data Mapping"/>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ConfigSettings />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
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
