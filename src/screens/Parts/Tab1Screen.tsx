import React, { useEffect } from 'react'
import { View, Text, useWindowDimensions, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TouchableIcon } from '../../components/TouchableIcon';
import { SwitchComponent } from '../../components/SwitchComponent';
import { AlertCustom } from '../../components/AlertCustom';
import { RefreshSlideDown } from '../../components/RefreshSlideDown';
import InputText from '../../components/InputText';

interface Props extends DrawerScreenProps<any, any>{};
export const Tab1Screen = ({navigation}:Props) => {

  const {top}=useSafeAreaInsets();

  const { width } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                (width < 768)?
                <TouchableOpacity style={styles.menuBotonToogle} onPress={ () => navigation.toggleDrawer() }>
                    <Icon name="menu-outline" size={30} color="black"  />
                </TouchableOpacity>
                :null
            )
        })
    }, [width])
  
  return (
    <View style={{...styles.globalMargin, marginTop:top}}>
        {/* <Text style={styles.title}>Tab 1 con TabNavigation</Text>
        <Text>
          <TouchableIcon iconName="add-circle-outline" />
          <TouchableIcon iconName="apps-outline" />
        </Text>
        <Text style={styles.title}>Switch</Text> */}
        {/* Switch */}
        {/* <View><SwitchComponent/></View> */}

        {/* alert */}
        {/* <View><AlertCustom/></View> */}
        <InputText/>

    </View>
  )
}
