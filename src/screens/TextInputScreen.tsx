import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Text, ScrollView } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import {Header} from '../components/Header';
import { useForm } from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {

  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  })

  return (
    <ScrollView>
      <View style={styles.globalMargin}>
        <Header title="TextInputs"/>

        <TextInput 
          style={stylesScreen.inputStyle} 
          placeholder="Ingrese su nombre"
          autoCorrect={false} //Autocorrect disabled
          autoCapitalize='words' //Uppercase each word (useful for names)
          onChangeText={(value) => onChange(value, 'name')}
          />
        <TextInput 
          style={stylesScreen.inputStyle} 
          placeholder="Ingrese su email"
          autoCapitalize='none'
          onChangeText={(value) => onChange(value, 'email')}
          keyboardType="email-address" //Adjust keyboard to type emails
          />
        <TextInput 
          style={stylesScreen.inputStyle} 
          placeholder="Ingrese su teléfono"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'phone')}
          keyboardType="phone-pad" //Adjust keyboard to type phone numbers
          />

      <View style={styles.switchRow}>
        <Text style={styles.switchDetails}>Subscribirse:</Text>
        <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')}/>
      </View>

      <Text>
        {
          (JSON.stringify(form, null, 3))
        }
      </Text>
      </View>
    </ScrollView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10
  }
});
