import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Parts/Pagina1Screen';
import { Pagina2Screen } from '../screens/Parts/Pagina2Screen';
import { Pagina3Screen } from '../screens/Parts/Pagina3Screen';
import { PersonaScreen } from '../screens/Parts/PersonaScreen';
import { Tab1Screen } from '../screens/Parts/Tab1Screen';

export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { id: number, nombre: string },
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title:"Página 1" }} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title:"Página 2" }} component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" options={{ title:"Página 3" }} component={ Pagina3Screen } />
      <Stack.Screen name="PersonaScreen" component={ PersonaScreen } />
    </Stack.Navigator>
  );
}

type ParamsTab1 = {
  Tab1Screen: undefined,
}
const StackTab1 = createStackNavigator<ParamsTab1>();
export const StackTab1Navigator = () =>{
  return (
    <StackTab1.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <StackTab1.Screen name="Tab1Screen" options={{ title:"Tab 1 con stack" }} component={ Tab1Screen } />
    </StackTab1.Navigator>
  );
}