import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    flexDirection: 'column'
  },
  author: {
    justifyContent: 'flex-start',
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: '300'
  },
  track: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  }
});
