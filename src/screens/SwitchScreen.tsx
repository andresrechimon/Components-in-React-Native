import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { Header } from '../components/Header';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value, field) => {
    setState({
      ...state,
      [field]:value
    })
  }

  return (
    <View style={{marginHorizontal: 20}}>

      <Header title="Switches"/>

      <View style={styles.switchRow}>
        <Text style={styles.switchDetails}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchDetails}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchDetails}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')}/>
      </View>


      <Text style={styles.switchDetails}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10
    },
    switchDetails: {
      fontSize: 20
    }
});
