import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const formulario = () => {
  const [fecha, guardarFecha] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit',hour:'2-digit',minute:'2-digit'};
    guardarFecha(date.toLocaleDateString('es-Es', opciones));
    hideDatePicker();
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Telefono Contacto</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
            keyboardType={'numeric'}
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
            multiline
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default formulario;
