/* eslint-disable @typescript-eslint/no-explicit-any */
import _get from 'lodash/get';
import Heading, { headingCMC, headingDCM } from '../../components/headings';
import Description, {
  descriptionCMC,
  descriptionDCM,
} from '../../components/description';
import EditbleEmail, {
  emailCMC,
  emailDCM,
} from '../../editableComponents/editbleEmail';
import Rating, { ratingCMC, ratingDCM } from '../../editableComponents/Rating';
import YesOrNo, { yesNoCMC, yesNoDCM } from '../../editableComponents/YesOrNo';
import MultiSelect, {
  multiSelectCMC,
  multiSelectDCM,
} from '../../editableComponents/MultiSelectWithList';
import EditblePhone, {
  phoneCMC,
  phoneDCM,
} from '../../editableComponents/editblePhone';
import EditableNumber, {
  numberCMC,
  numberDCM,
} from '../../editableComponents/editableNumber';
import EditableDropdown, {
  dropdownCMC,
  dropdownDCM,
} from '../../editableComponents/editableDropdown';
import EditableAddress, {
  addressCMC,
  addressDCM,
} from '../../editableComponents/editbleAddress';
import EditableSignature, {
  signatureCMC,
  signatureDCM,
} from '../../editableComponents/editbleSignature';
import EditableDatepicker, {
  datePickerCMC,
  datePickerDCM,
} from '../../editableComponents/editbleDatePicker';
import EditbleButton, {
  buttonCMC,
  buttonDCM,
} from '../../editableComponents/editbleButton';
import { getCommonContainerCMC } from '../../editableComponents/commonMaping';
import UploadCard, { uploadCardCMC, uploadCardDCM} from '../../editableComponents/UploadCard';
import Location ,{ locationCMC, locationDCM } from '../../editableComponents/Location';

const rootCMC = {
  settings: {
    ...(getCommonContainerCMC('configurations.settings.rootStyles', 'pick', ['padding']) as any),
  },
  dataMapping: {},
};
const rootDCM = {
  settings: {
    rootStyles: {},
  },
};

/**
 *
 * Component Mapping By Component ID
 */
export const componentIdMapping = {
  heading: Heading,
  description: Description,
  input: EditbleEmail,
  rating: Rating,
  yesNo: YesOrNo,
  multiSelect: MultiSelect,
  phone: EditblePhone,
  number: EditableNumber,
  dropdown: EditableDropdown,
  address: EditableAddress,
  signature: EditableSignature,
  datePicker: EditableDatepicker,
  button: EditbleButton,
  uploadCard: UploadCard,
  location: Location 
};

export const getComponentIdMapping = (componentId: string): React.FC<any> => {
  return _get(componentIdMapping, componentId);
};

/**
 * Default Configurations By Component
 *
 */
export const DefaultConfigurationMappingByComponent = {
  heading: headingDCM,
  description: descriptionDCM,
  input: emailDCM,
  rating: ratingDCM,
  yesNo: yesNoDCM,
  multiSelect: multiSelectDCM,
  phone: phoneDCM,
  number: numberDCM,
  dropdown: dropdownDCM,
  address: addressDCM,
  signature: signatureDCM,
  datePicker: datePickerDCM,
  button: buttonDCM,
  ROOT: rootDCM,
  uploadCard: uploadCardDCM,
 location: locationDCM 
};
export const getDefaultConfigurationsByComponentId = (componentId: string) => {
  return _get(DefaultConfigurationMappingByComponent, componentId);
};

/**
 *  Configuration For Component Configuration
 *
 */
export const componentConfigurationMapping = {
  heading: headingCMC,
  description: descriptionCMC,
  input: emailCMC,
  rating: ratingCMC,
  yesNo: yesNoCMC,
  multiSelect: multiSelectCMC,
  phone: phoneCMC,
  number: numberCMC,
  dropdown: dropdownCMC,
  address: addressCMC,
  signature: signatureCMC,
  datePicker: datePickerCMC,
  button: buttonCMC,
  ROOT: rootCMC,
  uploadCard: uploadCardCMC,
  location: locationCMC
};
export const getCMCMapping = (componentId: string) => {
  return _get(componentConfigurationMapping, componentId);
};
