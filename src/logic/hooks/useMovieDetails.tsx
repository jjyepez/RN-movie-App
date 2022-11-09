import { useEffect, useState } from "react";
import moviesDB from "../api/moviesDB"
import { Cast, MovieFull } from "../interfaces/movieInterface";
import { CreditsResponse } from "../interfaces/creditsInterface";

export interface MovieDetails {
    isLoading : boolean,
    movieFull?: MovieFull,
    castList  : Cast[]
}

export const useMovieDetails = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        castList : []
    });

    const getMovieDetails = async () => {

        const [movieDetailsRsp, castRsp] = await Promise.all([
            moviesDB.get<MovieFull>(`/${movieId}`),
            moviesDB.get<CreditsResponse>(`/${movieId}/credits`)
        ])

        setState({
            isLoading: false,
            movieFull: movieDetailsRsp.data,
            castList : castRsp.data.cast
        });
    }

    useEffect(()=>{
        getMovieDetails();
    }, [])

    return {
        ...state
    }
}
