import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { StyledTitleBar } from '../components/StyledTitleBar';
import { styles } from '../theme/commonStyles';

export const HomeScreen = () => {

    const navigation:any = useNavigation();

    return (
        <View style={styles.standarView}>
            <StyledTitleBar title='HOME' />
            
            <Button onPress={() => navigation.navigate('Details')} title='Detalles'/>
        </View>
    )
}
