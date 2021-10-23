import {useState} from 'react';
import ImageColors from 'react-native-image-colors';

const DEFAULT_COLOR = '#a6a6a6';

// export const useBgcolor = (id: string) => {
//   const [bgColor, setBgColor] = useState('grey');

//   //   IOS background
//   //Android: dominant color
//   ImageColors.getColors(pokemon.picture, {fallback: DEFAULT_COLOR})
//     .then(colors => {
//     //   if (!isMounted.current) return;

//       colors.platform === 'android'
//         ? setBgColor(colors.dominant || DEFAULT_COLOR)
//         : setBgColor(colors.background || DEFAULT_COLOR);
//     })
//     .catch(err => {
//       setBgColor(DEFAULT_COLOR);
//     });

//   return {bgColor};
// };
