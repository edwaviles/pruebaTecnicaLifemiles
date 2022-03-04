import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext/AuthContext';
import { Navegacion } from './src/navigator/Navegacion';


const App = () => {
  return (
    <NavigationContainer>
      {/* Peliculas */}
      {/* <Navegacion/> */}
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}


const AppState = ({children}:any) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

export default App;
