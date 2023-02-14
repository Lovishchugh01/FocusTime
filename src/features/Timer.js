import React, {useState}  from 'react';
import { View, Text, StyleSheet, Platform, Vibration} from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import {Countdown}  from '../components/Countdown';
import {RoundedButton} from '../components/RoundedButton'
import Timing from './Timing'
import {spacing} from '../utils/sizes'
import {colors} from '../utils/color'


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setminutes] = useState(0.1)
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return(
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
          minutes={minutes}
          isPaused={!isStarted} 
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{paddingTop:spacing.lg}}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar progress={progress} color='white' style={{height: spacing.sm}}/>
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setminutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && <RoundedButton title="Start" onPress={() => {setIsStarted(true)}} size={120}/>}
        {isStarted && <RoundedButton title="Pause" onPress={() => {setIsStarted(false)}} size={120}/>}
      </View>

      <View style={styles.clear}>
        <RoundedButton size={40} title='🗑️' onPress={clearSubject}/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex:0.4,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonWrapper: {
    flex:0.25,
    flexDirection: 'row',
    padding: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20

  },
  clear: {
    alignItems:'center'
  }
})