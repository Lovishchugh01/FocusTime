import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { colors } from '../utils/color';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export default Timing = ({onChangeTime}) =>{
  const [subject, setSubject] = useState(null);
  return (
  <View style={styles.timingButton} >
    <RoundedButton size={80} title='10' onPress={()=>{onChangeTime(10)}}/>
    <RoundedButton size={80} title='15' onPress={()=>{onChangeTime(15)}}/>
    <RoundedButton size={80} title='20' onPress={()=>{onChangeTime(20)}}/>
  </View>
)}

const styles = StyleSheet.create({
  timingButton:{
    flexDirection: 'row',
    
  }
})