import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ButtonPrevious from '../Buttons/ButtonPrevious';
import ButtonPlay from '../Buttons/ButtonPlay';
import ButtonNext from '../Buttons/ButtonNext';

import styles from './styles';

class ControlePanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonPrevious />
        <ButtonPlay />
        <ButtonNext />
      </View>
    );
  }
}

export default ControlePanel;
