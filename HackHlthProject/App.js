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
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { styles } from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

function HomeScreen() {
  const [points, setPoints] = useState(10000);
  const onComplete = useCallback(() => { setPoints(points + 5); }, [points]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={{ fontSize: 25 }}>Welcome Back!</Text>
        <Text>{points} points</Text>
        <View style={{ flex: 1 }} >
          <CheckBox
            title='+5 Click Here'
            checked={true}
            onPress={onComplete}
          />
          <Button icon={<Icon name="delete" />} />
        </View>
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

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is my Settings screen </Text>
      </View>
    );
  }
}

class ShareScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is my Share screen </Text>
      </View>
    );
  }
}

class RewardsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

