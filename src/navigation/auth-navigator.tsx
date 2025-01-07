import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LandingScreen, PersonalInfoScreen, SigninScreen, SignupScreen } from '@/screens';
import AppHeader from './app-header/app-header';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name={SCREENS.SING_IN} component={SigninScreen} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignupScreen} />
      <Stack.Screen name={SCREENS.PERSONAL_INFO} component={PersonalInfoScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
