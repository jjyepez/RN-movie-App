import { StackScreenProps } from '@react-navigation/stack';

import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { RootStackParams } from '../navigation/Navigation';
import { styles } from './styles/DetailsScreen.style';

import Icons from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../../logic/hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { styleVars } from '../theme/commonStyles';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({navigation, route}:Props) => {

    const {height:screenHeight} = useWindowDimensions();
    const movie = route.params;

    const { isLoading, movieFull, castList } = useMovieDetails( movie.id );

    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{flex:1}}>
                    
                    <Image style={{
                        height: screenHeight * .7
                    }} source={{uri}} />

                </View>

                <View style={{
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    marginTop: -25,
                    backgroundColor: '#fff'
                }}>

                    <View style={{marginHorizontal: 20, marginTop: 20}}>
                        <Text>{movie.original_title}</Text>
                        <Text style={{
                            fontFamily: styleVars.fontName,
                            color     : '#222',
                            fontSize  : 24,
                            lineHeight: 32,
                            marginVertical: 10
                        }}>{movie.title}</Text>
                    </View>

                    { isLoading 
                        ? <ActivityIndicator style={{marginVertical: 20}} size={32}/>
                        : <MovieDetails castList={castList} movieDetails={movieFull!} />
                    }

                </View>

            </ScrollView>

            <TouchableOpacity
                activeOpacity={.5}
                style={stylesLocal.backButton}
                onPress={()=>navigation.pop()}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    
                    <Icons name='arrow-back' size={28} color='#fff'/>

                </View>
            </TouchableOpacity>
        </>
    )
}

const stylesLocal = StyleSheet.create({
    backButton: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 12,
        top: 16,
        backgroundColor: '#99999966',
        borderRadius: 100,
    }
})