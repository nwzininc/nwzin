import { ColorScale } from '../../helper';

export interface ThemeBuilderProps {
  color?: string;
}

export interface ThemeColorPickerProps {
  colorScale: ColorScale;
  title: string;
  handleChange: (colorScale: ColorScale) => void;
}
