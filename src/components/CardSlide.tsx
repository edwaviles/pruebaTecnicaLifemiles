import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Result } from '../interfaces/exampleInterface';

interface Props {
    movie: Result,
    height?:number,
    width?:number,
}
export const CardSlide = ({movie, height=420, width=300}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={{width, height, marginHorizontal:8}}>
        <View style={styles.imageContainer}>
            <Image 
                source={{uri}}    
                style = {styles.image}
            />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 9,
    }
})