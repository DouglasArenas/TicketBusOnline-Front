import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <Button title="Home" />
        <Button title="Trips" />
        <Button title="Profile" />
        <Button title="Notif." />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Destino" color="white" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Fecha de Partida" color="white" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Cantidad de Pasajeros" color="white" />
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
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 10,
  },
  searchButtonContainer: {
    marginTop: 20,
  },
});

export default MainPage;
