import React from 'react'
import { useExampleHookApi } from '../../hooks/useExampleHookApi';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, FlatList, View, Text,ScrollView } from 'react-native';
import { CardSlide } from '../../components/CardSlide';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../../components/HorizontalSlider';
const {width}=Dimensions.get("window");

export const HomeScreen = () => {
    
    const {nowPlaying, popular, topRated,upcoming, isLoading} = useExampleHookApi();
    const {top}= useSafeAreaInsets();


    if (isLoading) {
        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }else{
        
        return (
            <ScrollView>
                <View style={{marginTop:top+20}}>
                    <View style={{height:450}}>
                        <Carousel
                                data={nowPlaying}
                                renderItem={({item}:any)=> <CardSlide movie={item}/>}
                                sliderWidth={width}
                                itemWidth={300}
                                inactiveSlideOpacity={0.8}
                            />
                    </View>

                    {/* Peliculas populares */}
                    <HorizontalSlider title='Populares' movies={popular}/>
                    <HorizontalSlider title='Top' movies={topRated}/>
                    <HorizontalSlider title='Proximamente' movies={upcoming}/>

                    
                </View>
            </ScrollView>
        )
    }
}
