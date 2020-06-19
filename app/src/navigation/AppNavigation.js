import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../screens/MainScreen';
import { FullScreen } from '../screens/FullScreen';

const MainNavigation = createStackNavigator({
	Main: MainScreen,
	Full: FullScreen
});

export const AppNavigation = createAppContainer(MainNavigation);