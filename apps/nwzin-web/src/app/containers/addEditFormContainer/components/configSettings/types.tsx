import { IconType } from 'react-icons/lib';
import { PageItem } from '../../types';

export interface ConfigSettingsProps {
  id?: string;
}

export type ConfigType =
  | 'Input'
  | 'Dropdown'
  | 'Color'
  | 'BackgroundColor'
  | 'Align'
  | 'FontWeight'
  | 'FontSize'
  | 'Padding'
  | 'Margin'
  | 'Border'
  | 'Opacity'
  | 'Effect'
  | 'Switch';

export interface ConfigOption {
  label: string;
  value: string;
  icon?: IconType;
  flag?: IconType;
}
export interface DesignerConfig {
  type: ConfigType;
  placeholder: string;
  label: string;
  options?: ConfigOption[];
  required?: boolean;
  errorMessage?: string;
  validations?: null;
  isMulti?: boolean;
  id: string;
  designerConfig?: boolean;
}
export interface ConfigFieldRendererProps {
  configs: DesignerConfig | Record<string, DesignerConfig>;
  field: PageItem;
  title: string;
}
