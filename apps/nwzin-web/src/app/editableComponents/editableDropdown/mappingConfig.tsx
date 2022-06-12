import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getCommonContainerCMC, getValidationConfigs } from '../commonMaping';

export const dropdownCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    placeholder: getCommonTextCMC('configurations.settings.placeholder') as any,
    inputStyles: getCommonContainerCMC(
      'configurations.settings.inputStyles', 'omit', ["padding"]
    ) as any,
    options: {
      type: 'Options',
      placeholder: 'Options',
      label: 'Options',
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
    ...getValidationConfigs('configurations.validations', 'pick', ['required'])
   }as any,
};

export const dropdownDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Select Option',
    },
    placeholder: {
      size: 'md',
      fontWeight: 'normal',
      align: 'left',
      padding: 0,
      text: 'Select',
    },
    options:[
      {
        label: 'Option 1',
        value: 'Option 1',
      },
      {
        label: 'Option 2',
        value: 'Option 2',
      },
      {
        label: 'Option 3',
        value: 'Option 3',
      },
      {
        label: 'Option 4',
        value: 'Option 4',
      }
    ],
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
  validations:{}
};
