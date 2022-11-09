import { useEffect, useState } from 'react';

import moviesDB from '../../logic/api/moviesDB';
import { MoviesDBResponse, Movie } from '../../logic/interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {
        
        const z = ~~(Math.random() * 5) + 1;
        const rsp = await Promise.all([
            moviesDB.get<MoviesDBResponse>('/now_playing?page='+z),
            moviesDB.get<MoviesDBResponse>('/popular?page='+z),
            moviesDB.get<MoviesDBResponse>('/top_rated?page='+z),
            moviesDB.get<MoviesDBResponse>('/upcoming?page='+z),
        ]);

        setMoviesState({
            nowPlaying: rsp[0].data.results, 
            popular   : rsp[1].data.results,
            topRated  : rsp[2].data.results,
            upcoming  : rsp[3].data.results
        });
        setIsLoading(false);
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}