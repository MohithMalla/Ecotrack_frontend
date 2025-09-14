import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let intervalId;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status!=='granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      intervalId = setInterval(async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }, 1000);
    })();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {errorMsg ? (
        <Text style={{ color: 'red' }}>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={{ width: '100%', height: '100%' }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        </MapView>
      ) : (
        <Text>Waiting for location...</Text>
      )}
    </View>
  );
}
