import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/apiExample/HomeScreen';
import { detailScreen } from '../screens/apiExample/DetailScreen';

const Stack = createStackNavigator();

export const Navegacion = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"white"
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="detailScreen" component={detailScreen} />
        </Stack.Navigator>
    );
}
