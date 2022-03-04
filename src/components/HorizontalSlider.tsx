import React from 'react'
import { Result } from '../interfaces/exampleInterface'
import { View, Text, FlatList } from 'react-native';
import { CardSlide } from './CardSlide';

interface Props{
    title?:string,
    movies:Result[]
}

export const HorizontalSlider = ({title, movies}:Props) => {
  return (
    <View style={{height:(title)?260:225}}>
        {title && 
            <Text style={{fontSize:30, fontWeight:'bold', marginLeft:10}}>{title}</Text>
        }
        <FlatList
            data={movies}
            renderItem={({item}:any)=> (
                <CardSlide movie={item} height={200} width={140}/>
            )}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
