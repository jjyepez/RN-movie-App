import { ScrollView, View, ActivityIndicator, useWindowDimensions } from 'react-native';
import { useMovies } from '../../logic/hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';

import Carousel from 'react-native-snap-carousel';

import { styles } from '../theme/commonStyles';
import { HorizontalSlider } from '../components/HorizontalSider';

export const HomeScreen = () => {

    const {
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading
    } = useMovies();

    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.standarView}>

            {isLoading ? (

                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={64} color='lightgrey'/>
                </View>

            ) : (
                <ScrollView>
                    
                    <View style={{
                        height: 440,
                        paddingTop: 10
                    }}>
                        <Carousel
                            data={nowPlaying}
                            sliderWidth={windowWidth}
                            renderItem={({item}:any) => <MoviePoster movie={item} />}
                            itemWidth={300}
                            vertical={false}
                        />
                        
                    </View>

                    <HorizontalSlider
                        title='Populares'
                        movies={popular} 
                    />

                    <HorizontalSlider
                        title='Mejor Calificadas'
                        movies={topRated} 
                    />

                    <HorizontalSlider
                        title='Próximos Estrenos'
                        movies={upcoming} 
                    />

                </ScrollView>
            )}
            
        </View>
    )
}
