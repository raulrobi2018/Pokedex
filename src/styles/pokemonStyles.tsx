import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = (color: string, top: number) =>
  StyleSheet.create({
    headerContainer: {
      backgroundColor: color,
      height: height - height * 0.55,
      width,
      zIndex: 999,
      borderBottomLeftRadius: 1000,
      borderBottomRightRadius: 1000,
    },
    backButton: {
      position: 'absolute',
      top: top + 5,
      left: 20
    },
    name: {
color: 'white',
fontSize: 35,
alignSelf: 'flex-start',
left: 20,
top: top + 40
    },
    id: {
color: 'white',
fontSize: 20,
alignSelf: 'flex-start',
left: 20,
top: top + 45
    }
  });
