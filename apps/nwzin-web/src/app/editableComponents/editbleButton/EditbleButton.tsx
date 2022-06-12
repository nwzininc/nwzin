import { Flex } from '@chakra-ui/react';
import React, { FC, forwardRef, MouseEvent } from 'react';
import { EditbleButtonProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';
import Color from 'color';

const EditbleButton: FC<EditbleButtonProps> = forwardRef<
  HTMLDivElement,
  EditbleButtonProps
>(
  (
    {
      id,
      backButtonlabel,
      resetButtonlabel,
      submitButtonlabel,
      backButtonStyles,
      resetButtonStyles,
      submitButtonStyles,
      buttonBarStyles,
      showBackButton,
      showResetButton,
      showSubmitButton,
    },
    ref
  ) => {
    const primaryColor = useAppSelector(
      (state) => state.currentFormState.currentTheme.primaryColor
    );
    const mode = useAppSelector((state)=> state.currentFormState.currentMode);
    const backButtonlabelId = `${id}.configurations.settings.backButtonlabel.text`;
    const resetButtonlabelId = `${id}.configurations.settings.resetButtonlabel.text`;
    const submitButtonlabelId = `${id}.configurations.settings.submitButtonlabel.text`;
    const backButtonStylesId = `${id}.configurations.settings.backButtonStyles`;
    const resetButtonStylesId = `${id}.configurations.settings.resetButtonStyles`;
    const submitButtonStylesId = `${id}.configurations.settings.submitButtonStyles`;
    const buttonBarStylesId = `${id}.configurations.settings.buttonBarStyles`;
    const dispatch = useAppDispatch();

    const isDark = Color(primaryColor[500]).isDark();
    const submitTextColor = isDark
      ? Color(primaryColor[500]).negate().lighten(10)
      : Color(primaryColor[500]).negate().darken(10);
    const handleClick =
      (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
      };
    const isDesktop = mode === "Desktop";
    return (
      <DesignerWrapper id={id} ref={ref}>
        <Flex
          onClick={handleClick(buttonBarStylesId)}
          flexDirection="row"
          gap={ isDesktop ? "16px" : "8px"}
          justifyContent="right"
          alignItems="center"
          width={isDesktop ? "calc(100% - 600px)" : "400px"}
          position="fixed"
          bottom="0px"
          left={isDesktop ? "300px" : "calc(50% - 200px)" }
          backgroundColor="#fff"
          boxShadow="2xl"
          padding={ isDesktop ?  "16px 48px":  "16px 24px"}
          zIndex={1000000}
        >
          <Flex
            alignItems="center"
            justifyItems="center"
            marginRight="auto"
            minWidth="80px"
            visibility={showBackButton ? 'visible' : 'hidden'}
            onClick={handleClick(backButtonStylesId)}
            {...backButtonStyles}
          >
            <EditableText
              componentId={id}
              {...backButtonlabel}
              cursor="pointer"
              selectionId={'configurations.settings.backButtonlabel'}
              isHeading={false}
              id={backButtonlabelId}
              textAlign="center"
              value={backButtonlabel.text}
              placeholder="Back Label"
            />
          </Flex>

          <Flex
            alignItems="center"
            justifyItems="center"
            visibility={showResetButton ? 'visible' : 'hidden'}
            minWidth="80px"
            onClick={handleClick(resetButtonStylesId)}
            {...resetButtonStyles}
            borderColor={primaryColor[700]}
          >
            <EditableText
              componentId={id}
              {...resetButtonlabel}
              cursor="pointer"
              textAlign="center"
              selectionId={'configurations.settings.resetButtonlabel'}
              isHeading={false}
              id={resetButtonlabelId}
              value={resetButtonlabel.text}
              placeholder="Reset Label"
            />
          </Flex>
          {showSubmitButton && (
            <Flex
              alignItems="center"
              justifyItems="center"
              minWidth="80px"
              onClick={handleClick(submitButtonStylesId)}
              {...submitButtonStyles}
              backgroundColor={primaryColor[700]}
            >
              <EditableText
                componentId={id}
                {...submitButtonlabel}
                cursor="pointer"
                selectionId={'configurations.settings.submitButtonlabel'}
                isHeading={false}
                textAlign="center"
                id={submitButtonlabelId}
                color={submitTextColor.hex()}
                value={submitButtonlabel.text}
                placeholder="Submit Label"
              />
            </Flex>
          )}
        </Flex>
      </DesignerWrapper>
    );
  }
);

export default EditbleButton;
