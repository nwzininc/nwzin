import { Input } from '@chakra-ui/react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AlignConfigurator from '../../../../components/alignConfigurator';
import { FC } from 'react';
import { ConfigType } from './types';
import FontWeightConfigurator from '../../../../components/FontWeightConfigurator';
import SizeConfigurator from '../../../../components/sizeConfigurator';
import PaddingConfigurator from '../../../../components/paddingConfigurator';
import BorderConfigurator from '../../../../components/borderConfigurator';
import ColorConfigurator from '../../../../components/colorConfigurator';
import opacityConfigurator from '../../../../components/opacityConfigurator';
import effectConfigurator from '../../../../components/effectConfigurator';
import SwitchCofigurator from '../../../../components/switchConfigurator';

export const configOptionComponentMapping: Record<
  ConfigType,
  any | FC<any>
> = {
  Input: Input,
  Dropdown: Dropdown,
  Color: ColorConfigurator,
  Align: AlignConfigurator,
  FontWeight: FontWeightConfigurator,
  FontSize: SizeConfigurator,
  Padding: PaddingConfigurator,
  Margin: PaddingConfigurator,
  Border: BorderConfigurator,
  BackgroundColor: ColorConfigurator,
  Opacity: opacityConfigurator,
  Effect: effectConfigurator,
  Switch: SwitchCofigurator
};

export const getComponentByConfigMapping = (type: ConfigType) => {
  return configOptionComponentMapping[type];
};
