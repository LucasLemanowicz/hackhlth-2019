/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { HomeScreen } from "./HomeScreen";
import { homeReducer } from './reducer';
import { DetailsScreen } from "./DetailsScreen";

const store = createStore(combineReducers({
  home: homeReducer,
}));

class TrendsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Trends Screen</Text>
      </View>
    );
  }
}

class MyHealthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is My Health Screen</Text>
      </View>
    );
  }
}

class ResourcesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Resources Screen</Text>
      </View>
    );
  }
}

class RewardsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Rewards Screen</Text>
      </View>
    );
  }
}

class SharingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Sharing Screen</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Trends: TrendsScreen,
  "My Health": MyHealthScreen,
  Resources: ResourcesScreen,
  Rewards: RewardsScreen,
  Sharing: SharingScreen,
});

const AppContainer = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

