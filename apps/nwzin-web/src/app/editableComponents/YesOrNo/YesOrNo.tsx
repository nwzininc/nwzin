import React, { FC, MouseEvent, forwardRef } from 'react';
import EditableText from '../editbleText';
import { Flex } from '@chakra-ui/react';
import { YesOrNoWithTickProps } from './types';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';
import Color from 'color';

const YesOrNo: FC<YesOrNoWithTickProps> = forwardRef(
  ({ id, yesLabel, noLabel, label, yesContainer, noContainer }, ref) => {
    const { primaryColor, backgroundColor} = useAppSelector(
      (state) => state.currentFormState.currentTheme
    );
    const labelId = `${id}.configurations.settings.label.text`;
    const yesLabelId = `${id}.configurations.settings.yesLabel.text`;
    const noLabelId = `${id}.configurations.settings.noLabel.text`;
    const yesContainerId = `${id}.configurations.settings.yesContainer`;
    const noContainerId = `${id}.configurations.settings.noContainer`;
    const dispatch = useAppDispatch();
    const handleClick =
      (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
      };
    
    const isDark = Color(primaryColor[500]).isDark()
    const textColor = isDark ? Color(primaryColor[500]).negate().lighten(10) :  Color(primaryColor[500]).negate().darken(10);
    const isNoDark = Color(backgroundColor[500]).isDark()
    const noTextColor = isNoDark ? Color(backgroundColor[500]).negate().lighten(10) :  Color(backgroundColor[500]).negate().darken(10)

    return (
      <DesignerWrapper id={id} ref={ref}>
        <Flex width="100%" flexDirection="column" padding="0px 16px">
          <EditableText
            componentId={id}
            paddingLeft="4px"
            marginBottom="10px"
            id={labelId}
            selectionId={'configurations.settings.label'}
            isHeading={false}
            {...label}
            color={primaryColor[600]}
            value={label.text}
            placeholder="Type Label"
          />
          <Flex
            marginTop="8px"
            borderRadius="8px"
            overflow="hidden"
            width="max-content"
            border={`1px solid ${primaryColor[700]}`}
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              onClick={handleClick(yesContainerId)}
              {...yesContainer}
              backgroundColor={primaryColor[600]}
              padding="12px 20px"
            >
              <EditableText
                componentId={id}
                width="max-content"
                id={yesLabelId}
                isHeading={false}
                {...yesLabel}
                color={textColor.hex()}
                selectionId={'configurations.settings.yesLabel'}
                value={yesLabel.text}
                placeholder="Type Label"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              {...noContainer}
              onClick={handleClick(noContainerId)}
              padding="12px 20px"
            >
              <EditableText
                componentId={id}
                width="max-content"
                id={noLabelId}
                isHeading={false}
                {...noLabel}
                color={noTextColor.hex()}
                selectionId={'configurations.settings.noLabel'}
                value={noLabel.text}
                placeholder="Type No Label"
              />
            </Flex>
          </Flex>
        </Flex>
      </DesignerWrapper>
    );
  }
);
export default YesOrNo;
