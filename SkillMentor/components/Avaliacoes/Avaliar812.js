import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const pickerItems = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' }
];

export default function Avaliar04({ navigation }) {
  const [desempenhoValue, setDesempenhoValue] = useState("1");
  const [liderancaValue, setLiderancaValue] = useState("1");
  const [trabalhoEquipeValue, setTrabalhoEquipeValue] = useState("1");

  return (
    <View style={estilos.container}>
      <View style={estilos.textoContainer}>
        <Text style={[estilos.texto, { color: "#5cd2c6" }]}>Quadrimestre 8 - 12</Text>
        <Text style={estilos.texto}>Atividades</Text>
      </View>

      <TextInput style={estilos.input} multiline />

      <Text style={[estilos.texto, { fontSize: 16, marginTop: 10 }]}>
        Avalie com notas de 1 a 10
      </Text>
      <Text style={[estilos.texto, { fontSize: 16 }]}>Desempenho</Text>
      <Picker
        selectedValue={desempenhoValue}
        style={estilos.picker}
        onValueChange={(itemValue) => setDesempenhoValue(itemValue)}
      >
        {pickerItems.map(item => (
          <Picker.Item
          key={item.value}
          label={item.label}
          value={item.value}
          style={estilos.picker}
          />
        ))}
      </Picker>

      <Text style={[estilos.texto, { fontSize: 16 }]}>Liderança</Text>
      <Picker
        selectedValue={liderancaValue}
        style={estilos.picker}
        onValueChange={(itemValue) => setLiderancaValue(itemValue)}
      >
        {pickerItems.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>

      <Text style={[estilos.texto, { fontSize: 16 }]}>Trabalho em equipe</Text>
      <Picker
        selectedValue={trabalhoEquipeValue}
        style={estilos.picker}
        onValueChange={(itemValue) => setTrabalhoEquipeValue(itemValue)}
      >
        {pickerItems.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>

      <View style={estilos.botaoContainer}>
      <TouchableOpacity style={estilos.botao}
      onPress={() => navigation.navigate('Observacoes')}>
        <Text style={estilos.textoBotao}>Gerar Relatório de Desempenho</Text>
      </TouchableOpacity>
        <TouchableOpacity style={[estilos.botao, { marginTop: 15 }]}
          onPress={() => navigation.navigate('Inicio')}>
          <Text style={estilos.textoBotao}>Voltar para o início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textoContainer: {
    marginTop: 40,
    paddingVertical: 6,
    fontSize: 26,
    fontWeight: "bold",
    alignItems: 'center',
  },
  texto: {
    paddingVertical: 6,
    fontSize: 26,
    fontWeight: "bold",
  },
  botaoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    flex: 1,
    marginBottom: 16
  },
  input: {
    padding: 10,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#DFE3EE'
},
  botao: {
    margin: 5,
    backgroundColor: "#5cd2c6",
    padding: 6,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: 100,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
  }
});