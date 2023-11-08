import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable, TextInput, Button } from 'react-native';
import { baseURL } from '../utils/api';
import axios from 'axios';

const FindTrips = ({ route }) => {
  const { origin, destination, date } = route.params;
  const [precioBusqueda, setPrecioBusqueda] = useState(''); 
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    axios.get(baseURL + "trip/filter", {
      params: {
        origin,
        destination,
        date
      }
    })
    .then(response => {
      setTripsData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [origin, destination, date]);

  return (
    <ScrollView style={styles.container}>
      {tripsData.map((trip, index) => (
        <View style={styles.tripContainer} key={index}>
          <Text>Origin: {trip.origin.name}</Text>
          <Text>Destination: {trip.destination.name}</Text>
          <Text>Available seats: {trip.bus.capacity}</Text>
          <Text>Duration: {trip.duration} hours</Text>
        </View>
      ))}
      <Pressable onPress={() => navigation.navigate('MainPage')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </Pressable>
    </ScrollView>
  );
};
    
    const windowWidth = Dimensions.get('window').width;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'lightgreen', 
        padding: 20,
      },
      header: {
        fontSize: 35,
        color: 'black',
        marginBottom: 10, 
        textAlign: 'center',
        padding: 13,
      },
      tripContainer: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
      },
      tripInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      tripLabel: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      tripValue: {
        fontSize: 16,
      },
      homeButton: {
        backgroundColor: 'darkgreen', 
        padding: 10,
        borderRadius: 8,
        marginTop: 3, 
        alignSelf: 'center', 
      },
      homeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 250,
      },
    });
  

export default FindTrips;