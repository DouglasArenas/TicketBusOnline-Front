import React, {   useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable, FlatList, CardContent, CardAction, CardButton, Card } from 'react-native';
import { Instance } from '../utils/api';
import axios from 'axios';
import { baseURL } from '../utils/api';


const MyTrips = ({ navigation }) => {

  const [tripsData, setTripsData] = useState(['']);

  useEffect(() => {
    console.log("ENTRANDO A USE EFFECT con url: ", baseURL)
    axios.get(baseURL + 'trip/all')
    // Instance.get('trip/all')
    .then((response) => {
      setTripsData(response.data);
      console.log('Getting data from API', response.data);
      console.log("ESTADO: ", response.status)
    })
    .catch((error) => {
      console.log('Error getting data from API',error);
      console.log("Error details", error.message, error.response);
    });
  }, []);

  const renderItem = ({ item }) => {
    console.log("ITEM: ", item);
      return ( 
        <View key={item.trip_id}>
          <Text>{item.name}</Text>
        </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={tripsData}
        keyExtractor={item => item.trip_id}
        renderItem={({ item }) => (
          <View style={styles.tripContainer}>
            {item.bus && <Text>Capacity: {item.bus.capacity}</Text>}
            {item.bus && item.bus.company && <Text>Address: {item.bus.company.address}</Text>}
            {item.bus && item.bus.company && <Text>Phone: {item.bus.company.phone}</Text>}
            {item.destination && <Text>Destination: {item.destination.name}</Text>}
            {item.origin && <Text>Origin: {item.origin.name}</Text>}
            {item.departureDateTime && <Text>Departure: {item.departureDateTime}</Text>}
            {item.bus && item.bus.company && <Text>Company: {item.bus.company.name}</Text>}
          </View>
        )}
      />
      <Pressable onPress={() => navigation.navigate('MainPage')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </Pressable>
    </ScrollView>
  )};

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
    marginBottom: 17, 
    textAlign: 'center',
    padding: 20,
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
    marginTop: 20, 
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

export default MyTrips;
