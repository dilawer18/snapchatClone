import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
export default function App() {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    return (

        <View style={styles.container}>

            {/*Render our MapView*/}
            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={(region) => setRegion(region)}
            />
            <Text style={styles.text}>Current latitude: {region.latitude}</Text>
            <Text style={styles.text}>Current longitude: {region.longitude}</Text>
        </View>
    );
}
//create our styling code:
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    // text: {
    //     justifyContent: 'center',
    //     alignSelf: "center",
    //     color: 'red'
    // }
});