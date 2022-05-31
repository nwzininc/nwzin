import { getCommonContainerCMC, getCommonTextCMC } from "../../editableComponents/commonMaping";

export const descriptionCMC: Record<string, Record<string,any>> = {
  settings: {
    ...getCommonTextCMC('configurations.settings.description'),
    ...getCommonContainerCMC('configurations.settings.containerStyles')
  },
  dataMapping: {
  },
};

export const descriptionDCM = {
  settings: {
    description:  {
      size: 'md',
      color: '#2D3748',
      fontWeight: "normal",
      align: "left",
      padding: 0,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    containerStyles:{
      padding: "8px 0px 0px 16px",
      border: "0px solid #ccc",
      whiteSpace: 'break-spaces',
    }
  },
  dataMapping: {},
};
