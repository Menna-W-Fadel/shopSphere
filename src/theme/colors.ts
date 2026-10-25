
export const palette = {
  // Brand Primitives
  forestGreen: '#183C35',
  softLime: '#D5E8A8',
  darkLimeAction: '#A9CD83',
  darkLimeActionText: '#17231B',
  warmIvory: '#F8F7F2',
  white: '#FFFFFF',

  // Light Palette Neutrals
  neutral900: '#202622', // Primary text
  neutral500: '#777F79', // Secondary text
  neutral200: '#E6E8E2', // Borders/dividers

  // Dark Palette Neutrals
  darkBg: '#111714',
  darkSurface: '#1B2420',
  darkElevated: '#24312B',
  darkTextPrimary: '#F2F5F0',
  darkTextSecondary: '#A7B2AA',
  darkBorder: '#344239',

  // Status & Feedback
  error: '#BA3D3D',
  errorLight: '#FBEBEB',
  success: '#287A50',
  successLight: '#EAF5EF',
  warning: '#E5A000',
} as const;

export interface ColorTheme {
  background: string;
  surface: string;
  surfaceElevated: string;
  primaryAction: string;
  primaryActionText: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  error: string;
  errorLight: string;
  success: string;
  successLight: string;
  card: string;
  overlay: string;
}

export const lightColors: ColorTheme = {
  background: palette.warmIvory,
  surface: palette.white,
  surfaceElevated: palette.white,
  primaryAction: palette.forestGreen,
  primaryActionText: palette.white,
  accent: palette.softLime,
  textPrimary: palette.neutral900,
  textSecondary: palette.neutral500,
  border: palette.neutral200,
  error: palette.error,
  errorLight: palette.errorLight,
  success: palette.success,
  successLight: palette.successLight,
  card: palette.white,
  overlay: 'rgba(24, 60, 53, 0.4)',
};

export const darkColors: ColorTheme = {
  background: palette.darkBg,
  surface: palette.darkSurface,
  surfaceElevated: palette.darkElevated,
  primaryAction: palette.darkLimeAction,
  primaryActionText: palette.darkLimeActionText,
  accent: palette.softLime,
  textPrimary: palette.darkTextPrimary,
  textSecondary: palette.darkTextSecondary,
  border: palette.darkBorder,
  error: palette.error,
  errorLight: 'rgba(186, 61, 61, 0.2)',
  success: palette.success,
  successLight: 'rgba(40, 122, 80, 0.2)',
  card: palette.darkSurface,
  overlay: 'rgba(0, 0, 0, 0.65)',
};