import React, { FC, MouseEvent } from 'react';
import { useDrop } from 'react-dnd';
import _get from 'lodash/get';
import { RootProps } from './types';
import { Flex } from '@chakra-ui/react';
import { DroppedItem, PageItem } from '../../../../types';
import { useAppDispatch, useAppSelector } from '../../../../../../../store';
import { addNewChildNode, setCurrentField } from '../../../../reducer';
import { buildChildNode } from '../../../../helper';
import RecursiveComponent from '../recursiveComponent';

const Root: FC<RootProps> = () => {
  const { currentForm, currentPage, currentTheme } = useAppSelector((state) => state.currentFormState);
  const dispatch = useAppDispatch();
  const currentPageIndex = currentForm.pages.findIndex((page)=> page.pageId === currentPage);
  const root = _get(currentForm?.pages[currentPageIndex].pageItems, 'ROOT') as PageItem;
  const { id, childNodes, configurations } = root;

  const handleDrop = async (item: DroppedItem) => {
    const childNode = buildChildNode(item, id);
    dispatch(addNewChildNode({ childNode, parentId: id }));
  };
  const [{ isDropping }, dropRef] = useDrop(
    {
      accept: ['FORM_FIELD', 'LAYOUT', 'NON_FORM_FIELD'],
      drop: (item: DroppedItem, monitor) => {
        if (!monitor.didDrop()) {
          handleDrop(item);
        }
      },
      collect: (monitor) => {
        return { isDropping: monitor.isOver({ shallow: true }) };
      },
    },
    []
  );
  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setCurrentField({ currentField: 'ROOT' }));
  };
  return (
    <Flex
      ref={dropRef}
      boxSizing="border-box"
      height="calc(100%)"
      gap="5px"
      width="100%"
      flexDirection="column"
      overflow="auto"
      id={id}
      onClick={handleContainerClick}
      backgroundColor={isDropping ? 'transperent' : currentTheme.backgroundColor[500]}
      {...configurations?.settings?.['rootStyles']}
      {...configurations?.dataMapping}
    >
      {childNodes.map((childNode) => {
        return <RecursiveComponent key={childNode} id={childNode} />;
      })}
      {isDropping && (
        <Flex width="100%" height="80px" border="1px dashed #ccc"></Flex>
      )}
    </Flex>
  );
};
export default Root;
