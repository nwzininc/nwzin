import { Heading, Flex, Icon } from '@chakra-ui/react';
import Datagrid from '../../../../components/datagrid';
import React, { FC } from 'react';
import { GrEdit } from 'react-icons/gr';
import { DataStoreListingProps } from './types';
import { DataStore } from '../../types';
import { useAppSelector } from '../../../../../store';
import { getUsersService } from '../../service';
import { useNavigate } from 'react-router-dom';
import { UseTableCellProps } from 'react-table';

const EditCell = (props: UseTableCellProps<DataStore>) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/datastore/edit/${props.row.original.id}`)
  }
  return(
    <Icon cursor="pointer" onClick={handleClick} as={GrEdit} w={4} h={4} />
  )
}

const DataStoreListing: FC<DataStoreListingProps> = () => {
  const { dataStore, pageCount, pageIndex, pageSize} = useAppSelector((state) => state.dataStoreState);
  const navigate = useNavigate()
  const handleAddRow = () => {
    navigate('/datastore/add')
  }
  const columns = [
        {
          Header: 'Name',
          accessor: 'name',
          align: 'right'
        },
        {
          Header: 'View',
          accessor: 'isView',
          align: 'right'
        },
        {
          Header: '',
          accessor: 'settings',
          align: 'right',
          disableSortBy: true,
          Cell: EditCell
        },
 ];
  return (
    <Flex flexDirection="column" gap="30px" width="100%">
      <Heading fontFamily="heading" size="lg">
        Data Stores
      </Heading>
      <Datagrid<DataStore> 
       data={dataStore}
       columns={columns as any} 
       height={window.innerHeight - 160} 
       pageIndex={pageIndex}
       pageSize={pageSize}
       pageCount={pageCount}
       dataService={getUsersService}
       addRowButtonLabel="Add Data Store"
       handleAddRow={handleAddRow}
      />
    </Flex>
  );
};

export default DataStoreListing;
