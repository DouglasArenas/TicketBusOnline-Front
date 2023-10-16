
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleIngresar = () => {

  };

  const handleCancelar = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Iniciar Sesión</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsuario(text)}
        value={usuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => setContrasena(text)}
        value={contrasena}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'darkgreen' }]}
          onPress={handleIngresar}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacing} />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'darkgreen' }]}
          onPress={handleCancelar}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 20,
    justifyContent: 'center', 
  },
  headerContainer: {
    alignItems: 'center', 
    marginBottom: 30,
  },
  header: {
    fontSize: 38,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center', 
  },
  button: {
    backgroundColor: 'darkgreen',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonSpacing: {
    height: 20, 
  },
});

export default Login;
