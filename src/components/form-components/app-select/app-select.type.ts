import { Control } from 'react-hook-form';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { HelperTextProps } from 'react-native-paper';
import { AppTextProps } from '@/components/common/app-text/app-text.type';

export interface SelectItem<T> {
  label: string;
  value: T;
  color?: string;
}

export interface IAppSelectProps<T> {
  label?: string;
  labelProps?: AppTextProps;
  placeholder?: string;
  placeholderStyle?: StyleProp<ViewStyle>;
  items: SelectItem<T>[];
  onValueChange: (value: T) => void;
  value?: T;
  width?: DimensionValue;
  flex?: number;
  error?: boolean;
  helperText?: string;
  helperTextProps?: HelperTextProps;
  disabled?: boolean;
  required?: boolean;
  selectStyle?: StyleProp<ViewStyle>;
  selectContainerStyle?: StyleProp<ViewStyle>;
}

export interface IAppFormSelectProps<T> extends Omit<IAppSelectProps<T>, 'value' | 'onValueChange' | 'error'> {
  name: string;
  control: Control<any>;
  handleOnChange?: (value: T) => void;
}
