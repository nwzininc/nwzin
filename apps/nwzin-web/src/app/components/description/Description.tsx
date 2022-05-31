import { Box } from '@chakra-ui/react';
import React, { FC, forwardRef } from 'react';
import DesignerWrapper from '../../editableComponents/designerWrapper';
import EditableText from '../../editableComponents/editbleText';
import { DescriptionProps } from './types';

const Description: FC<DescriptionProps> = forwardRef<
  HTMLDivElement,
  DescriptionProps
>(({ description, containerStyles, id }, ref) => {
  const innerTextId = `${id}.configurations.settings.description.text`;
  return (
    <DesignerWrapper id={id} ref={ref}>
        <EditableText
          componentId={id}
          selectionId={''}
          id={innerTextId}
          isHeading={false}
          {...description}
          {...containerStyles}
          value={description.text}
          placeholder={'Type Description Here'}
        />
    </DesignerWrapper>
  );
});

export default Description;
