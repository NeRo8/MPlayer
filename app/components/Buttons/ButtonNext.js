import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import color from '../../constants/colors';

const ButtonNext = () => (
  <Icon
    size={40}
    name="skip-next"
    type="material-community"
    color={'#fff'}
    containerStyle={styles.container}
  />
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: color.CRIMSON,
    height: 60,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginLeft: 50
  }
});
export default ButtonNext;
