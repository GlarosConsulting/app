/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import {defaultTheme} from './styles/theme';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={defaultTheme.backgrounds.light}
      />
      <AppProvider>
        <View style={{flex: 1, backgroundColor: defaultTheme.colors.grey}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
