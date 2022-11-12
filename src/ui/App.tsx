import { useEffect } from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigation';
import { StatusBar } from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

export const App = () => {

  useEffect(() => {
    (async () => await changeNavigationBarColor('#000000', false, true))();
  },[]);

  return (
    <NavigationContainer>

      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
      
      <Navigation />

    </NavigationContainer>
  )
}

export default App;
