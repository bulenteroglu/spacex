import {ViewStyle} from 'react-native';

export interface Button {
  label: string;
  icon?: IconTypes;
  picker?: boolean;
  handlePickerSelect?(value: string): void;
  handleClick?(): void;
  pickerValue?: string;
  setPickerValue?(value: string): void;
}

export type IconTypes = 'sort' | 'refresh' | 'select';
