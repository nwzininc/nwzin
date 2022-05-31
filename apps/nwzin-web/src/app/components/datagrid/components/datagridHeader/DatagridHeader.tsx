import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';
import {
  Flex,
  Button,
  Tooltip,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { GrFilter, GrDownload } from 'react-icons/gr';
import React, { FC, memo } from 'react';
import { DatagridHeaderProps } from './types';

const DatagridHeader: FC<DatagridHeaderProps> = memo(
  ({ setPageIndex, selectedPageIndex, pageIndex, pageCount, addRowButtonLabel, handleAddRow }) => {
    return (
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
        borderRadius="10px 10px 0px 0px "
        padding="0px 24px"
        backgroundColor="gray.50"
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Tooltip label="Filter">
          <Button variant="outline" size="sm">
            <Icon
              aria-label="Filter"
              color="gray.500"
              as={GrFilter}
              w={4}
              h={4}
            />
          </Button>
        </Tooltip>
        <Flex
          justifyContent="space-between"
          m={4}
          alignItems="center"
          width="max-content"
          gap="10px"
        >
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                onClick={() => setPageIndex(0)}
                icon={<ArrowLeftIcon h={2} w={2} />}
                mr={4}
                color="gray.500"
                size="sm"
                aria-label={''}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                disabled={selectedPageIndex === 0}
                onClick={() => setPageIndex(selectedPageIndex - 1)}
                icon={<ChevronLeftIcon h={3} w={3} />}
                aria-label={''}
                color="gray.500"
                size="sm"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems="center" gap="20px" color="gray.800">
            <Text fontFamily="heading" fontSize="small">
              Page
            </Text>
            <Text
              fontFamily="heading"
              fontSize="small"
              fontWeight="semibold"
              as="span"
            >
              {pageIndex + 1}
            </Text>
            <Text>of</Text>
            <Text
              fontFamily="heading"
              fontSize="small"
              fontWeight="semibold"
              as="span"
            >
              {pageCount}
            </Text>
          </Flex>

          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                onClick={() => setPageIndex(selectedPageIndex + 1)}
                icon={<ChevronRightIcon h={3} w={3} />}
                aria-label={''}
                color="gray.500"
                size="sm"
                disabled={selectedPageIndex === pageCount - 1}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                onClick={() => setPageIndex(pageCount - 1)}
                icon={<ArrowRightIcon h={2} w={2} />}
                ml={4}
                color="gray.500"
                aria-label={''}
                size="sm"
              />
            </Tooltip>
          </Flex>
        </Flex>
        <Flex gap="15px">
          <Tooltip label="Filter">
            <Button variant="outline">
              Export{' '}
              <Icon
                marginLeft="5px"
                as={GrDownload}
                aria-label="Filter"
                w={4}
                h={3}
              />
            </Button>
          </Tooltip>
          <Tooltip label={addRowButtonLabel}>
            <Button onClick={handleAddRow} variant="solid" color="white" _hover={{backgroundColor: "secondary" }} backgroundColor="secondary">
              {addRowButtonLabel}</Button>
          </Tooltip>
        </Flex>
      </Flex>
    );
  }
);

DatagridHeader.displayName = 'DatagridHeader';

export default DatagridHeader;
