import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App;
