import {
    Flex,
  } from '@chakra-ui/react';
  import React, { FC } from 'react';
  import Topbar from '../../components/topbar';
  import { HomePageContainerProps } from './types';
  import HomeContent from './components/homeContent';
  import CreateAppsContent from './components/createAppsContent';
  import ProjectAppsContent from './components/projectAppsContent';
  import ContactUs from './components/contactUs';
  import Footer from './components/footer';
  
  const LoginContainer: FC<HomePageContainerProps> = () => {
    return (
      <Flex flexDirection="column" backgroundSize="cover" width="100%">
        <Topbar />
        <HomeContent />
        <CreateAppsContent />
        <ProjectAppsContent />
        <ContactUs />
        <Footer />
      </Flex>
    );
  };
  
  export default LoginContainer;
  