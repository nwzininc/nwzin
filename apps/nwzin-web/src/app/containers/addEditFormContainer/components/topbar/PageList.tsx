import { Flex, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'apps/nwzin-web/src/store';
import React, { FC } from 'react';
import { addNewPage, selectPage } from '../../reducer';
import { PageListProps, PageProps } from './types';

const Page: FC<PageProps> = ({
  pageIndex,
  name,
  isSelected,
  handleSelectPage,
}) => {
  return (
    <Flex
      height="50px"
      alignItems="center"
      justifyContent="center"
      borderRadius="4px"
      boxShadow="base"
      width="80px"
      onClick={handleSelectPage}
      cursor="pointer"
      bg={isSelected ? '#7f5af0' : '#fff'}
    >
      <Text
        cursor="pointer"
        fontFamily="heading"
        color={isSelected ? '#fff' : '#7f5af0'}
      >
        {name || `Page ${pageIndex}`}
      </Text>
    </Flex>
  );
};
const PageList: FC<PageListProps> = () => {
  const { currentForm, currentPage } = useAppSelector(
    (state) => state.currentFormState
  );
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addNewPage());
  };
  const handleSelectPage = (pageId: string) => () => {
    dispatch(selectPage({ pageId }));
  };
  return (
    <Flex
      height="60px"
      flexDirection="row"
      left="300px"
      alignItems="center"
      justifyContent="center"
      gap="10px"
    >
      {currentForm?.pages.map((page, index) => {
        return (
          <Page
            key={page.pageId}
            isSelected={currentPage === page.pageId}
            pageIndex={index + 1}
            name={page.pageName}
            handleSelectPage={handleSelectPage(page.pageId)}
          />
        );
      })}
      {currentForm?.pages.length < 5 && (
        <Flex
          height="50px"
          alignItems="center"
          justifyContent="center"
          borderRadius="4px"
          boxShadow="base"
          width="80px"
          bg="#fff"
          onClick={handleClick}
        >
          <Text fontFamily="heading" cursor="pointer" color="#7f5af0">
            +
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default PageList;
