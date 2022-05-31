import { DesignerConfig } from '../../containers/addEditFormContainer/components/configSettings/types';
import { getCommonTextCMC, getCommonContainerCMC } from '../commonMaping';

const getSwitchMapping = (id: string, label: string) => ({
  type: 'Switch',
  placeholder: '',
  label,
  options: [],
  required: false,
  errorMessage: '',
  validations: null,
  isMulti: false,
  id,
  designerConfig: true,
});
export const buttonCMC: Record<
  string,
  DesignerConfig | Record<string, DesignerConfig>
> = {
  settings: {
    backButtonlabel: getCommonTextCMC(
      'configurations.settings.backButtonlabel'
    ) as any,
    resetButtonlabel: getCommonTextCMC(
      'configurations.settings.resetButtonlabel'
    ) as any,
    submitButtonlabel: getCommonTextCMC(
      'configurations.settings.submitButtonlabel'
    ) as any,
    backButtonStyles: getCommonContainerCMC(
      'configurations.settings.backButtonStyles'
    ) as any,
    submitButtonStyles: getCommonContainerCMC(
      'configurations.settings.submitButtonStyles'
    ) as any,
    resetButtonStyles: getCommonContainerCMC(
      'configurations.settings.resetButtonStyles'
    ) as any,
    buttonBarStyles: getCommonContainerCMC(
      'configurations.settings.buttonBarStyles'
    ) as any,
    showResetButton: getSwitchMapping(
      'configurations.settings.showResetButton',
      'Show Reset Button'
    ) as any,
    showBackButton: getSwitchMapping(
      'configurations.settings.showBackButton',
      'Show Back Button'
    ) as any,
    showSubmitButton: getSwitchMapping(
      'configurations.settings.showSubmitButton',
      'Show Submit Button'
    ) as any,
  },
  dataMapping: {},
};

export const buttonDCM = {
  settings: {
    backButtonlabel: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Back',
    },
    resetButtonlabel: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Reset',
    },
    submitButtonlabel: {
      size: 'md',
      fontWeight: 'semibold',
      align: 'left',
      padding: 0,
      text: 'Submit',
    },
    backButtonStyles: {
      border: '1.5px solid',
      borderRadius: '8px',
      width: 'max-content',
      padding: '8px 16px 8px 16px',
    },
    resetButtonStyles: {
      border: '1.5px solid',
      borderRadius: '8px',
      width: 'max-content',
      padding: '8px 16px 8px 16px',
    },
    submitButtonStyles: {
      border: '1px solid',
      borderRadius: '8px',
      width: 'max-content',
      padding: '8px 16px 8px 16px',
    },
    buttonBarStyles: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '16px',
    },
    showBackButton: true,
    showResetButton: true,
    showSubmitButton: true,
  },
  dataMapping: {},
};
