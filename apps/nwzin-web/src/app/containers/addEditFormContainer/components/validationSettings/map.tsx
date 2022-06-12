import { FC } from 'react';
import { ValidationType } from './types';
import SwitchCofigurator from '../../../../components/switchConfigurator';
import ValidationInput from '../../../../components/validationInput';

export const configOptionComponentMapping: Record<
ValidationType,
  any | FC<any>
> = {
  "required": SwitchCofigurator,
  "max": ValidationInput,
  "min" : ValidationInput,
  "maxLength": ValidationInput,
  "minLength": ValidationInput,
};

export const getComponentByValidationMapping = (type: ValidationType) => {
  return configOptionComponentMapping[type];
};
