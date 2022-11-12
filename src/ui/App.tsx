import { useEffect } from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import GenresNavigation from './navigation/GenresNavigation';

export const App = () => {

  useEffect(() => {
    (async () => await changeNavigationBarColor('#000000', false, true))();
  },[]);

  return (
    <NavigationContainer>

      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
      
      <GenresNavigation />

    </NavigationContainer>
  )
}

export default App;
