import { Control } from 'react-hook-form';
import { DimensionValue } from 'react-native';
import { HelperTextProps } from 'react-native-paper';
import { DatePickerInputProps } from 'react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared';
import { AppTextProps } from '@/components/common/app-text/app-text.type';

export interface IAppDatePickerInputProps extends Omit<DatePickerInputProps, 'inputMode' | 'locale' | 'render'> {
  label?: string;
  labelProps?: AppTextProps;
  width?: DimensionValue;
  flex?: number;
  required?: boolean;
  supportedFormat?: 'MM/DD/YYYY';
  helperText?: string;
  helperTextProps?: HelperTextProps;
}

export interface IAppDatePickerFormInputProps extends Omit<IAppDatePickerInputProps, 'value' | 'onChange' | 'hasError' | 'error'> {
  control: Control<any>;
  name: string;
  handleOnChange?: (date: Date) => void;
}
