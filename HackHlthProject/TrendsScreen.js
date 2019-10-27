import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
  import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CheckBox } from "react-native-elements"
import { styles } from "./styles";

class TrendsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.healthScreen}>
                        <Text style={styles.healthTitle}>Trends</Text>
                        <Text>My Data Shared With:</Text>
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Dr. John" />
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Walmart Inc." />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { TrendsScreen };
