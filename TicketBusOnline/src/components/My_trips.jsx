import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const MyTrips = ({ navigation }) => {

  const tripsData = [
    {
      origen: '',
      destino: '',
      asiento: '',
      duracion: '',
      fechaLlegada: '',
    },
    {
      origen: '',
      destino: '',
      asiento: '',
      duracion: '',
      fechaLlegada: '',
    },
    {
      origen: '',
      destino: '',
      asiento: '',
      duracion: '',
      fechaLlegada: '',
    },


    
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mis Viajes</Text>
      {tripsData.map((trip, index) => (
        <View key={index} style={styles.tripContainer}>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>Origen:</Text>
            <Text style={styles.tripValue}>{trip.origen}</Text>
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>Destino:</Text>
            <Text style={styles.tripValue}>{trip.destino}</Text>
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>NºAsiento:</Text>
            <Text style={styles.tripValue}>{trip.asiento}</Text>
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>Duración:</Text>
            <Text style={styles.tripValue}>{trip.duracion}</Text>
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>Fecha Origen:</Text>
            <Text style={styles.tripValue}>{trip.fechaLlegada}</Text>
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripLabel}>Fecha Llegada:</Text>
            <Text style={styles.tripValue}>{trip.fechaLlegada}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
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
