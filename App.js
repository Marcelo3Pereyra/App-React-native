import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './componentes/cita';
import Formulario from './componentes/formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No Come'},
    {id: '2', paciente: 'Redux', propietario: 'Itzel', sintomas: 'No Duerme'},
    {id: '3', paciente: 'Native', propietario: 'Josue', sintomas: 'No Canta'},
  ]);

  //Elimina citas

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        {' '}
        {citas.length > 0
          ? 'Administrador de Citas'
          : 'No hay citas, agrega una'}
      </Text>

      <Formulario />

      <Text style={styles.titulo}>Administra tus citas</Text>

      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita cita={item} eliminarPaciente={eliminarPaciente} />
        )}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
