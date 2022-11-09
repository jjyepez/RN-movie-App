import { View, Text, FlatList } from 'react-native';
import { Movie } from '../../logic/interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({title, movies}: Props) => {
    return (
        <View
            style={{
                height: 230
            }}
        >
            { title && <Text style={{
                fontSize: 20,
                marginLeft: 12, 
                marginBottom: 5,
                fontFamily: 'ArimaMadurai-Black',
                color: '#222'
            }}>{title}</Text> }

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={movies}
                renderItem={({item}:any) => (
                    <MoviePoster
                        style={{
                            borderRadius: 12,
                            marginHorizontal: 6, 
                            width: 120,
                            height: 180
                        }}
                        movie={item}
                    />
                )}
                keyExtractor={(item)=>String(item.id)}
                horizontal={true} 
            />
        </View>
    )
}