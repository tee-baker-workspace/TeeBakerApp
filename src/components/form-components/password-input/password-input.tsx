import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '@/assets';
import { useStyles } from '@/styles';
import AppTextFormInput from '../app-text-input/app-text-form-input';
import { AppTextFormInputProps } from '../app-text-input/app-text-input.type';

const PasswordInput = (props: Omit<AppTextFormInputProps, 'right' | 'keyboardType'>) => {
  const { mode = 'outlined', ...rest } = props;

  const [secureText, setSecureText] = useState(true);
  const { colors } = useAppTheme();
  const styles = useStyles();

  const togglePassword = () => {
    setSecureText(!secureText);
  };

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Password"
      placeholder="Password"
      keyboardType="visible-password"
      secureTextEntry={secureText}
      right={
        <TextInput.Icon
          icon={secureText ? 'eye-off' : 'eye'}
          size={20}
          style={styles.inputFieldRightIcon}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
          onPress={togglePassword}
        />
      }
      {...rest}
    />
  );
};

export default PasswordInput;
