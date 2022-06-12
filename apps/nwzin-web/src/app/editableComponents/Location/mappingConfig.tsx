import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getValidationConfigs } from '../commonMaping';

export const locationCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
  },
  dataMapping: {},
  validations: {
    ...(getValidationConfigs('configurations.validations', 'pick', [
      'required',
    ]) as any),
  },
};

export const locationDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Location',
    },
  },
  dataMapping: {},
  validations: {
    required: {
      value: false,
      message: 'Enter your ratings',
    },
  },
};
