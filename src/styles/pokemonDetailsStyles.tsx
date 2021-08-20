import {Dimensions, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import tinycolor from 'tinycolor2';

const {width, height} = Dimensions.get('window');

const hexToRgbA = (hex: string, opacity: number) => {
  let c;
  try {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        ',' +
        opacity +
        ')'
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// const hexToRgb = hex => {
//   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// };

export const styles = (color: string) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      // backgroundColor: hexToRgbA(color, 0.4),
      backgroundColor: 
      zIndex: -1,
      paddingBottom: 20,
    },
    subContainer: {
      marginTop: 400,
      marginHorizontal: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 20,
      color,
      marginBottom: 10,
    },
    text: {
      color,
    },
    types: {
      flexDirection: 'row',
      marginRight: 10,
    },
    moves: {
      flexDirection: 'row',
      marginRight: 10,
      flexWrap: 'wrap',
    },
    item: {
      color,
      marginRight: 15,
      borderRadius: 5,
      borderColor: color,
      backgroundColor: hexToRgbA(color, 0.2),
      padding: 5,
    },
    itemRow: {
      marginTop: 10,
    },
    row: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    spriteItem: {
      width: 100,
      height: 100,
    },
  });
