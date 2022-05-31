import { getCommonContainerCMC, getCommonTextCMC } from "../../editableComponents/commonMaping";

export const headingCMC: Record<string, Record<string,any>> = {
  settings: {
    ...getCommonTextCMC('configurations.settings.text'),
    ...getCommonContainerCMC('configurations.settings.containerStyles')
  },
  dataMapping: {
  },
};

export const headingDCM = {
  settings: {
    text:{
      size: '3xl',
      color: '#2D3748',
      fontWeight: "bold",
      align: "left",
      letterSpacing: '1px',
      text: 'Form Heading',
    },
    containerStyles:{
      padding: "8px 0px 0px 16px",
      border: "0px solid #ccc"
    }
  },
  dataMapping: {},
};
