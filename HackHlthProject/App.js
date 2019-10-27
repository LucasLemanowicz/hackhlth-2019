/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button, CheckBox, Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>Welcome Back!</Text>
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
            
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
          <CheckBox
            title='Click Here'
            checked={true}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Settings screen </Text>
      </View>
    );
  }
}

class ShareScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Share screen </Text>
      </View>
    );
  }
}

class RewardsScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Rewards screen </Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Share: ShareScreen,
  Rewards: RewardsScreen,
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

