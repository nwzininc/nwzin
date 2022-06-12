/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, forwardRef, useEffect, useRef } from 'react';
import MapsAPI from 'google-maps-api';
import EditableText from '../editbleText';
import { Flex } from '@chakra-ui/react';
import DesignerWrapper from '../designerWrapper';
import { LocationProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../store';

const GMPKEY = 'AIzaSyANDj4mJ2i_d0zRiNozVqbUGMgZTnDOeYI';

const Location: FC<LocationProps> = forwardRef<HTMLDivElement, LocationProps>(
  ({ id, label }, ref) => {
    const mapRef = useRef();
    const labelId = `${id}.configurations.settings.label.text`;
    const { primaryColor } = useAppSelector(
      (state) => state.currentFormState.currentTheme
    );
    const defaultZoom = 10;
    const center = { lat: 12.86468595, lng: 77.601260 }

    const dispatch = useAppDispatch();

    const handleCreateMap = async () => {
      return MapsAPI(GMPKEY)();
    };
    const initMap = () => {
      handleCreateMap().then((maps: any) => {
        const element = mapRef.current;
        console.log(maps.Map);
        const map = new maps.Map(element, {
          center,
          zoom: defaultZoom,
          streetViewControl: false,
        });
        return { maps, map };
      });
    };
    useEffect(() => {
      initMap();
    }, []);
    return (
      <DesignerWrapper id={id} ref={ref}>
        <Flex
          width="100%"
          flexDirection="column"
          padding="0px 0px"
        >
          <EditableText
            componentId={id}
            id={labelId}
            isHeading={false}
            selectionId={'configurations.settings.label'}
            {...label}
            color={primaryColor[500]}
            value={label?.text}
            placeholder="Type Location Label"
          />

          <Flex
            ref={mapRef as unknown as any}
            id="map"
            marginTop="8px"
            width="100%"
            height="400px"
          ></Flex>
        </Flex>
      </DesignerWrapper>
    );
  }
);

export default Location;
