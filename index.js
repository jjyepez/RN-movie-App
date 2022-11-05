import {AppRegistry} from 'react-native';
import App from './src/ui/App';
import {name as appName} from './src/logic/config/app.json';

AppRegistry.registerComponent(appName, () => App);
