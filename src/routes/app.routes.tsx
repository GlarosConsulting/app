import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import {defaultTheme} from '../styles/theme';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: defaultTheme.backgrounds.dark},
    }}>
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default AppRoutes;
