import {
  defaultSizeConfigOptions,
  deefaultWeightConfigOptions,
  textAlignmentOptions,
} from '../configurations/designerConfigs/designerOptions.config';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import { DesignerConfig } from '../containers/addEditFormContainer/components/configSettings/types';
import { CommonContainerProps, CommonTextProps } from './types';

export const getCommonTextCMC = (
  id: string,
  type?: "pick" | "omit",
  pickOmitList?: string[]
): Record<keyof Omit<CommonTextProps, "text" | "color">, DesignerConfig> => {
  const buildCommonProps = ({
  size: {
    type: 'FontSize',
    placeholder: 'Size',
    label: 'Size',
    options: defaultSizeConfigOptions,
    required: true,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.size`,
    designerConfig: true,
  },
  fontWeight: {
    type: 'FontWeight',
    placeholder: 'Font Weight',
    label: 'Font Weight',
    options: deefaultWeightConfigOptions,
    required: false,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.fontWeight`,
    designerConfig: true,
  },
  align: {
    type: 'Align',
    placeholder: 'Text Alignment',
    label: 'Text Alignment',
    options: textAlignmentOptions,
    required: false,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.align`,
    designerConfig: true,
  },
  })
  if(type === "omit" && pickOmitList){
    return _omit(buildCommonProps, pickOmitList) as Record<keyof Omit<CommonTextProps, "text">, DesignerConfig>;
  }
  if(type === "pick" && pickOmitList){
    return _pick(buildCommonProps, pickOmitList) as Record<keyof Omit<CommonTextProps, "text">, DesignerConfig>;
  }
  return buildCommonProps as Record<keyof Omit<CommonTextProps, "text">, DesignerConfig>;
};


export const getCommonContainerCMC = (
  id: string,
  type?: "pick" | "omit",
  pickOmitList?: string[]
): Record<keyof Omit<CommonContainerProps, "backgroundColor">, DesignerConfig> => {
  const buildCommonProps = {
   padding: {
    type: 'Padding',
    placeholder: 'Enter Padding',
    label: 'Enter Padding',
    options: [],
    required: true,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.padding`,
    designerConfig: true,
  },
  margin: {
    type: 'Margin',
    placeholder: 'Enter Margin',
    label: 'Enter Margin',
    options: [],
    required: true,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.margin`,
    designerConfig: true,
  },
  boxShadow:{
    type: 'Effect',
    placeholder: 'Box Shadow',
    label: 'Box Shadow',
    options: [],
    required: false,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.boxShadow`,
    designerConfig: true,
  },
  border:{
    type: 'Border',
    placeholder: 'Border',
    label: 'Border',
    options: [],
    required: false,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.border`,
    designerConfig: true,
  },
  opacity: {
    type: 'Opacity',
    placeholder: 'Opacity',
    label: 'Opacity',
    options: [],
    required: false,
    errorMessage: '',
    validations: null,
    isMulti: false,
    id: `${id}.opacity`,
    designerConfig: true,
  },
  }
  if(type === "omit" && pickOmitList){
    return _omit(buildCommonProps, pickOmitList) as Record<keyof Omit<CommonContainerProps, "backgroundColor">, DesignerConfig>;
  }
  if(type === "pick" && pickOmitList){
    return _pick(buildCommonProps, pickOmitList) as Record<keyof Omit<CommonContainerProps, "backgroundColor">, DesignerConfig>;
  }
  return buildCommonProps as Record<keyof Omit<CommonContainerProps, "backgroundColor">, DesignerConfig>;
};


export const getValidationConfigs = (
  id: string,
  type?: "pick" | "omit",
  pickOmitList?: string[]
) => {
  const commonValidations = {
    required: {
      type: 'required',
      label: 'Is Required ?',
      options: [],
      id: `${id}.required.value`,
    },
    max: {
      type: 'max',
      label: 'Maximum Number Allowed',
      options: [],
      id: `${id}.max.value`,
    },
    min: {
      type: 'min',
      label: 'Minimum Number Allowed',
      options: [],
      id: `${id}.min.value`,
    },
    minLength: {
      type: 'minLength',
      label: 'Minimum Character Length',
      options: [],
      id: `${id}.minLength.value`,
    },
    maxLength: {
      type: 'maxLength',
      label: 'Maximum Character Length',
      options: [],
      id: `${id}.maxLength.value`,
    }
  }
  if(type === "omit" && pickOmitList){
    return _omit(commonValidations, pickOmitList);
  }
  if(type === "pick" && pickOmitList){
    return _pick(commonValidations, pickOmitList);
  }
  return commonValidations;

}