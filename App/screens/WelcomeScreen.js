import React from 'react';
import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';
import AppButton from '../component/AppButton';
import colors from '../confing/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={{uri: 'https://picsum.photos/200/300.jpg'}}>
      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={require('../assets/Logo.png')}></Image>
        <Text style={styles.text}>Green House</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login"></AppButton>
        <AppButton title="Register" color={colors.lightGreen}></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Logo: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 30,
    fontStyle: 'normal',
    color: '#1C7947',
  },
  LogoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
});
export default WelcomeScreen;
