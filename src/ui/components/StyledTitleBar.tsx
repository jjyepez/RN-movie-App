import { View, Text } from 'react-native';
import { styles } from './styles/StyledTitleBar.style';

export const StyledTitleBar = ({title}:any) => {
    return (
        <View style={styles.titleContainer}>
            <Text>{title}</Text>
        </View>
    )
}