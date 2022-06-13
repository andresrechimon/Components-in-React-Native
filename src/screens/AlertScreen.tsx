import React from 'react';
import {View, Alert, Button} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert('Alert Clicked!!!', 'If you are seeing this, it means its worked :)', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.globalMargin}>
      <Header title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};
