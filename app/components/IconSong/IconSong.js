import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const IconSong = ({ width, height }) => (
  <View>
    <Image
      source={require('./images/logo.jpg')}
      resizeMode="contain"
      style={{ width: width, height: height, borderRadius: width / 2 }}
    />
  </View>
);

IconSong.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default IconSong;
