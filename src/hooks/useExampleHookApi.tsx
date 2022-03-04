import {useEffect, useState} from 'react';
import ejemploDb from '../api/ejemploAPI';
import { Example, Result } from '../interfaces/exampleInterface';

interface MoviesStates{
    nowPlaying:Result[];
    popular:Result[];
    topRated:Result[];
    upcoming:Result[];
}

export  const useExampleHookApi = () => {
    const [isLoading, setisLoading] = useState<boolean>(true)
    const [moviesState, setMoviesState] = useState<MoviesStates>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    })

    const getMovies = async () =>{
        const nowPlayinpromise = ejemploDb.get<Example>("/now_playing");
        const popularPromise = ejemploDb.get<Example>("/popular");
        const topRatedPromise = ejemploDb.get<Example>("/top_rated");
        const upcomingPpromise = ejemploDb.get<Example>("/upcoming");

        const response = await Promise.all([
            nowPlayinpromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPpromise
        ]);

        setMoviesState({
            nowPlaying:response[0].data.results,
            popular:response[1].data.results,
            topRated:response[2].data.results,
            upcoming:response[3].data.results,
        })
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
      }, [])

    return {
        ...moviesState,
        isLoading,
    }
}