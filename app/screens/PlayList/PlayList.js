import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import ItemList from '../../components/ItemList';

import styles from './styles';

class PlayList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ItemList />
      </View>
    );
  }
}

export default PlayList;
