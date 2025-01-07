import React from 'react';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '@/assets';
import { useStyles } from '@/styles';
import AppTextFormInput from '../app-text-input/app-text-form-input';
import { AppTextFormInputProps } from '../app-text-input/app-text-input.type';

const EmailTextInput = (props: Omit<AppTextFormInputProps, 'right' | 'keyboardType'>) => {
  const { mode = 'outlined', ...rest } = props;
  const { colors } = useAppTheme();
  const styles = useStyles();

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Email"
      placeholder="Email"
      keyboardType="email-address"
      right={
        <TextInput.Icon
          icon="email-outline"
          size={20}
          style={styles.inputFieldRightIcon}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
        />
      }
      {...rest}
    />
  );
};

export default EmailTextInput;
