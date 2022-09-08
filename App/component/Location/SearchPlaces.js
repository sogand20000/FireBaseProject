import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
function SearchPlaces({onPress}) {
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        currentLocation={true}
        currentLocationLabel="Current location"
        keyboardShouldPersistTaps="always"
        fetchDetails={true}
        onPress={onPress}
        query={{
          key: 'AIzaSyAjUc4s9xv1WJCtqHayg1caHy56XbivnwI',
          language: 'en',
          type: 'park',
        }}
        GooglePlacesDetailsQuery={{field: 'geometry'}}
      />
    </>
  );
}

export default SearchPlaces;
