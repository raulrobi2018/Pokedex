import {StyleSheet, Platform, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = (top: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      //   marginTop: Platform.OS === 'ios' ? top : top + 10,
      marginHorizontal: 20,
    },
    inputContainer: {
      position: 'absolute',
      zIndex: 999,
      //   Le quito el margen horizontal del container
      width: screenWidth - 40,
      top: Platform.OS === 'ios' ? top : top + 20,
    },
    textInputContainer: {
      backgroundColor: 'rgb(217, 217, 217)',
      borderRadius: 20,
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    textInput: {
      flex: 1,
      fontSize: 18,
      top: Platform.OS === 'ios' ? 0 : 2,
    },
    activityIndicatorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activityIndicator: {
      height: 100,
    },
    globalMargin: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      paddingBottom: 10,
    },
    flatList: {
      paddingTop: top + 80,
    },
  });
