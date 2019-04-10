import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import color from '../../constants/colors';

const ButtonPlay = () => (
  <View style={styles.container}>
    <Icon size={40} name="play" type="material-community" color={'#fff'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: color.CRIMSON,
    height: 100,
    borderRadius: 50
  }
});

export default ButtonPlay;
