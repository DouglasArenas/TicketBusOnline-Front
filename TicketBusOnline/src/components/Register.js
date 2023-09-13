import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para verificar el inicio de sesión
    // Por ahora, simplemente mostraremos los datos ingresados en una alerta
    alert(`Iniciando sesión con Email: ${email} y Contraseña: ${password}`);
  };

  const handleCancel = () => {
    // Implementa la lógica de cancelación aquí, por ejemplo, redirige a otra pantalla
    alert("Operación cancelada");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="darkgreen" />
        <Button title="Cancelar" onPress={handleCancel} color="darkgreen" />
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
  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Login;
