

import React, {useState} from 'react';
import { Text , StyleSheet , View , FlatList} from 'react-native';
import Cita from './componentes/cita';

const App = () => {

  const [citas, serCitas] = useState([
    { id: "1", paciente:"Hook", propietario: "Juan", sintomas: "No Come"},
    { id: "1", paciente:"Redux", propietario: "Itzel", sintomas: "No Duerme"},
    { id: "1", paciente:"Native", propietario: "Josue", sintomas: "No Canta"}
  ]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Adminstrador de Citas</Text>

       <FlatList
        data={citas}
        renderItem = { ({item}) => <Cita cita={item}/>}
        keyExtractor = { cita => cita.id}
      />
      
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
