import { View, Text } from 'react-native';
import { StyledTitleBar } from '../components/StyledTitleBar';

export const DetailsScreen = () => {
    return (
        <View>
            <StyledTitleBar title='Details' />
            <Text>DETAILS</Text>
        </View>
    )
}
