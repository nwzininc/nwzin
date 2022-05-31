import React, { FC } from 'react';
import _get from 'lodash/get';
import { useAppDispatch, useAppSelector } from '../../../../../../../store';
import { RecursiveComponentProps } from './types';
import { getComponentIdMapping } from '../../../../mapping';
import { useDrag, useDrop } from 'react-dnd';
import { DroppedItem, PageItem } from '../../../../types';
import { addNewChildNode, updateChildNodeOrder } from '../../../../reducer';
import { Flex } from '@chakra-ui/react';
import { buildChildNode } from '../../../../helper';

const RecursiveComponent: FC<RecursiveComponentProps> = ({ id }) => {
  const { currentForm, currentPage } = useAppSelector((state) => state.currentFormState);
  const currentPageIndex = currentForm.pages.findIndex((page)=> page.pageId === currentPage);
  const dispatch = useAppDispatch();
  const { childNodes, componentId, configurations, parentId } = _get(
    currentForm?.pages[currentPageIndex].pageItems,
    id,
    {} as unknown as PageItem
  );

  const handleDrop = async (item: DroppedItem) => {
    const childNode =  buildChildNode(item, parentId);
    if(childNode){ // New Child
      dispatch(addNewChildNode({childNode: childNode, droppedId: id, parentId}));
      return;
    }
    dispatch(updateChildNodeOrder({draggedId:item.id , droppedId: id, parentId}))
  };
  const [{ isDropping }, dropRef] = useDrop(
    () => ({
      accept: ['FORM_FIELD', 'LAYOUT', 'NON_FORM_FIELD','FORM_FIELD_EXISTING'],
      drop: (item: any, monitor) => {
        if(!monitor.didDrop()){
          handleDrop(item)
          console.log('NavBar Item', item);
        }
      },
      collect: (monitor) => {
        return {
          isDropping: monitor.isOver({ shallow: true }),
        };
      },
    }));
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'FORM_FIELD_EXISTING',
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
      item: { id },
    }),
    []
  );
  const Component = getComponentIdMapping(componentId);
  if(!childNodes){
    return null;
  }
  return (
    <Flex
      marginBottom="5px"
      padding="5px"
      border="0.8px solid transparent"
      cursor={'move'}
      position="relative"
      width="auto"
      ref={dropRef}
      display={"contents"}
      backgroundColor={(isDropping || isDragging) ? 'pink' : 'transperent'}
    >
    <Flex width="100%" opacity={isDropping ? 1 : 0} boxShadow="dark-lg" height="2px" backgroundColor="blackAlpha.900" borderRadius={10}/>
      <Component
        id={id}
        {...configurations?.settings}
        {...configurations?.dataMapping}
        ref={dragRef as any}
      >
        {childNodes.map((componentChildId) => {
          return <RecursiveComponent id={componentChildId} />;
        })}
      </Component>
    </Flex>
  );
};

export default RecursiveComponent;
