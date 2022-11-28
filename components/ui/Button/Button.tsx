import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button as ButtonType} from '../../../types/button';

export default function Button({label, icon}: ButtonType) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={[styles.buttonText]}>{label}</Text>
      {icon && icon}
    </TouchableOpacity>
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
  },
});
