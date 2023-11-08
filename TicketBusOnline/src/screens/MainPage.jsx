import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Modal, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/button/Button';
import axios from 'axios';
import { baseURL } from '../utils/api';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';

const MainPage = () => {
  const nav = useNavigation();
  const [cities, setCities] = useState([]);
  const [origin, setOrigin] = useState('Origin');
  const [destination, setDestination] = useState('Destination');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${baseURL}city/all`);
        setCities(response.data);
      }
      catch (e) {
        console.log("Error fetching cities",e);
      }
    }
    fetchCities();
  }, []);

  const handleSelectItem = (item, index) => {
    if (index === 0) {
      setOrigin(item.name);
    } else {
      setDestination(item.name);
    }
  };

  const onChange = (event, selectedDate) => { 
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <Button title="Home" children={"Home"} onPress={ () => nav.navigate('MainPage')}/>
        <Button title="Trips" children={"Trips"} onPress={ () => nav.navigate('MyTrips')}/>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text>Origin</Text>
            </View>
            <Picker
              style={styles.picker}
              selectedValue={origin}
              onValueChange={(itemValue, itemIndex) => setOrigin(itemValue)}
            >
              {cities.map((city, index) => (
                <Picker.Item key={index} label={city.name} value={city.name} />
              ))}
            </Picker>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text>Destination</Text>
            </View>
              <Picker
                selectedValue={destination}
                onValueChange={(itemValue, itemIndex) => setDestination(itemValue)}
                style={styles.picker}
              >
                {cities.map((city, index) => (
                  <Picker.Item key={index} label={city.name} value={city.name} />
                ))}
              </Picker>
          </View>
          <View style={styles.input}>
      <View style={styles.label}>
        <Text>Date</Text>
      </View>

      <input 
    type="date" 
    style={styles.picker} 
    value={date} 
    min="2023-01-01" 
    max="2024-12-31" 
    onChange={(event) => {setDate(event.target.value)}}
/>

      </View>
          </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Search"
              children={"Search"}
              onPress={ () => nav.navigate('FindTrips', {origin: origin, destination: destination, date: date})}/>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    marginBottom: 10,
    width: 200,
  },
  inputsContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  searchButtonContainer: {
    marginTop: 20,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  picker: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default MainPage;

