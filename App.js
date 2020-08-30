/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  NativeRouter, Route
} from 'react-router-native';

import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Image,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <NativeRouter>
        <View>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </View>
      </NativeRouter>
    </>
  )
}
export default App;
