import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Avaliacao({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.textoContainer}>
        <Text style={[estilos.texto, { color: "#5cd2c6" }]}>Bem-Vindo!</Text>
        <Text style={[estilos.texto, { marginBottom: 30 }]}>Avaliação Quadrimestral</Text>
      </View>

      <View style={estilos.avaliarContainer}>
        <TouchableOpacity style={estilos.avaliar}
        onPress={() => navigation.navigate('Avaliar 0 - 4')}>
          <View style={estilos.textoBotaoContainer}>
            <Text style={estilos.textoBotao}>Avaliar</Text>
            <Text style={estilos.textoBotao}>0 - 4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.avaliar}
        onPress={() => navigation.navigate('Avaliar 4 - 8')}>
          <View style={estilos.textoBotaoContainer}>
            <Text style={estilos.textoBotao}>Avaliar</Text>
            <Text style={estilos.textoBotao}>4 - 8</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={estilos.avaliarContainer}>
        <TouchableOpacity style={estilos.avaliar}
        onPress={() => navigation.navigate('Avaliar 8 - 12')}>
          <View style={estilos.textoBotaoContainer}>
            <Text style={estilos.textoBotao}>Avaliar</Text>
            <Text style={estilos.textoBotao}>8 - 12</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={estilos.avaliar}
        onPress={() => navigation.navigate('Avaliar 12 - 16')}>
          <View style={estilos.textoBotaoContainer}>
            <Text style={estilos.textoBotao}>Avaliar</Text>
            <Text style={estilos.textoBotao}>12 - 16</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={estilos.botaoContainer}>
      <TouchableOpacity style={estilos.botaoHome}
        onPress={() => navigation.navigate('Inicio')}>
        <Text style={estilos.textoBotaoHome}>Voltar para o início</Text>
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
  avaliarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 6,
  },
  botaoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    flex: 1,
    marginBottom: 16
  },
  avaliar: {
    marginHorizontal: 10,
    backgroundColor: "#5cd2c6",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
    marginTop: 10
  },
  textoBotaoContainer: {
    alignItems: 'center',
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoHome: {
    margin: 5,
    backgroundColor: "#5cd2c6",
    padding: 6,
    borderRadius: 6,
  },
  textoBotaoHome: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
