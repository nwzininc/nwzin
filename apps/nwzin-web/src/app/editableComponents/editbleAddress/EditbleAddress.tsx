import { Box, Flex } from '@chakra-ui/react';
import React, { FC, forwardRef, MouseEvent } from 'react';
import { EditbleAddressProps } from './types';
import EditableText from '../editbleText';
import DesignerWrapper from '../designerWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditbleAddress: FC<EditbleAddressProps> = forwardRef<
  HTMLDivElement,
  EditbleAddressProps
>(
  (
    {
      id,
      inputStyles,
      label,
      placeholder,
      addressLane1,
      addressLane2,
      city,
      pin,
      country,
      state,
    },
    ref
  ) => {
    const primaryColor = useAppSelector((state)=> state.currentFormState.currentTheme.primaryColor)
    const labelId = `${id}.configurations.settings.label.text`;
    const addressLane1Id = `${id}.configurations.settings.addressLane1.text`;
    const addressLane2Id = `${id}.configurations.settings.addressLane2.text`;
    const cityId = `${id}.configurations.settings.city.text`;
    const pinId = `${id}.configurations.settings.pin.text`;
    const stateId = `${id}.configurations.settings.state.text`;
    const countryId = `${id}.configurations.settings.country.text`;
    const inputStylesId = `${id}.configurations.settings.inputStylesId`;
    const dispatch = useAppDispatch();

    const handleClick =
      (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        dispatch(setCurrentField({ currentField: id, subFieldId: subFieldId }));
      };
    return (
      <DesignerWrapper id={id} ref={ref}>
        <Box padding="0px 16px">
          <EditableText
            {...label}
            componentId={id}
            isHeading={false}
            id={labelId}
            color={primaryColor[600]}
            selectionId={'configurations.settings.label'}
            value={label.text}
            cursor="pointer"
            placeholder="Type placeholder for Label"
          />
          <Flex marginTop="8px" flexWrap="wrap" gap="16px">
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              borderColor={primaryColor[500]}
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                isHeading={false}
                id={addressLane1Id}
                color={primaryColor[500]}
                selectionId={'configurations.settings.placeholder'}
                value={addressLane1.text}
                cursor="pointer"
                placeholder="Type placeholder for Address Line 1"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              borderColor={primaryColor[600]}
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                isHeading={false}
                color={primaryColor[500]}
                id={addressLane2Id}
                selectionId={'configurations.settings.placeholder'}
                value={addressLane2.text}
                cursor="pointer"
                placeholder="Type placeholder for Address Line 1"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              borderColor={primaryColor[600]}
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                isHeading={false}
                id={cityId}
                color={primaryColor[500]}
                selectionId={'configurations.settings.placeholder'}
                value={city.text}
                cursor="pointer"
                placeholder="Type placeholder for city"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
              borderColor={primaryColor[600]}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                isHeading={false}
                id={pinId}
                color={primaryColor[500]}
                value={pin.text}
                selectionId={'configurations.settings.placeholder'}
                cursor="pointer"
                placeholder="Type placeholder for Pin"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
              borderColor={primaryColor[600]}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                isHeading={false}
                id={stateId}
                color={primaryColor[500]}
                value={state.text}
                selectionId={'configurations.settings.placeholder'}
                cursor="pointer"
                placeholder="Type placeholder for State"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyItems="flex-start"
              gap="20px"
              maxWidth="364px"
              onClick={handleClick(inputStylesId)}
              {...inputStyles}
              borderColor={primaryColor[600]}
            >
              <EditableText
                {...placeholder}
                componentId={id}
                color={primaryColor[500]}
                isHeading={false}
                id={countryId}
                selectionId={'configurations.settings.placeholder'}
                value={country.text}
                cursor="pointer"
                placeholder="Type placeholder for Country"
              />
            </Flex>
          </Flex>
        </Box>
      </DesignerWrapper>
    );
  }
);

export default EditbleAddress;
