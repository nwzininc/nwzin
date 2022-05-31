import { Heading, Flex, Icon } from '@chakra-ui/react';
import Datagrid from '../../../../components/datagrid';
import React, { FC } from 'react';
import { GrEdit } from 'react-icons/gr';
import { UserListingProps } from './types';
import { User } from '../../types';
import { useAppSelector } from '../../../../../store';
import { getUsersService } from '../../service';
import { useNavigate } from 'react-router-dom';

const UserListing: FC<UserListingProps> = () => {
  const { users, pageCount, pageIndex, pageSize} = useAppSelector((state) => state.userState);
  const navigate = useNavigate()
  const handleAddRow = () => {
    navigate('users/add')
  }
  const columns = [
        {
          Header: 'Name',
          accessor: 'name',
          align: 'right'
        },
        {
          Header: 'Email',
          accessor: 'email',
          align: 'center',
        },
        {
          Header: 'Role',
          accessor: 'role',
          align: 'right'
        },
        {
          Header: '',
          accessor: 'settings',
          align: 'right',
          disableSortBy: true,
          Cell: () => <Icon as={GrEdit} w={4} h={4} />
        },
 ];
  return (
    <Flex flexDirection="column" gap="30px" width="100%">
      <Heading fontFamily="heading" size="lg">
        Users
      </Heading>
      <Datagrid<User> 
       data={users}
       columns={columns as any} 
       height={window.innerHeight - 160} 
       pageIndex={pageIndex}
       pageSize={pageSize}
       pageCount={pageCount}
       dataService={getUsersService}
       addRowButtonLabel="Add User"
       handleAddRow={handleAddRow}
      />
    </Flex>
  );
};

export default UserListing;
