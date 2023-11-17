import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import logo from '../assets/logo.png';

export default function Inicio({ navigation }) {
  const [text, setText] = useState('');

  return (
    <View style={estilos.container}>

      <Image source={logo} style={estilos.logo} />

      <Text style={estilos.texto}> Login </Text>

      <View style={estilos.inputContainer}>
        <Text style={estilos.textoInput}>Email</Text>
        <TextInput style={estilos.input} />
      </View>

      <View style={estilos.inputContainer}>
        <Text style={estilos.textoInput}>Senha</Text>
        <TextInput
        style={estilos.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
        secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Login')}>
        <Text style={estilos.textoBotao}>Sign In</Text>
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
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
  },
  texto: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  textoInput: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: "bold"
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#5cd2c6",
    padding: 10,
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