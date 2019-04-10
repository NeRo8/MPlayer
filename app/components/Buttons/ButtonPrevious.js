import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import color from '../../constants/colors';

const ButtonNext = () => (
  <Icon
    size={40}
    name="skip-previous"
    type="material-community"
    color={'#fff'}
    containerStyle={styles.container}
    onPress={() => {}}
    underlayColor={color.CRIMSON}
  />
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: color.CRIMSON,
    height: 60,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
  }
});
export default ButtonNext;
