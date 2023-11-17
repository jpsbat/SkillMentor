import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Observacoes({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto}>Adicionar observações</Text>
      </View>

      <TextInput style={estilos.input} multiline />

      <TouchableOpacity style={[estilos.botao, { marginVertical: 30 }]}>
        <Text style={estilos.textoBotao}>Gerar Relatório de Desempenho</Text>
      </TouchableOpacity>

      <View style={estilos.botaoContainer}>
      <TouchableOpacity style={estilos.botao}
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
});
