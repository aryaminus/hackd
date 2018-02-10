import { StyleSheet } from 'react-native';
import config from '../config/default';

export default StyleSheet.create({
  pre: {
    fontSize: 12,
    color: config.colors.code,
    backgroundColor: config.colors.gray,
    borderWidth: 1,
    borderColor: config.colors.darkGray,
    borderRadius: 5,
  },
});
