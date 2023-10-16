import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <Button title="Home" onPress={ () => nav.navigate('MainPage')}/>
        <Button title="Trips" onPress={ () => nav.navigate('MyTrips')}/>
        <Button title="Profile" onPress={ () => nav.navigate('Profile')}/>
        <Button title="Notif." onPress={ () => nav.navigate('MainPage')}/>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Origen" color="black" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Destino" color="black" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Fecha de Partida" color="black" />
        </View>
      </View>

      <View style={styles.searchButtonContainer}>
        <Button title="Buscar" color="darkgreen" />
      </View>
    </View>
  );
};

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonWrapper: {
    marginBottom: 10,
    width: 200,
  },
  searchButtonContainer: {
    marginTop: 20,
  },
});

export default MainPage;

