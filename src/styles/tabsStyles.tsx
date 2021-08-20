import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  tabs: {
    fontSize: 13,
    color: '#ffc266',
  },
  tabBarLabel: {
    marginBottom: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 0 : 60,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 0,
  },
});
