import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <Header title="Modals" />
      <Button title="Show Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="slide" visible={isVisible} transparent={true}>
        {/* Black background */}
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', justifyContent: 'center', alignItems: 'center'}}>
          {/* Modal content */}
          <View style={{
            backgroundColor: 'white', 
            width: 200, 
            height: 200, 
            justifyContent: 'center', 
            alignItems: 'center',
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 20, fontWeight: '300', marginBottom: 20}}>Body</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
