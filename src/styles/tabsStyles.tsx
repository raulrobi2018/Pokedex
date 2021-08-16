import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  tabs: {
    backgroundColor: 'blue',
  },
  tabBarLabel: {
    color: 'green',
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },
});
