import { Platform } from 'react-native';

export type InputConfig = {
  name: string;
  placeholder: string;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
};

export const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const;
export const GENDER_OPTIONS = ['kid', 'men', 'women', 'unisex'] as const;

export const DEFAULT_MARGIN = 10;
export const INPUT_MARGIN_STYLE = { marginVertical: 5 } as const;
export const ROW_STYLE = { marginHorizontal: DEFAULT_MARGIN, marginVertical: 5, flexDirection: 'row', gap: 10 } as const;
export const CONTAINER_BOTTOM_STYLE = { marginHorizontal: DEFAULT_MARGIN, marginBottom: 50, marginTop: 20 } as const;
export const BUTTON_STYLE = { height: 60 } as const;
export const KEYBOARD_BEHAVIOR = Platform.OS === 'ios' ? 'padding' : undefined;

export const TEXT_INPUTS: InputConfig[] = [
  { name: 'title', placeholder: 'Título' },
  { name: 'slug', placeholder: 'Slug' },
  { name: 'description', placeholder: 'Descripción', multiline: true, numberOfLines: 4 },
  { name: 'price', placeholder: 'Precio', keyboardType: 'numeric' },
  { name: 'stock', placeholder: 'Stock', keyboardType: 'numeric' },
];

export default {
  SIZE_OPTIONS,
  GENDER_OPTIONS,
  TEXT_INPUTS,
  DEFAULT_MARGIN,
  INPUT_MARGIN_STYLE,
  ROW_STYLE,
  CONTAINER_BOTTOM_STYLE,
  BUTTON_STYLE,
  KEYBOARD_BEHAVIOR,
};
