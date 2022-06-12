import React, { FC, forwardRef } from 'react';
import DesignerWrapper from '../../editableComponents/designerWrapper';
import EditableText from '../../editableComponents/editbleText';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = forwardRef<HTMLDivElement, HeadingProps>(
  ({ text, containerStyles, id }, ref) => {
    const innerTextId = `${id}.configurations.settings.text.text`;
    return (
      <DesignerWrapper id={id} ref={ref}>
        <EditableText
          componentId={id}
          id={innerTextId}
          selectionId={''}
          {...text}
          isHeading={false}
          {...containerStyles}
          value={text.text}
          placeholder={'Type Heading here'}
        />
      </DesignerWrapper>
    );
  }
);

export default Heading;
