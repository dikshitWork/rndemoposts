import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import {AppBottomTab} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <AppBottomTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
