import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import { Cast, MovieFull } from '../../logic/interfaces/movieInterface';
import { styleVars } from '../theme/commonStyles';
import { CastCard } from './CastCard';

export interface Props {
    movieDetails: MovieFull,
    castList    : Cast[]
}

export const MovieDetails = ({castList, movieDetails}: Props) => {

    return (
        <View>
            <View style={{marginHorizontal: 20}}>
                
                { movieDetails.budget ? (<View style={styles.textBlock}>
                    <Text style={styles.subTitle}>Presupuesto</Text>
                    <Text style={{marginTop:7, flex: 1, textAlign:'right'}}>US$ {String(new Intl.NumberFormat('es-CO').format(movieDetails.budget))}</Text>
                </View>):(<></>)}

                { movieDetails.revenue ? (<View style={styles.textBlock}>
                    <Text style={styles.subTitle}>Ganancias</Text>
                    <Text style={{marginTop:7, flex: 1, textAlign:'right'}}>US$ {String(new Intl.NumberFormat('es-CO').format(movieDetails.revenue))}</Text>
                </View>):(<></>)}

                { movieDetails.release_date ? (<View style={styles.textBlock}>
                    <Text style={styles.subTitle}>Fecha de estreno</Text>
                    <Text style={{marginTop:7, flex: 1, textAlign:'right'}}>{movieDetails.release_date}</Text>
                </View>):(<></>)}

                {movieDetails.overview ? (<>
                    <Text style={{
                        ...styles.subTitle,
                        ...(()=>movieDetails.budget || movieDetails.revenue || movieDetails.release_date ? {paddingTop: 16, paddingBottom: 5} : {})()
                    }}>Sinopsis</Text>
                    <Text style={styles.sinopsis}>{movieDetails.overview}</Text>
                </>):(<></>)}

                <Text style={{
                        ...styles.subTitle,
                        ...(()=>movieDetails.overview || movieDetails.budget || movieDetails.revenue || movieDetails.release_date ? {paddingTop: 16} : {})()
                    }}>Reparto</Text>
            </View>
            
            <FlatList 
                style={{marginBottom: 20}}
                data={castList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item,_)=>String(item.id)}
                renderItem={(person)=><CastCard person={person.item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        fontFamily: styleVars.fontName,
        color: '#222',
        fontSize: 16
    },
    sinopsis: {
        fontSize: 12,
        textAlign: 'justify'
    },
    textBlock: {
        flexDirection:'row',
        alignItems:'center'
    }
})