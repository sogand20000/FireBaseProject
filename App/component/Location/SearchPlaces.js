import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeBaseProvider, Icon, Button, CloseIcon} from 'native-base';

function SearchPlaces({onPress, deleteSearch}) {
  return (
    <>
      <NativeBaseProvider>
        <GooglePlacesAutocomplete
          renderRightButton={() => (
            <TouchableOpacity onPress={deleteSearch}>
              <CloseIcon size="5" mt="0.4"></CloseIcon>
            </TouchableOpacity>
          )}
          placeholder="Search"
          currentLocation={true}
          currentLocationLabel="Current location"
          keyboardShouldPersistTaps="always"
          fetchDetails={true}
          onPress={onPress}
          textInputProps={
            {
              // InputComp: Input,
              // leftIcon: {type: 'native-base', name: 'CloseIcon'},
              // errorStyle: {color: 'red'},
            }
          }
          styles={{
            textInputContainer: {
              // backgroundColor: 'grey',
            },
            textInput: {
              // height: 38,
              borderWidth: 2,
              fontSize: 16,
              borderColor: '#52AD6B',
              borderRadius: 50,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          query={{
            key: 'AIzaSyAjUc4s9xv1WJCtqHayg1caHy56XbivnwI',
            language: 'en',
            type: 'park',
            Icon: <CloseIcon size="5" mt="0.4"></CloseIcon>,
          }}
          GooglePlacesDetailsQuery={{field: 'geometry'}}
        />
      </NativeBaseProvider>
    </>
  );
}

export default SearchPlaces;
const styles = StyleSheet.create({
  input: {
    borderColor: '#52AD6B',
    borderWidth: 1,
    borderRadius: 50,
  },
});
