import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {Text, StyleSheet} from 'react-native';

function Map({regionCoords, regionChange}) {
  return (
    <>
      <MapView
        onRegionChange={regionChange}
        provider={null}
        style={styles.map}
        region={{
          latitude: regionCoords.lat,
          longitude: regionCoords.lng,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
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
