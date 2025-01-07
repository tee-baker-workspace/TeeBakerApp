import { APP_NAME } from '@env';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { pickAll } from 'ramda';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Divider } from 'react-native-paper';
import { AppButton, AppCheckboxFormInput, AppTextFormInput, AuthenticationCTA, EmailTextInput, PasswordInput, ScreenWrapper } from '@/components';
import { SCREENS } from '@/navigation/constants';
import { NavigationService, useSignup } from '@/services';
import { ISignupForm } from '@/types/auth';
import { SignupSchema } from '@/utils';
import ContinueWithText from '../components/continue-with-text';
import GreetingText from '../components/greeting-text';
import LoginOptions from '../components/login-options';
import SignupStepper from '../components/signup-stepper';
import { useAuthStyles } from '../styles';

const SignupScreen = ({ navigation }: NativeStackScreenProps<never>) => {
  const styles = useAuthStyles();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<ISignupForm>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
      full_name: '',
      agreement: { checked: false },
    },
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(SignupSchema),
  });

  const { mutate: signupMutation } = useSignup();

  const onSubmit = (formValues: ISignupForm) => {
    const payload = pickAll(['confirm_password', 'email', 'full_name', 'password'], formValues);

    signupMutation(payload, {
      onSuccess: () => {
        NavigationService.navigate(SCREENS.PERSONAL_INFO);
      },
    });
  };

  const goToPrivacyPolicyScreen = () => NavigationService.navigate(SCREENS.PRIVACY_POLICY);
  const goToSignInScreen = () => NavigationService.navigate(SCREENS.SING_IN);

  useEffect(
    () =>
      navigation.setOptions({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerTitle: () => <SignupStepper currentStep={1} />,
      }),
    [navigation],
  );

  return (
    <ScreenWrapper horizontalSpacing={0}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled">
        <View style={[styles.gapLg, styles.spacingMd]}>
          <GreetingText label="Hello there" description="Please enter your email & password to create an account." />

          {/* Form Components */}
          <View>
            <AppTextFormInput name="full_name" control={control} label="Full Name" placeholder="Full Name" />
            <EmailTextInput name="email" control={control} isRequired />
            <PasswordInput control={control} name="password" isRequired />
            <PasswordInput control={control} name="confirm_password" label="Confirm Password" isRequired />
            <AppCheckboxFormInput
              control={control}
              name="agreement"
              label="Terms & Privacy Policy"
              prefixText={`I agree to ${APP_NAME}`}
              labelProps={{
                color: 'primary',
                variant: 'medium',
                onPress: goToPrivacyPolicyScreen,
              }}
            />
            <Divider style={styles.spacingMd} />
          </View>

          {/* Auth CTA */}
          <AuthenticationCTA label="Already have an account?" cta={{ label: 'Sign in', onPress: goToSignInScreen }} />

          {/* Login Options CTAs */}
          <View style={styles.gapMd}>
            <ContinueWithText />
            <LoginOptions />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={[styles.buttonContainer, styles.gapMd]}>
        <Divider />
        <AppButton title="Signup" mode="contained" onPress={handleSubmit(onSubmit)} disabled={!isValid || !isDirty} />
      </View>
    </ScreenWrapper>
  );
};

export default SignupScreen;
