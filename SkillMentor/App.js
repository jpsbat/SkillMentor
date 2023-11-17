import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './components/Inicio';
import Login from './components/Login';
import Avaliacao from './components/Avaliacao';
import Observacoes from './components/Observacoes';
import Avaliar04 from './components/Avaliacoes/Avaliar04';
import Avaliar48 from './components/Avaliacoes/Avaliar48';
import Avaliar812 from './components/Avaliacoes/Avaliar812';
import Avaliar1216 from './components/Avaliacoes/Avaliar1216';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name='Inicio'
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Avaliacao'
          component={Avaliacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Observacoes'
          component={Observacoes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Avaliar 0 - 4'
          component={Avaliar04}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Avaliar 4 - 8'
          component={Avaliar48}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Avaliar 8 - 12'
          component={Avaliar812}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Avaliar 12 - 16'
          component={Avaliar1216}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}