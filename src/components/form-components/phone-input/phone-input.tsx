/* eslint-disable @typescript-eslint/no-unused-vars */

// import TextInputMask from 'react-native-text-input-mask';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '@/assets';
import { useStyles } from '@/styles';
import AppTextFormInput from '../app-text-input/app-text-form-input';
import { AppTextFormInputProps } from '../app-text-input/app-text-input.type';

const PhoneInput = (props: Omit<AppTextFormInputProps, 'right' | 'render'> & { mask?: string }) => {
  const { mode = 'outlined', mask = '+92 [000] [000] [0000]', ...rest } = props;
  const { colors } = useAppTheme();
  const styles = useStyles();

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Phone Number"
      placeholder="Phone number"
      keyboardType="email-address"
      right={
        <TextInput.Icon
          icon="phone"
          size={20}
          style={styles.inputFieldRightIcon}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
        />
      }
      // @ts-ignore // TODO: Fix this
      // TextInputMask isn't compatible with react-native latest version
      // We are commenting this line to avoid the crash
      // render={renderProps => <TextInputMask {...renderProps} mask={mask} />}
      {...rest}
    />
  );
};

export default PhoneInput;
