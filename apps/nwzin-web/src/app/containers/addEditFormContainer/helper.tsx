import { nanoid } from 'nanoid';
import Color from 'color';
import { getDefaultConfigurationsByComponentId } from './mapping';
import { DroppedItem, PageItem } from './types';

export const buildChildNode = (
  item: DroppedItem,
  parentId: string
): PageItem | undefined => {
  const configurations = getDefaultConfigurationsByComponentId(item.id);
  if (!configurations) {
    return undefined;
  }
  return {
    id: nanoid(),
    componentId: item.id,
    parentId,
    componentType: 'FORM_FIELD',
    childNodes: [],
    configurations: configurations,
  };
};

export const colorVariationBuilder = (centerColor: CenterColor): ColorScale => {
  return {
    50: Color(centerColor).lighten(0.9)
      .hex(),
    100: Color(centerColor).lighten(0.7)
    //   .lightness(10 + lightnessStep * 9)
    //   .rotate(lightRotateStep * 9)
    //   .saturate(lightRotateStep * 9)
      .hex(),
    200: Color(centerColor).lighten(0.5)
    //   .lightness(10 + lightnessStep * 8)
    //   .rotate(lightRotateStep * 8)
    //   .saturate(lightRotateStep * 8)
      .hex(),
    300: Color(centerColor).lighten(0.3)
    //   .lightness(10 + lightnessStep * 7)
    //   .rotate(lightRotateStep * 7)
    //   .saturate(lightRotateStep * 7)
      .hex(),
    400: Color(centerColor).lighten(0.2)
    //   .lightness(10 + lightnessStep * 6)
    //   .rotate(lightRotateStep * 6)
    //   .saturate(lightSaturateStep * 6)
      .hex(),
    500: Color(centerColor)
    //   .lightness(10 + lightnessStep * 4)
    //   .rotate(lightRotateStep * 4)
    //   .saturate(lightSaturateStep * 4)
      .hex(),
    600: Color(centerColor).darken(0.1)
    //   .lightness(10 + lightnessStep * 3)
    //   .rotate(lightRotateStep * 3)
    //   .saturate(lightSaturateStep * 3)
      .hex(),
    700: Color(centerColor).darken(0.2)
    //   .lightness(10 + lightnessStep * 2)
    //   .rotate(lightRotateStep * 2)
    //   .saturate(lightSaturateStep * 2)
      .hex(),
    800: Color(centerColor).darken(0.3)
      .hex(),
    900: Color(centerColor).darken(0.5).hex(),
  };
};

export type CenterColor = string;

export interface  ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
} 