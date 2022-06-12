import { Container, Flex } from '@chakra-ui/react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import React, { FC } from 'react';
import RecursiveFieldRenderer from '../recursiveFieldRenderer';
import { PageProps, PageRendererProps } from './types';

const Page: FC<PageProps> = ({
  formState,
  height,
  width,
  page,
  isCurrentPage,
  setPageIndex,
}) => {
  const firstLevelChildren = _get(page, `pageItems['ROOT'].childNodes`, []);
  return (
    <RecursiveFieldRenderer
      childrenFields={firstLevelChildren}
      formState={formState}
      height={height}
      width={width}
      isCurrentPage={isCurrentPage}
      setPageIndex={setPageIndex}
      page={page}
      theme={formState.theme}
    />
  );
};

const PageRenderer: FC<PageRendererProps> = ({
  formState,
  height,
  width,
  currentPageIndex,
  pageIdMap,
  setPageIndex,
}) => {
  const {
    theme: { backgroundColor },
  } = formState;
  return (
    <Container
      maxW={[width, '800px']}
      minHeight="100%"
      maxHeight="100%"
      backgroundColor={backgroundColor[500]}
      boxShadow="base"
      padding={[4, 8]}
      height="100%"
    >
      <Flex flexDirection="column" gap="16px" paddingBottom={["96px","300px"]}>
        {_map(pageIdMap, (page, index) => {
          return (
            <Page
              formState={formState}
              height={height}
              width={width}
              page={page}
              isCurrentPage={currentPageIndex == index}
              setPageIndex={setPageIndex}
            />
          );
        })}
      </Flex>
    </Container>
  );
};

export default PageRenderer;
