import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./path/to/your/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashPage;
