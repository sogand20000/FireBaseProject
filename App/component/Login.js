import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../confing/colors';
function Login({props}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('hi')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  button: {
    width: '100%',
    height: 65,
    backgroundColor: colors.tomato,
    padding: 15,
    borderRadius: 45,
  },
  text: {
    color: colors.white,
    fontSize: 25,
    textAlign: 'center',
  },
});
export default Login;
