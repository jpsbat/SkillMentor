import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.texto}>Avaliar aprendiz</Text>
      <View style={estilos.inputContainer}>
        <Text style={estilos.textoInput}>CPF</Text>
        <TextInput style={estilos.input} />
      </View>
      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Avaliacao')}>
        <Text style={estilos.textoBotao}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Inicio')}>
        <Text style={estilos.textoBotao}>Voltar para o início</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    padding: 3,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#DFE3EE'
  },
  textoInput: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: "bold"
  },
  texto: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
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
  }
});