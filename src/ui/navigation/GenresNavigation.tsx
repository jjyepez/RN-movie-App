import { createDrawerNavigator } from '@react-navigation/drawer';
import { GenreScreen } from '../screens/GenreScreen';
import { Navigation } from './Navigation';

const Drawer = createDrawerNavigator();

const GenresNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Navigation} />
        <Drawer.Screen name="Genre" component={GenreScreen} />
    </Drawer.Navigator>
  );
}

export default GenresNavigation;