import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({title,...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FE4C0E',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttontext: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
