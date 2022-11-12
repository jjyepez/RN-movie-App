import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../../logic/interfaces/movieInterface';

import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return MovieNavigation(); 
}

const MovieNavigation = () =>  {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
          headerShown: false,
          cardStyle: {
              backgroundColor: 'white'
          }
      }}
    >
        
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

    </Stack.Navigator>
  )
}