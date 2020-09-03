

import React from 'react';
import { Text , StyleSheet , View } from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Adminstrador de Citas</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default App;
