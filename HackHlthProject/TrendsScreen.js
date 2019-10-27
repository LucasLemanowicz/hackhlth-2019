import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { styles } from "./styles";

const stepsData = {
    labels: [ 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            data: [2000, 4500, 2800, 1800, 9901, 4300],
            strokeWidth: 2, // optional
        },
    ],
};


const bmiData = {
    labels: [ 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            data: [0, 31, 0, 0, 28],
            strokeWidth: 2, // optional
        },
    ],
};

const barData = {
    labels: [ 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            data: [0, 3, 0, 2, 1],
            strokeWidth: 2, // optional
        },
    ],
};
class TrendsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.iconWrapper}>
                        <Image style={{ width: 45, height: 45 }} source={require('./images/nudge-clear.png')} />
                        <Text style={{ ...styles.healthTitle, marginLeft: 110 }}>Trends</Text>
                    </View>
                    <View style={styles.healthScreen}>
                        <Text style={styles.chartHeader}>
                            Steps
                        </Text>
                        <LineChart
                            data={stepsData}
                            width={330}
                            height={240}
                            chartConfig={{
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#fb8c00',
                                backgroundGradientTo: '#ffa726',
                                decimalPlaces: 0, 
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                borderRadius: 16
                            }}
                        />
                        <Text style={styles.chartHeader}>
                            BMI
                        </Text>
                        <BarChart
                            data={bmiData}
                            width={330}
                            height={240}
                            chartConfig={{
                                backgroundColor: '#137CBD',
                                backgroundGradientFrom: '#0E5A8A',
                                backgroundGradientTo: '#48AFF0',
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            style={{
                                borderRadius: 16
                            }}
                        />
                        <Text style={styles.chartHeader}>
                            Medical Visits
                        </Text>
                        <BarChart
                            data={barData}
                            width={330}
                            height={240}
                            chartConfig={{
                                backgroundColor: '#0F9960',
                                backgroundGradientFrom: '#0A6640',
                                backgroundGradientTo: '#3DCC91',
                                decimalPlaces: 0, 
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                borderRadius: 16
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { TrendsScreen };

