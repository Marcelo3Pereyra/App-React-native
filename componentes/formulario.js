import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';
import DropDownPicker from 'react-native-dropdown-picker';


const Formulario = ({citas, setCitas, setMostrarForm,setStyleBtn}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [cliente, setCliente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tratamiento, setTratamiento] = useState('Depilación');
  const [fecha, setFecha] = useState(''); //Usado para guardar la fecha y hora
  // Control del CheckBox

  //Mostrar u ocultar DatePicker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  // Confirmar la fecha
  const handleConfirmDate = (date) => {
    setFecha(
      moment(date).format('DD-MM-YYYY') + '\n' + moment(date).format('hh:mm A'),
    );
    hideDatePicker();
  };
  //Crear nueva Cita
  const crearNuevaCita = () => {
    //Validar que los campos no esten vacios
    if (
      cliente.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === ''
    ) {
      // Algo esta vacio
      mostrarAlerta();
      return;
    }
    //Si no estan vacios, crear nueva cita
    const cita = {cliente, telefono, tratamiento, fecha};

    cita.id = shortid.generate();
    //Agregar al state
    const citaNueva = [...citas, cita];
    setCitas(citaNueva);

    setStyleBtn(true);

    //Ocultar el formulario
    setMostrarForm(false);
  };
  //Muestra la alerta si falla la validacion de campos
  const mostrarAlerta = () => {
    Alert.alert(
      'Error', //Titulo
      'Todos los campos son obligatorios', //Mensaje
      [
        {
          text: 'OK', //Arreglo de botones
        },
      ],
    );
  };

  const item = [
    {
      label: 'Depilación',
      value: 'Depilación',
    },
    {
      label: 'Esmaltado',
      value: 'Esmaltado',
    },
    {
      label: 'Velaslim',
      value: 'Velaslim',
    },
    {
      label: 'Body Up',
      value: 'Body Up',
    },
    {
      label: 'Limpieza Facial',
      value: 'Limpieza Facial',
    },
    {
      label: 'Perfilado Cejas',
      value: 'Perfilado Cejas',
    },
    {
      label: 'Perfilado Pestañas',
      value: 'Perfilado Pestañas',
    },
  ];

  return (
    <>
      <ScrollView style={styles.formulario}>
        
        {/*Nombre y Apellido*/}
        <View>
          <Text style={styles.label}>Nombre y Apellido</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setCliente(texto)}
          />
        </View>

        {/*Telefono Contacto*/}
        <View>
          <Text style={styles.label}>Telefono Contacto</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setTelefono(texto)}
            keyboardType={'numeric'}
          />
        </View>

        {/*DropDownPicker*/}
        <View
          style={{
            ...(Platform.OS !== 'android' && {
              zIndex: 10,
            }),
          }}>
          <Text style={styles.label}>Tratamientos</Text>
          <DropDownPicker
            items={item}
            defaultValue={'Depilación'}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={({value}) => setTratamiento(value)}
            showArrow={false}
          />
        </View>

        {/*Fecha y Hora*/}
        <View style={{zIndex: 10}}>
          <Text style={styles.label}>Fecha y Hora:</Text>
          <Button title="Seleccionar Fecha y Hora" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime" // datetime es un modo donde elegis la fecha, y luego la hora, todo junto
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            locale="es_ES"
          />
          <Text>{fecha}</Text>
        </View>

        {/*Boton para guardar*/}
        <View style={styles.textoSubmit}>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Guardar Turno</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#2D90DA',
    marginTop: 10,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
