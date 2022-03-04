import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Parts/Tab1Screen';
import { StackNavigator,StackTab1Navigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = ()=>{
    return Platform.OS ==='ios'?
    <TabsIos/>:<TabAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabAndroid() {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor:'white'
        }}
        screenOptions={
            ({route})=>({
                tabBarIcon: ({color, focused}) =>{
                    let IconName:string;
                    switch (route.name){
                       case 'StackTab1Navigator':
                           IconName='bar-chart-outline'
                       break;
                       case 'TopTabNavigator':
                           IconName='barbell-outline'
                       break;
                       case 'StackNavigator':
                           IconName='basketball-outline'
                       break;
                       default:
                           IconName='cloud-offline-outline'
                       break
                    }
                    return <Icon name={IconName} size={25} color={color} />
                }
            })
        }
    >
      <BottomTabIos.Screen name="StackTab1Navigator" options={{title:'Tab 1'}} component={StackTab1Navigator} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{title:'Tab 2'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIos = createBottomTabNavigator();
const TabsIos = ()  => {
  return (
    <BottomTabIos.Navigator 
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
         tabBarOptions={{
             activeTintColor:"white",
             style:{
                 borderTopColor:colores.primary,
                 borderTopWidth:0,
                 elevation:0
             },
             labelStyle:{
                 fontSize:15
             },
         }}
         screenOptions={
             ({route})=>({
                 tabBarIcon: ({color, focused, size}) =>{
                    let IconName:string;
                    switch (route.name){
                       case 'Tab1Screen':
                           IconName='bar-chart-outline'
                       break;
                       case 'TopTabNavigator':
                           IconName='barbell-outline'
                       break;
                       case 'StackNavigator':
                           IconName='basketball-outline'
                       break;
                       default:
                           IconName='cloud-offline-outline'
                       break
                    }
                    return <Icon name={IconName} size={25} color={color} />
                 }
             })
         }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=><Text style={{color: props.color}}>H1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{title:'Tab 2'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}