import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonContainerCMC, getCommonTextCMC } from '../commonMaping';

export const yesNoCMC: Record<string, Record<string, DesignerConfig>> = {
  settings: {
    label: getCommonTextCMC('configurations.settings.label') as any,
    yesLabel: getCommonTextCMC('configurations.settings.yesLabel') as any,
    noLabel: getCommonTextCMC('configurations.settings.noLabel') as any,
    yesContainer: getCommonContainerCMC('configurations.settings.yesContainer', 'pick', ["backgroundColor", "borderRadius"]) as any,
    noContainer: getCommonContainerCMC('configurations.settings.noContainer', 'pick', ["backgroundColor", "borderRadius"]) as any,
  },
  dataMapping: {},
};

export const yesNoDCM = {
  settings: {
    label: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Are you joining us today?',
    },
    yesLabel: {
      size: 'lg',
      fontWeight: 'bold',
      align: 'left',
      padding: 0,
      text: 'Yes',
    },
    noLabel: {
      size: 'lg',
      fontWeight: 'bold',
      align: 'left',
      padding: 0,
      text: 'No',
    },
    yesContainer:{

    },
    noContainer:{
      backgroundColor: "#fff",
    }
  },
  dataMapping: {},
};
