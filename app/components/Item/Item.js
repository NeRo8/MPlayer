import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import IconSong from '../IconSong';

import styles from './styles';

const Item = ({ author = 'SRNO ft Gia Koka', track = 'Give it All' }) => (
  <View style={styles.container}>
    <IconSong width={60} height={60} />
    <View style={styles.infoBlock}>
      <Text style={styles.author}>{author.substring(0, 30)}</Text>
      <Text style={styles.track}>{track.substring(0, 30)}</Text>
    </View>
    <Icon name="dots-vertical" type="material-community" color="#fff" />
  </View>
);

Item.propTypes = {
  author: PropTypes.string,
  track: PropTypes.string,
  icon: PropTypes.string
};

export default Item;
