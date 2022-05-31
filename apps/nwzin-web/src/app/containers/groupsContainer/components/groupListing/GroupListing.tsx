import { Heading, Flex, Icon } from '@chakra-ui/react';
import Datagrid from '../../../../components/datagrid';
import React, { FC } from 'react';
import { GrEdit } from 'react-icons/gr';
import { GroupListingProps } from './types';
import { useAppSelector } from '../../../../../store';
import { getGroupsService } from '../../service';
import { Group } from '../../types';
import { useNavigate } from 'react-router-dom';
import { UseTableCellProps } from 'react-table';

const EditCell = (props: UseTableCellProps<Group>) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/groups/edit/${props.row.original.id}`)
  }
  return(
    <Icon cursor="pointer" onClick={handleClick} as={GrEdit} w={4} h={4} />
  )
}
const GroupListing: FC<GroupListingProps> = () => {
  const { groups, pageCount, pageIndex, pageSize} = useAppSelector((state) => state.groupState);
  const navigate = useNavigate()
  const columns = [
        {
          Header: 'Name',
          accessor: 'name',
          align: 'right'
        },
        {
          Header: 'User Count',
          accessor: 'usersCount',
          align: 'center',
        },
        {
          Header: '',
          accessor: 'settings',
          align: 'right',
          disableSortBy: true,
          Cell: EditCell
        },
 ];
const handleAddRow = () => {
  navigate('/groups/add')
}
  return (
    <Flex flexDirection="column" gap="30px" width="100%">
      <Heading fontFamily="heading" size="lg">
        Groups
      </Heading>
      <Datagrid<Group> 
       data={groups}
       columns={columns as any} 
       height={window.innerHeight - 160} 
       pageIndex={pageIndex}
       pageSize={pageSize}
       pageCount={pageCount}
       handleAddRow={handleAddRow}
       dataService={getGroupsService}
       addRowButtonLabel="Add Group"
      />
    </Flex>
  );
};

export default GroupListing;
