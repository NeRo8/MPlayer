import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import color from '../../constants/colors';
import IconSong from '../IconSong';

const ProgressBar = () => (
  <View>
    <AnimatedCircularProgress
      size={220}
      width={5}
      fill={50}
      rotation={0}
      tintColor={color.CRIMSON}
      onAnimationComplete={() => console.log('onAnimationComplete')}
      backgroundColor={color.SILVER}
    >
      {fill => <IconSong width={200} height={200} />}
    </AnimatedCircularProgress>
  </View>
);

export default ProgressBar;
