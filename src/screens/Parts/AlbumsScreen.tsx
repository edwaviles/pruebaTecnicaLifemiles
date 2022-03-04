import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext/AuthContext';


export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext)
  return (
    <View>
      <Text>AlbumsScreen</Text>
      {
        authState.isLoggedIn &&   
        <TouchableOpacity>
          <Button title='Logout' onPress={logout}/>
        </TouchableOpacity>
      }
    </View>
  )
}
