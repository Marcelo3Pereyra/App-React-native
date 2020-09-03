import React from 'react';
import { Text, StyleSheet, View } from 'react-native';



const cita = ({ cita }) => {
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <Text style={styles.texto}>{cita.sintomas}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cita:{
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label:{
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    }
})


export default cita;

