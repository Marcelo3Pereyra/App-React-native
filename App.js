import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight, 
  Platform
} from 'react-native';
import Cita from './componentes/cita';
import Formulario from './componentes/formulario';

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);

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

  //muestra u oculta el formulario

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        {' '}
        {citas.length > 0
          ? 'Administrador de Citas'
          : 'No hay citas, agrega una'}
      </Text>

      <View>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>Crear nueva cita &times; </Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenedor}>
        {mostrarForm ? (
          <>
          <Text style={styles.titulo}>Crear nueva cita</Text>
          <Formulario 
            citas={citas}
            setCitas={setCitas}
            guardarMostrarForm={guardarMostrarForm}
          />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>Administra tus citas</Text>
            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({item}) => (
                <Cita cita={item} eliminarPaciente={eliminarPaciente} />
              )}
              keyExtractor={(cita) => cita.id}
            />
          </>
        )}
      </View>
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
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  contenida: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#AA078a',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
