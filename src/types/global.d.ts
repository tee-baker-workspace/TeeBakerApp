import { AppThemeType, ThemeColorsType } from '@/assets';

declare global {
  namespace ReactNativePaper {
    interface Theme extends AppThemeType {}
    interface ThemeColors extends ThemeColorsType {}
    type ThemeColorsKeys = keyof ThemeColorsType;
  }
}
