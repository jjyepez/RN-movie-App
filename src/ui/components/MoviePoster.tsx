import { TouchableOpacity, View, Image } from 'react-native';
import { Movie } from '../../logic/interfaces/movieInterface';
import { styles } from './styles/MoviePoster.style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    movie: Movie,
    style?: object | undefined
}

export const MoviePoster = ({movie, style}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    const navigation:any = useNavigation();

    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('DetailsScreen', movie)}
            activeOpacity={0.8}
            style={{
                ...styles.moviePosterContainer,
                ...style
            }}
        >
            <Image
                style={{
                    ...styles.movieImage,
                    ...style
                }}
                source={{uri}}
            />
            
        </TouchableOpacity>
    )
}
