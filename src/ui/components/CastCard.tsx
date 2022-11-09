import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';
import { Cast } from "../../logic/interfaces/creditsInterface"
import { styleVars } from '../theme/commonStyles';

export interface Props {
    person: Cast
}

export const CastCard = ({person}:Props) => {

    return (
        <View style={styles.castItem}>
            
            <View style={{flexDirection: 'row'}}>

                {person.profile_path ? (
                    <Image
                        style={styles.castAvatar}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`
                        }}
                    />
                ):(
                    <Icons name='person-circle' size={52} color='rgba(128,128,128,.25)'/>
                )}

                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight: 'bold'}}>{person.name}</Text>
                    <Text style={{fontSize:12}}>{person.character}</Text>
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    castItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 100,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: 'grey',
        padding: 10,
        paddingRight: 20       
    },

    castAvatar: {
        overflow: 'hidden',
        width: 56,
        height: 56,
        borderRadius: 100,
        marginRight: 7
    }
})