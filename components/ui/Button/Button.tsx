import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button as ButtonType} from '../../../types/button';

import RNPickerSelect from 'react-native-picker-select';
import Icon from '../Icon/Icon';
import {years} from '../../../utils/years';
import {useState} from 'react';

export default function Button({
  label,
  icon,
  picker,
  handlePickerSelect,
  handleClick,
  pickerValue,
  setPickerValue,
}: ButtonType) {
  if (picker && handlePickerSelect && setPickerValue)
    return (
      <TouchableOpacity style={[styles.button]}>
        <RNPickerSelect
          value={pickerValue}
          style={{
            inputIOS: styles.resetStyle,
            placeholder: styles.resetStyle,
            iconContainer: styles.resetIcon,
          }}
          placeholder={{label}}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value: string) => {
            handlePickerSelect(value), setPickerValue(value);
          }}
          items={years}
          // @ts-ignore
          Icon={() => {
            return <Icon icon="select" />;
          }}
        />
      </TouchableOpacity>
    );

  return (
    <>
      {handleClick && (
        <TouchableOpacity style={[styles.button]} onPress={() => handleClick()}>
          <Text style={[styles.buttonText]}>{label}</Text>
          {icon && <Icon icon={icon} />}
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#215184',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  resetStyle: {
    color: 'white',
    marginRight: 20,
    height: '100%',
    width: '100%',
  },
  resetIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
