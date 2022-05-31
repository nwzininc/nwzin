import { Flex, Text, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SidebarItemProps } from './types';

const SidebarItem: FC<SidebarItemProps> = ({ label, icontype, uri }) => {
  // const navigate = useNavigate();
  // // const handleClick = () => {
  // //   navigate(uri);
  // // };
  return (
    <NavLink
      style={({ isActive }) => {
              return {
                backgroundColor: isActive ?  "#eeeeee" : "",
                padding:"10px"
              };
            }}
        to={uri}
        key={uri}
      >
    <Flex
      cursor="pointer"
      // onClick={handleClick}
      justifyContent="flex-start"
      padding="5px 0px 0px 30px"
      width="100%"
      gap="10px"
      alignItems="center"
    >
      <Icon as={icontype} w={6} h={6} color="blackAlpha.800" />
      <Text fontFamily="heading" color="blackAlpha.800">
        {label}
      </Text>
    </Flex>
    </NavLink>
  );
};

export default SidebarItem;
