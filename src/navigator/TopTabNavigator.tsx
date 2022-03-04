import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/Parts/ChatScreen';
import { ContactsScreen } from '../screens/Parts/ContactsScreen';
import { AlbumsScreen } from '../screens/Parts/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top:paddingTop}=useSafeAreaInsets();
  return (
    <Tab.Navigator style={{paddingTop}}
       sceneContainerStyle={{
           backgroundColor:'white',
       }}
       tabBarOptions={{
           pressColor:colores.primary,
           showIcon:true,
           indicatorStyle:{
               backgroundColor: colores.primary
           },
           style:{
               borderBottomColor:colores.primary,
               borderWidth:0,
               shadowColor:'transparent',
               elevation:0
            },
           
       }} 
       screenOptions={
            ({route})=>({
                tabBarIcon: ({color, focused}) =>{
                    let IconName:string;
                    switch (route.name){
                    case 'ChatScreen':
                        IconName='chatbubbles-outline'
                    break;
                    case 'ContactsScreen':
                        IconName='chatbubble-outline'
                    break;
                    case 'AlbumsScreen':
                        IconName='albums-outline'
                    break;
                    default:
                        IconName='TT'
                    break
                    }
                    return <Icon name={IconName} size={25} color={color} />
                }
            })
        }
    >
      <Tab.Screen name="ChatScreen" options={{title:'Chats'}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{title:'Contacto'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title:'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}