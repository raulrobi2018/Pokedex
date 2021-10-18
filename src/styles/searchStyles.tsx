import {StyleSheet, Platform, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = (top: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: Platform.OS === 'ios' ? top : top + 10,
      marginHorizontal: 20,
    },
    inputContainer: {
      position: 'absolute',
      zIndex: 999,
      borderRadius: 10,
      //   Le quito el margen horizontal del container
      width: screenWidth - 40,
      top: Platform.OS === 'ios' ? top : top + 20,
      borderColor: 'rgba(217, 217, 217, 1)',
      borderWidth: 1,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 1,
      // },
      // shadowOpacity: 0.22,
      // shadowRadius: 2.22,

      // elevation: 3,
      backgroundColor: 'rgba(242, 242, 242, 0.5)',
    },
    textInputContainer: {
      backgroundColor: 'rgba(242, 242, 242, 0.5)',
      borderRadius: 10,
      height: 50,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 0,
    },
    textInput: {
      flex: 1,
      fontSize: 18,
      top: Platform.OS === 'ios' ? 0 : 2,
      backgroundColor: 'rgba(242, 242, 242, 0.5)',
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
