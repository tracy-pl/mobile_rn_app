import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { Container } from "~components";
import { ICoord } from "~types/models";
import { getLocation, isLocationPermissionGranted } from "~services/location";
import getErrorMessage from "~utils/common/getErrorMessage";

const TrackingScreen = () => {
  const [position, setPosition] = useState<ICoord>(null);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!(await isLocationPermissionGranted))
          throw new Error("Location permission is required");

        const { coords } = await getLocation();
        setPosition(coords);
      } catch (e) {
        setError(getErrorMessage(e));
      }
    })();
  }, []);

  return (
    <Container>
      {error && <Text>{error}</Text>}
      {position ? (
        <>
          <MapView
            initialRegion={{
              latitude: position?.latitude,
              longitude: position?.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            style={{
              flex: 1,
              height: 300,
            }}
          >
            {/* we can use or marker or circle (or maybe both) */}
            <Marker
              coordinate={{
                latitude: position?.latitude,
                longitude: position?.longitude,
              }}
              pinColor="black"
            />
            <Circle
              center={{
                latitude: position?.latitude,
                longitude: position?.longitude,
              }}
              radius={10}
            />
          </MapView>
          <Text>Longitude: {position?.longitude}</Text>
          <Text>Latitude: {position?.latitude}</Text>
        </>
      ) : (
        <Text>Something went wrong</Text>
      )}
    </Container>
  );
};

export default TrackingScreen;
