import React from 'react';
import { When } from 'react-if';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import TextInputMask from 'react-native-text-input-mask';
import AppText from '@/components/common/app-text/app-text';
import { useAppDatePickerInputStyles } from './app-date-picker-input.style';
import { IAppDatePickerInputProps } from './app-date-picker-input.type';

const SupportedFormatsMapper = {
  'MM/DD/YYYY': '[00]/[00]/[0000]',
};

const AppDatePicker = (props: IAppDatePickerInputProps) => {
  const {
    flex,
    width,
    mode = 'outlined',
    label = '',
    labelProps,
    required,
    placeholder = 'MM/DD/YYYY',
    supportedFormat = 'MM/DD/YYYY',
    error,
    helperText,
    helperTextProps,
    ...rest
  } = props;

  const isFlat = mode === 'flat';

  const styles = useAppDatePickerInputStyles({ isFlat });

  return (
    <View style={[styles.labelGap, { width, flex }]}>
      <When condition={label}>
        <View style={styles.textContainer}>
          <AppText {...labelProps} size={14} variant="medium" color="onBackground">
            {label}
          </AppText>

          <When condition={required}>
            <AppText variant="italic-regular" size={12} color="error">
              *
            </AppText>
          </When>
        </View>
      </When>

      <View>
        <DatePickerInput
          contentStyle={styles.contentStyle}
          outlineStyle={styles.outlineStyle}
          style={styles.inputStyle}
          iconStyle={styles.iconStyle}
          locale="en"
          mode={mode}
          placeholder={placeholder}
          withDateFormatInLabel={false}
          inputMode="start"
          render={renderProps => (
            // @ts-ignore // TODO: Fix this
            <TextInputMask {...renderProps} mask={SupportedFormatsMapper[supportedFormat]} />
          )}
          {...rest}
        />
        <HelperText type={error ? 'error' : 'info'} visible={error || !!helperText} padding="none" {...helperTextProps} style={styles.helperText}>
          {helperText}
        </HelperText>
      </View>
    </View>
  );
};

export default AppDatePicker;
