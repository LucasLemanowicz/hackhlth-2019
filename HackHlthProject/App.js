import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { ThemeProvider, Image } from 'react-native-elements';
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
import { TrendsScreen } from "./TrendsScreen";
import { styles } from "./styles";

const store = createStore(combineReducers({
  home: homeReducer,
}));

class RewardsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Image style={{ width: 270, height: 270 }} source={require('./images/nudge-welcome.png')} />
        </View>
      </SafeAreaView>

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

