import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  Image,
  ScrollView,
  Keyboard,
  Text,
} from 'react-native';
import Cita from './componentes/cita';
import Formulario from './componentes/formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false); //Mostrar el formulario para turno. Empieza en falso
  const [mostrarTurnos, setMostrarTurnos] = useState(false); //Muestra los turnos dado. Empieza en false
  const [styleBtn, setStyleBtn] = useState(true);

  const [citas, setCitas] = useState([]);

  //Elimina los pacientes del state
  const eliminarCliente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };
  //Ocultar teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  const colorBtn = styleBtn ? styles.btnMostrarForm : styles.btnCancelarForm

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        cerrarTeclado();
      }}>
      <View style={styles.contenedor}>
        {mostrarForm || mostrarTurnos ? null : (
          //Si el formulario o turnos estan cerrados, muestra la imagen, sino , la esconde
          <Image
            style={styles.img}
            source={require('./assets/image/jireh.jpeg')}
          />
        )}

        {/* Boton para mostrar formulario*/}
        {mostrarTurnos ? null : (
          <View>
            <TouchableHighlight
              onPress={() => (setMostrarForm(!mostrarForm),setStyleBtn(!styleBtn))}
              style={colorBtn}>
              <Text style={styles.textoMostrarForm}>
                {mostrarForm ? 'Cancelar nuevo turno' : 'Crear nuevo turno'}
              </Text>
            </TouchableHighlight>
          </View>
        )}

        {/*Boton para mostrar turnos */}
        {mostrarForm ? null : (
          <View>
            <TouchableHighlight
              onPress={() =>  (setMostrarTurnos(!mostrarTurnos),setStyleBtn(!styleBtn))}
              style={colorBtn}>
              <Text style={styles.textoMostrarForm}>
                {mostrarTurnos ? 'Cerrar turnos' : 'Mostrar Turnos'}
              </Text>
            </TouchableHighlight>
          </View>
        )}

        {/*Vistas del formulario */}
        <View style={styles.contenido}>
          {mostrarForm ? (
            <ScrollView syle={styles.margenes}>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                setMostrarForm={setMostrarForm}
                setStyleBtn={setStyleBtn}
              />
            </ScrollView>
          ) : mostrarTurnos ? (
            <>
              <FlatList
                style={(styles.listado, styles.margenes)}
                data={citas}
                renderItem={({item}) => (
                  <Cita item={item} eliminarCliente={eliminarCliente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  contenedor: {
    backgroundColor: '#00C1CA',
    flex: 1,
  },
  margenes: {
    marginBottom: 20,
    marginTop: Platform.OS === 'android' ? 20 : 40,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#0BA09C',
    marginTop: 10,
  },
  btnCancelarForm:{
    padding: 10,
    backgroundColor: 'red',
    marginTop: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 220,
    marginVertical: 5,
  },
});

export default App;