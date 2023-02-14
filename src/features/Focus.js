import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { colors } from '../utils/color';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export default Focus = ({addSubject}) =>{
  const [subject, setSubject] = useState(null);
  return (
  <View style = {styles.container}>
    <View style = {styles.inputContainer}>
      <TextInput style= {styles.textInput} onChangeText={setSubject} label="Focus Item" />
      <View style= {styles.button}>
        <RoundedButton title="⏱️" size={50} onPress = {() => addSubject(subject)}/>
      </View>
    </View>
  </View>
)}
const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContext: 'center',
    flexDirection: 'row',
  }
})
