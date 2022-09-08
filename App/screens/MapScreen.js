import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import Map from '../component/Location/Map';
/* navigator.geolocation = require('@react-native-community/geolocation');
 */ import {
  View,
  Text,
  Alert,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';

function MapScreen(props) {
  const [regionCoords, setRegion] = useState({
    lat: 37.78825,
    lng: -122.4324,
  });
  const regionChange = () => {
    setRegion(regionCoords);
  };
  useEffect(() => {
    if (PermissionsAndroid) {
      Geolocation.getCurrentPosition(positoin =>
        setRegion({
          lat: positoin.coords.latitude,
          lng: positoin.coords.longitude,
        }),
      );
    }
  }, [regionCoords.coords]);
  return <Map regionCoords={regionCoords} regionChange={regionChange}></Map>;
}

export default MapScreen;
