import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getCommonContainerCMC } from '../commonMaping';

export const addressCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    placeholder: getCommonTextCMC('configurations.settings.placeholder') as any,
    inputStyles: getCommonContainerCMC(
      'configurations.settings.inputStyles'
    ) as any,
  },
  dataMapping: {
    inputStyles: {
    } as unknown as DesignerConfig
  },
};

export const addressDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Address',
    },
    addressLane1: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Address Line 1',
      maxWidth: 600,
    },
    addressLane2: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Address Line 2',
      maxWidth: 600,
    },
    city: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'city',
      maxWidth: 480,
    },
    pin: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Pin',
      maxWidth: 280,
    },
    state: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'State',
      maxWidth: 480,
    },
    country: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Country',
      maxWidth: 480,
    },
 
    inputStyles: {
      borderWidth: '1px',
      borderStyle: 'solid',
      minWidth: 280,
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      width: '100%',
      height: 54,
      maxWidth: 480,
      borderRadius: 6,
    },
  },
  dataMapping: {},
  validations:{}
};
