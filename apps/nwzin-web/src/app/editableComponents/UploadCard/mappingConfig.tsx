import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getValidationConfigs } from '../commonMaping';

export const uploadCardCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    options: {
      type: 'Options',
      placeholder: 'File Types',
      label: 'File Types',
      options: [],
      required: false,
      errorMessage: '',
      validations: null,
      isMulti: false,
      id: `configurations.settings.options`,
      designerConfig: true,
    },
  },
  dataMapping: {},
  validations: {
    ...(getValidationConfigs('configurations.validations', 'pick', [
      'required',
    ]) as any),
  },
};

export const uploadCardDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Upload',
    },
    options: [
      {
        label: '.jpg',
        value: '.jpg',
      },
      {
        label: '.jpeg',
        value: '.jpeg',
      },
      {
        label: '.png',
        value: '.png',
      },
      {
        label: '.gif',
        value: '.gif',
      },
    ]
  },
  dataMapping: {},
  validations: {
    required: {
      value: false,
      message: 'Enter your ratings',
    },
  },
};
