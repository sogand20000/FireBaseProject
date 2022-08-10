import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';

const App = () => {
  console.log(Dimensions.get('screen'));
  const handlePress = () => {
    console.log('Text pressed');
  };
  const alert = () => {
    Alert.alert('hi', 'my message', [
      {text: 'Yes', onPress: () => console.log('Yes')},
      {text: 'No', onPress: console.log('No')},
    ]);
  };
  return (
    <View style={styles.container}>
      {/*  <Text numberOfLines={9} onPress={handlePress} allowFontScaling={true}>
        In the following example, the nested title and body <Text>text </Text>{' '}
        will inherit the fontFamily from styles.baseText, but the title provides
        its own additional styles. The title and body will stack on top of each
        other on account of the literal newlines:
      </Text> */}
      {/*  <TouchableOpacity activeOpacity={0.4}>
        <Image
          fadeDuration={5000}
          blurRadius={20}
          source={{
            height: 300,
            width: 300,
            uri: 'https://picsum.photos/id/237/200/300',
          }}
        />
      </TouchableOpacity> */}
      <Button title="Click me" onPress={alert} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: Platform.OS === 'android' ? 'gray' : 'green',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
