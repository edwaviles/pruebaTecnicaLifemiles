import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';



// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};
export const Pagina1Screen = ({ navigation }: Props ) => {

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
        <View style={ styles.globalMargin }>
            <Text style={styles.title }>StaK Navigation</Text>

            <Button 
                title="Ir página 2"
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text style={{ 
                marginVertical: 20,
                fontSize: 20,
             }}> Navegar con argumentos
            </Text>


            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Icon name="body-outline" size={30} color={styles.botonGrandeTexto.color} />
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    }) }
                >
                    <Icon name="body-outline" size={30} color={styles.botonGrandeTexto.color} />
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>

            </View>




        </View>
    )
}
