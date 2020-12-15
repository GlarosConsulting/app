import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import PhoneSignIn from '../pages/PhoneSignIn';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import {defaultTheme} from '../styles/theme';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: defaultTheme.backgrounds.dark},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="PhoneSignIn" component={PhoneSignIn} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
  </Auth.Navigator>
);

export default AuthRoutes;
