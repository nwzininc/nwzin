import React, { FC, MouseEvent, forwardRef } from 'react';
import EditableText from '../editbleText';
import { MdStar } from 'react-icons/md';
import { Flex, Icon } from '@chakra-ui/react';
import DesignerWrapper from '../designerWrapper';
import { EditbleRatingProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const Rating: FC<EditbleRatingProps> = forwardRef<
  HTMLDivElement,
  EditbleRatingProps
>(({ id, label, unratedIconStyles, ratedIconStyles }, ref) => {
  const labelId = `${id}.configurations.settings.label.text`;
  const ratedIconStylesId = `${id}.configurations.settings.ratedIconStyles`;
  const unratedIconStylesId = `${id}.configurations.settings.unratedIconStyles`;
  const { primaryColor, backgroundColor} = useAppSelector(
    (state) => state.currentFormState.currentTheme
  );
  const dispatch = useAppDispatch();
  const handleClick = (subFieldId: string) => (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();
    dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
  };
  return (
    <DesignerWrapper id={id} ref={ref}>
      <Flex width="max-content" flexDirection="column" padding="0px 0px">
        <EditableText
          componentId={id}
          id={labelId}
          isHeading={false}
          selectionId={'configurations.settings.label'}
          {...label}
          color={primaryColor[600]}
          value={label?.text}
          placeholder="Type Rating Label"
        />
        <Flex
          marginTop="8px"
          borderRadius="8px"
          overflow="hidden"
          width="max-content"
          gap="15px"
        >
          <Icon
            key="1"
            as={MdStar}
            color={primaryColor[500]}
            onClick={handleClick(ratedIconStylesId)}
            boxSize={ratedIconStyles.size}
          />
          <Icon
            key="2"
            as={MdStar}
            color={primaryColor[500]}
            onClick={handleClick(ratedIconStylesId)}
            boxSize={ratedIconStyles.size}
          />
          <Icon
            key="3"
            as={MdStar}
            color={primaryColor[500]}
            onClick={handleClick(ratedIconStylesId)}
            boxSize={ratedIconStyles.size}
          />
          <Icon
            key="4"
            as={MdStar}
            onClick={handleClick(unratedIconStylesId)}
            color="#ccc"
            boxSize={unratedIconStyles.size}
          />
          <Icon
            key="5"
            as={MdStar}
            onClick={handleClick(unratedIconStylesId)}
            color="#ccc"
            boxSize={unratedIconStyles.size}
          />
        </Flex>
      </Flex>
    </DesignerWrapper>
  );
});

export default Rating;
