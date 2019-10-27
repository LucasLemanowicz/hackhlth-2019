/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, CheckBox, Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { styles } from "./styles";

// global state
let selectedAction = "";
let points = 10000;
let isChecked = { "biking": false, "lunch": false, "sleep": false, "swimming": false };
let isShown = { "biking": true, "lunch": true, "sleep": true, "swimming": false };
const actionKeys = ["biking", "swimming", "lunch", "sleep"];
const actionTexts = {
  "biking": "+5 20min of Biking",
  "lunch": "+5 Eat a healthy lunch",
  "sleep": "+5 Get an extra hour of sleep tonight",
  "swimming": "+5 20min of Swimming",
};

class HomeScreen extends React.Component {
  render() {
    console.debug(selectedAction, isChecked[selectedAction])
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcome}>Welcome Back Betty!</Text>
            <Text>{points} points</Text>
          </View>
          {actionKeys.map(key => isShown[key] && (
            <CheckBox
              title={actionTexts[key]}
              checked={isChecked[key]}
              onPress={() => {
                selectedAction = key;
                this.props.navigation.navigate('Details');
              }}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Exercise is the #1 factor that keeps you healthy. You usually get 10 min of exercise per day. Let's up it to 20 min!</Text>
        <Text>Biking is a great way to get your cardio for the day! 150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes, when paired with a healthy diet. The other great thing about biking is that it's easy on your knees. </Text>
        <Button title="Done" onPress={() => {
          console.debug(isChecked)
          this.props.navigation.navigate('HomeScreen');
          points = points + 1000;
          isChecked = { ...isChecked, [selectedAction]: true };
        }} />
        <Button title="Cannot Do" onPress={() => {
          this.props.navigation.navigate('HomeScreen');
          isShown = { ...isShown, [selectedAction]: false };
        }} />
      </View>
    );
  }
}

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

export default AppContainer = createAppContainer(TabNavigator);

