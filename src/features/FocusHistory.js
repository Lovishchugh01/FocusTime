import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/color'
import {fontSizes} from '../utils/sizes'
import {spacing} from '../utils/sizes'
export default FocusHistory = ({history}) =>{
  
  if(!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}>👉🏻 {item} </Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Focused on :</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    paddingLeft: spacing.md,
    fontWeight: 'bold'
  },
  item:{
    fontSize: fontSizes.lg,
    paddingLeft: spacing.md,
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
    color: 'white'
  }
})