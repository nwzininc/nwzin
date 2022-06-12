import React, { FC } from 'react';
import _get from 'lodash/get';
import { RecursiveFieldRendererProps } from './types';
import { getComponentMapping } from '../../componentMapping';

const RecursiveFieldRenderer: FC<RecursiveFieldRendererProps> = ({
  formState,
  height,
  width,
  theme,
  childrenFields,
  setPageIndex,
  page,
  isCurrentPage,
}) => {
  const renderChildren = (childrenId: string) => {
    const pageItem = page.pageItems[childrenId];
    const {
      id,
      parentId,
      componentId,
      componentType,
      configurations,
      childNodes,
    } =  pageItem|| {};
    const Component = getComponentMapping(componentId);
    const isChildrenExist = childNodes.length > 0;
    if (!isChildrenExist) {
      return (
        <Component
          key={id}
          height="50px"
          width="100%"
          bgColor="ButtonFace"
          boxShadow="dark-lg"
          {...configurations.settings}
          pageItem={pageItem}
          theme={theme}
        />
      );
    }
    return (
      <Component
        key={id}
        height="50px"
        width="100%"
        bgColor="ButtonFace"
        boxShadow="dark-lg"
        {...configurations.settings}
        pageItem={pageItem}
        theme={theme}
      >
        {childNodes.length > 0 && (
          <RecursiveFieldRenderer
            childrenFields={childNodes}
            formState={formState}
            height={height}
            width={width}
            theme={theme}
            page={page}
            isCurrentPage={isCurrentPage}
            setPageIndex={setPageIndex}
          />
        )}
      </Component>
    );
  };
  return <>{childrenFields.filter(Boolean).map(renderChildren)}</>;
};

export default RecursiveFieldRenderer;
