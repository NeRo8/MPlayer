import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';

import Item from '../Item';

import styles from './styles';

const ItemList = () => (
  <View style={styles.container}>
    <Item />
    <Divider />
    <Item />
    <Divider />
    <Item />
    <Divider />
  </View>
);
export default ItemList;
