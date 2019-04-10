import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const InfoBlock = () => (
  <View style={styles.container}>
    <Text style={styles.artist}>SRNO ft. Gia Koka </Text>
    <Text style={styles.track}>Give It All Up</Text>
  </View>
);

export default InfoBlock;
