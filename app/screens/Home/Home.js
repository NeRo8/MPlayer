import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

import IconSong from '../../components/IconSong';
import ProgressBar from '../../components/ProgressBar';
import ControlePanel from '../../components/ControlePanel';

import color from '../../constants/colors';
import styles from './styles';
import InfoBlock from '../../components/InfoBlock';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Icon
          containerStyle={styles.settings}
          name="settings-outline"
          type="material-community"
          size={28}
          color="#fff"
          underlayColor="transparent"
          onPress={() => console.log('hello')}
        />
        <ProgressBar />

        <InfoBlock />

        <ControlePanel />
      </View>
    );
  }
}

export default Home;
