import React from 'react';
import { ActivityIndicator, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from "./styles";

class MyHealthScreen extends React.Component {
    state = {
        isMyHealthDataChecked: false,
        isDevicesChecked: false,
        isLoadingHealthData: false,
        isLoadingDevices: false,
    };

    render() {
        const { isMyHealthDataChecked, isDevicesChecked, isLoadingHealthData, isLoadingDevices } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.iconWrapper}>
                        <Image style={{ width: 45, height: 45 }} source={require('./images/nudge-clear.png')} />
                        <Text style={{ ...styles.healthTitle, marginLeft: 50 }}>My Health Data</Text>
                    </View>
                    <View style={styles.healthScreen}>
                        <Text style={styles.healthSectionHeader}>From Questionnaire</Text>
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Full Name</Text>
                            <Text style={styles.healthValue}>Betty Smith</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Sex</Text>
                            <Text style={styles.healthValue}>Female</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Dependents</Text>
                            <Text style={styles.healthValue}>2</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Education</Text>
                            <Text style={styles.healthValue}>HS Diploma</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Zipcode</Text>
                            <Text style={styles.healthValue}>12345</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Employer</Text>
                            <Text style={styles.healthValue}>Walmart Inc</Text>
                        </View>
                        <View style={styles.separator} />
                        {!isMyHealthDataChecked && <CheckBox containerStyle={styles.normalizedCheckbox} title='Pull in Health Data' checked={isMyHealthDataChecked}
                            onPress={() => { this.setState({ isMyHealthDataChecked: true }); this.loadHealthData() }} />}
                        {isLoadingHealthData && <ActivityIndicator size="large" />}
                        {isMyHealthDataChecked && !isLoadingHealthData &&
                            (
                                <>
                                    <Text style={styles.healthSectionHeader}>From Dr. John's Office (FHIR)</Text>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Date of Birth</Text>
                                        <Text style={styles.healthValue}>Oct. 22, 1964</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Insurance</Text>
                                        <Text style={styles.healthValue}>Anthem PPO</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Height</Text>
                                        <Text style={styles.healthValue}>5' 4"</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Weight</Text>
                                        <Text style={styles.healthValue}>180 lbs</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>BMI</Text>
                                        <Text style={styles.healthValue}>31</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Last Clinic BP</Text>
                                        <Text style={styles.healthValue}>128/82</Text>
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Previous Medical Conditions</Text>
                                        <Text style={styles.healthValue}>Gestational Diabetes</Text>
                                    </View>
                                    <View style={styles.separator} />
                                </>
                            )
                        }
                        {!isDevicesChecked && <CheckBox containerStyle={styles.normalizedCheckbox} title='Connect Devices' checked={isDevicesChecked}
                            onPress={() => { this.setState({ isDevicesChecked: true }); this.loadDevices(); }}
                        />}
                        {isLoadingDevices && <ActivityIndicator size="large" />}
                        {isDevicesChecked && !isLoadingDevices && (<>
                            <Text style={styles.healthSectionHeader}>Fitbit Connected</Text>
                            <View style={styles.healthRow}>
                                <Text style={styles.healthLabel}>Avg Sleep Data</Text>
                                <Text style={styles.healthValue}>6.1 hrs/night</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.healthRow}>
                                <Text style={styles.healthLabel}>Avg Walking Data</Text>
                                <Text style={styles.healthValue}>3650 steps/day</Text>
                            </View>
                            <View style={styles.separator} />
                        </>)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    loadHealthData() {
        this.setState({ isLoadingHealthData: true });
        setTimeout(() => {
            this.setState({ isLoadingHealthData: false });
        }, 500);
    }

    loadDevices() {
        this.setState({ isLoadingDevices: true });
        setTimeout(() => {
            this.setState({ isLoadingDevices: false });
        }, 500);
    }
}

export { MyHealthScreen }