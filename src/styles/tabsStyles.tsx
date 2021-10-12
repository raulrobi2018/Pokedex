import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  tabs: {
    fontSize: 13,
    color: 'white',
  },
  tabBarLabel: {
    marginBottom: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 0 : 60,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 0,
  },
});
