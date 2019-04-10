import { StyleSheet } from 'react-native';
import color from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '20%',
    backgroundColor: color.PURPUR
  },
  settings: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 20,
    width: 40,
    height: 40,
    top: 40,
    right: 40,
    backgroundColor: color.CRIMSON
  }
});
