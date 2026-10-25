import { lightColors, darkColors } from './colors';
import { spacing } from './spacing';
import { radii } from './radii';
import { typography } from './typography';

export const lightTheme = {
  colors: lightColors,
  spacing,
  radii,
  typography,
};

export type AppTheme = typeof lightTheme;

export const darkTheme: AppTheme = {
  colors: darkColors,
  spacing,
  radii,
  typography,
};