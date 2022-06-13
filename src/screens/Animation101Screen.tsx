import React, {useRef} from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, startMoving, opacity, position }  = useAnimation();

  return (
    <View style={styles.container}>
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity:opacity,
          transform: [{
            translateX: position
          }]
          }}/>
          <Button
          title="Fade In"
          onPress={() => {fadeIn(); startMoving(100);}}
          />

          <Button
          title="Fade Out"
          onPress={fadeOut}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
