import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  tabBarLabel: {
    color: 'green',
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },
});
