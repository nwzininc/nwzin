import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Topbar from '../../components/topbar';
import { DashboardContainerProps } from './types';

const DashboardContainer:FC<DashboardContainerProps> = () => {
    return(
        <Flex position="relative" top="70px" left="200px" height="calc(100vh - 70px)" width="calc(100% - 200px)">
            <Topbar />
            <Sidebar />
            <Outlet />
        </Flex>
    )
};

export default DashboardContainer;