import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from "./styles";

const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
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
                    <Text style={{...styles.healthTitle, marginLeft: 110 }}>Trends</Text>
                </View>
                    <View style={styles.healthScreen}>
                        <Text>
                            Bezier Line Chart
                        </Text>
                        <LineChart
                            data={linedata}
                            width={320}
                            height={240}
                            yAxisLabel={'$'}
                            chartConfig={{
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#fb8c00',
                                backgroundGradientTo: '#ffa726',
                                decimalPlaces: 2, // optional, defaults to 2dp
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

