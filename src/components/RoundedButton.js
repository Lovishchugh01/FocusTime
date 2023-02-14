import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/color';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      marginLeft:10,
      marginRight:10,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 2
    },
    text: { color: colors.white, fontSize: size / 3 },
  });