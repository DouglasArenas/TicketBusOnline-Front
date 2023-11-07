import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/textInput/TextInput';
import Button from '../components/button/Button';
import axios from 'axios';
import { baseURL } from '../utils/api';
import { Picker } from '@react-native-picker/picker';
import Autocomplete from 'react-native-autocomplete-input';

const MainPage = () => {
  const nav = useNavigation();
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

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


  const validateAndNavigate = () => {
    if (query === '' || destination === '' || departureDate === '') {
      alert('Please fill all the fields');
    }else {
      nav.navigate('FindTrips', {origin: query, destination: destination, departureDate: departureDate});
    }
  }

  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <Button title="Home" onPress={ () => nav.navigate('MainPage')}/>
        <Button title="Trips" onPress={ () => nav.navigate('MyTrips')}/>
        <Button title="Profile" onPress={ () => nav.navigate('Profile')}/>
        <Button title="Notif." onPress={ () => nav.navigate('MainPage')}/>
      </View>

        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <Autocomplete
              style={{zIndex: 1}}
              autoCapitalize="none"
              autoCorrect={false}
              data={filteredCities.length === 1 && comp(query, filteredCities[0].name) ? [] : filteredCities}
              defaultValue={query}
              onChangeText={text => setQuery(text)}
              placeholder="Origin"
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setQuery(item.name)}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Picker
              style={{zIndex: 0}}
              selectedValue={destination}
              onValueChange={(itemValue) => setDestination(itemValue)}
            >
              {cities.map((city) => (
                <Picker.Item key={city.id} label={city.name} value={city.name} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputWrapper}>
            <CustomTextInput
              value={departureDate}
              setValue={setDepartureDate}
              placeholder="Departure Date"
            />
          </View>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Search" onPress={ () => nav.navigate('FindTrips', {origin: origin, destination: destination, departureDate: departureDate})}/>
        </View>
      </View>
  </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
    marginTop: 20, 
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
    padding: 10,
    justifyContent: 'center',
  },
  searchButtonContainer: {
    marginTop: 20,
  },
  inputWrapper: {
    marginBottom: 60,
  },
});

export default MainPage;

