import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC } from '../commonMaping';

export const multiSelectCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    question: getCommonTextCMC('configurations.settings.question') as any,
  },
  dataMapping: {},
};

export const multiSelectDCM = {
  settings: {
    options: [
      {
        label: 'India',
        value: 'India'
      },
      {
        label: 'USA',
        value: 'USA'
      },
      {
        label: 'China',
        value: 'China'
      },
      {
        label: 'Japan',
        value: 'Japan'
      }
    ],
    question: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Select below country',
    },
  },
  dataMapping: {},
};
