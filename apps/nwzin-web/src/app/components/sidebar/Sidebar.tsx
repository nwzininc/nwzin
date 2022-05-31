import { Flex } from '@chakra-ui/react';
import { GrUser, GrTask, GrFlows, GrWorkshop, GrDatabase, GrGroup,GrServers, GrHomeRounded, GrServices, GrCycle } from 'react-icons/gr';
import React, { FC } from 'react';
import Logo from '../logo';
import { SidebarProps } from './types';
import SidebarItem from './components/sidebarItem';

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Flex
      bg="whiteAlpha.900"
      zIndex="modal"
      position="fixed"
      left="0px"
      top="0px"
      height="calc(100vh)"
      width="200px"
      boxShadow="sm"
      flexDirection="column"
    >
      <Logo />
      <Flex flexDirection="column" marginTop="30px" height="100%" >
        <Flex flexDirection="column" gap="15px" flex="2">
        <SidebarItem label="Home" icontype={GrHomeRounded} uri="/" />
        <SidebarItem label="Users" icontype={GrUser} uri="/users"  />
        <SidebarItem label="Groups" icontype={GrGroup} uri="/groups" />
        <SidebarItem label="Forms" icontype={GrWorkshop} uri="/forms" />
        <SidebarItem label="Tasks" icontype={GrTask} uri="/tasks" />
        <SidebarItem label="Task Flow" icontype={GrFlows} uri="/workflow" />
        <SidebarItem label="Data Store" icontype={GrDatabase}  uri="/datastore"/>
        </Flex>
        <Flex justifyContent="flex-end" flexDirection="column" flex="1" gap="15px" marginBottom="70px">
         <SidebarItem label="Settings" icontype={GrServices} uri="/settings" />
         <SidebarItem label="Billing Cycle" icontype={GrCycle} uri="/billing"/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
