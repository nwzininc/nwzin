import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useTable, useFlexLayout, useSortBy, TableOptions } from 'react-table';
import { DatagridProps, PaginationTableInstance } from './types';
import { useAppDispatch } from '../../../store';
import DatagridHeader from './components/datagridHeader';

const Datagrid = <D extends object>({
  data,
  columns,
  height,
  dataService,
  pageIndex,
  pageCount,
  addRowButtonLabel,
  handleAddRow
}: DatagridProps<D>) => {
  const [selectedPageIndex, setPageIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch<any, any>(
      dataService({
        pageIndex: selectedPageIndex,
        pageSize: Math.floor((window.innerHeight - 264) / 52),
      })
    );
  }, [selectedPageIndex]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<D>(
      {
        columns,
        data,
      } as unknown as TableOptions<D>,
      useSortBy,
      useFlexLayout
    ) as unknown as PaginationTableInstance<D>;
  return (
    <Box>
      <DatagridHeader
        handleAddRow={handleAddRow}
        setPageIndex={setPageIndex}
        selectedPageIndex={selectedPageIndex}
        pageCount={pageCount}
        pageIndex={pageIndex}
        addRowButtonLabel={addRowButtonLabel}
      />
      <Box width="100%" overflow="hidden" overflowX="scroll">
        <Table {...getTableProps()} height={height} variant="simple">
          <Thead backgroundColor="gray.50">
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    textAlign="center"
                  >
                    {column.render('Header')}
                    <Box as="span" pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </Box>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      textAlign="center"
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Datagrid;
