import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {View, Text, Alert, StyleSheet, PermissionsAndroid} from 'react-native';

function Map(props) {
  useEffect(() => {
    if (PermissionsAndroid) {
      console.log('yae');
      /*   Geolocation.getCurrentPosition(positoin =>
        setRegion({
          lat: positoin.coords.latitude,
          lng: positoin.coords.longitude,
        }),
      ); regionCoords.Field*/
    }
  }, []);
  return (
    <>
      <Text>bb</Text>
      <MapView
        //onRegionChange={onRegionChange}
        provider={null}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}></MapView>
    </>
  );
}

export default Map;
const styles = StyleSheet.create({
  map: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: 600,
    width: 600,
    backgroundColor: 'red',
  },
});
