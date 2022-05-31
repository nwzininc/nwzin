import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC } from '../commonMaping';

export const ratingCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
  },
  dataMapping: {},
};

export const ratingDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Rate us',
    },
    unratedIconStyles: {
      size: "30px"
    },
    ratedIconStyles: {
      size: "30px"
    },
  },
  dataMapping: {},
};
