import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme, Theme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { adaptNavigationTheme, Snackbar } from 'react-native-paper';
import { useErrorHandler, useLoadingHandler } from 'react-utils';
import { isEmptyOrNil } from 'shared-utils';
import { URBANIST_FONTS } from './assets/theme';
import { AppLoader } from './components';
import AppNavigationContainer from './navigation';
import { useVerifySession } from './services';
import { useIsDarkTheme } from './utils';

// enables paper theme configuration with react-native navigation
const { DarkTheme, LightTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
  reactNavigationLight: NavigationLightTheme,
});

const AppWrapper = () => {
  useVerifySession();

  const { error, dispatch } = useErrorHandler();
  const { isLoading } = useLoadingHandler();
  const isDark = useIsDarkTheme();

  const navigationTheme: Theme = useMemo(() => {
    return {
      colors: isDark ? DarkTheme.colors : LightTheme.colors,
      dark: isDark,
      fonts: {
        bold: { fontFamily: URBANIST_FONTS.bold, fontWeight: '700' },
        heavy: { fontFamily: URBANIST_FONTS.bold, fontWeight: '900' },
        medium: { fontFamily: URBANIST_FONTS.medium, fontWeight: '600' },
        regular: { fontFamily: URBANIST_FONTS.regular, fontWeight: '400' },
      },
    };
  }, [isDark]);

  return (
    <React.Fragment>
      <AppNavigationContainer theme={navigationTheme} />
      <AppLoader isLoading={isLoading} />

      <Snackbar visible={!isEmptyOrNil(error)} onDismiss={() => dispatch(null)}>
        {error?.message}
      </Snackbar>
    </React.Fragment>
  );
};

export default AppWrapper;
