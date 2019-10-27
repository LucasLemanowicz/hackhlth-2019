import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { HomeScreen } from "./HomeScreen";
import { homeReducer } from './reducer';
import { DetailsScreen } from "./DetailsScreen";
import { MyHealthScreen } from "./MyHealthScreen";
import { SharingScreen } from "./SharingScreen";
import { ResourcesScreen } from "./ResourcesScreen";

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

class RewardsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Rewards Screen</Text>
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
  Trends: createStackNavigator({ TrendsScreen: TrendsScreen }),
  "My Health": createStackNavigator({ MyHealthScreen: MyHealthScreen }),
  Rewards: createStackNavigator({ RewardsScreen }),
  Resources: createStackNavigator({ ResourcesScreen }),
  Sharing: createStackNavigator({ SharingScreen }),
});

const AppContainer = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

