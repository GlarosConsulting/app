/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {View, Button} from 'react-native';

import {useAuth} from '../../hooks/auth';

const Home: React.FC = () => {
  const {signOut} = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Home;
