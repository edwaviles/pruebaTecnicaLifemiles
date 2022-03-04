import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { styles } from '../../theme/appTheme';


export const ContactsScreen = () => {
  const {authState, signIn} = useContext(AuthContext)
  authState.isLoggedIn
  return (
    <View style={styles.globalMargin}>
        <Text>ContactsScreen</Text>

        {!authState.isLoggedIn && 
        <TouchableOpacity onPress={signIn}>
            <Text>iniciar</Text>
        </TouchableOpacity>}
    </View>
    
  )
}
