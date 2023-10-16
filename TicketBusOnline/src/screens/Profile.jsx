import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Profile = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');

  const handleGuardarPerfil = () => {
    const perfil = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
      DNI: dni,
      'Fecha de Nacimiento': fechaNacimiento,
      Ciudad: ciudad,
    };
    alert(JSON.stringify(perfil, null, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { marginTop: 20 }]}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        onChangeText={(text) => setApellido(text)}
        value={apellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="DNI"
        onChangeText={(text) => setDni(text)}
        value={dni}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        onChangeText={(text) => setFechaNacimiento(text)}
        value={fechaNacimiento}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        onChangeText={(text) => setCiudad(text)}
        value={ciudad}
      />
      <Button title="Guardar Perfil" onPress={handleGuardarPerfil} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Profile;
