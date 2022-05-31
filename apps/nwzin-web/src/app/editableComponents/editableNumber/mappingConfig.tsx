import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getCommonContainerCMC } from '../commonMaping';

export const  numberCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    placeholder: getCommonTextCMC('configurations.settings.placeholder') as any,
    inputStyles: getCommonContainerCMC(
      'configurations.settings.inputStyles'
    ) as any,
  },
  dataMapping: {},
};

export const numberDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Number',
    },
    placeholder: {
      size: 'md',
      fontWeight: 'normal',
      align: 'left',
      padding: 0,
      text: '90000000000',
    },
    inputStyles: {
      borderWidth: '1px',
      borderStyle: 'solid',
      minWidth: 280,
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      width: 364,
      height: 54,
      borderRadius: 6,
    },
  },
  dataMapping: {},
};
