import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getCommonContainerCMC, getValidationConfigs } from '../commonMaping';

export const emailCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    placeholder: getCommonTextCMC('configurations.settings.placeholder') as any,
    inputStyles: getCommonContainerCMC(
      'configurations.settings.inputStyles'
    ) as any,
  },
  dataMapping: {},
  validations: {
    ...getValidationConfigs('configurations.validations', 'omit', ['min', 'max'])
   }as any,
};

export const emailDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Input',
    },
    placeholder: {
      size: 'md',
      fontWeight: 'normal',
      align: 'left',
      padding: 0,
      text: 'Enter text',
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
  validations:{
    required: {
      value: false,
      message: null,
    },
    minLength: {
      value: 6,
      message: null,
    },
    maxLength: {
      value: 256,
      message: null,
    }
  }
};
