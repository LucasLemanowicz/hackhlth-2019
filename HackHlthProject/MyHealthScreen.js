import React from 'react';
import { ActivityIndicator, Text, SafeAreaView, ScrollView, View } from 'react-native';
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
                    <View style={styles.healthScreen}>
                        <Text style={styles.healthTitle}>My Health Data</Text>
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Full Name</Text>
                            <Text style={styles.healthValue}>Betty Smith</Text>
                            <Text style={styles.healthSource1}>(questionaire)</Text>
                        </View>
                        <View style={styles.healthRow}>
                            <Text style={styles.healthLabel}>Dependents</Text>
                            <Text style={styles.healthValue}>2</Text>
                            <Text style={styles.healthSource1}>(questionaire)</Text>
                        </View>
                        {!isMyHealthDataChecked && <CheckBox containerStyle={styles.normalizedCheckbox} title='Pull in Health Data' checked={isMyHealthDataChecked}
                            onPress={() => { this.setState({ isMyHealthDataChecked: true }); this.loadHealthData() }} />}
                        {isLoadingHealthData && <ActivityIndicator size="large" />}
                        {isMyHealthDataChecked && !isLoadingHealthData &&
                            (
                                <>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Employer</Text>
                                        <Text style={styles.healthValue}>Walmart Inc.</Text>
                                        <Text style={styles.healthSource2}>(FHIR)</Text>
                                    </View>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Insurance</Text>
                                        <Text style={styles.healthValue}>Anthem PPO</Text>
                                        <Text style={styles.healthSource2}>(FHIR)</Text>
                                    </View>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Height</Text>
                                        <Text style={styles.healthValue}>5' 4"</Text>
                                        <Text style={styles.healthSource2}>(FHIR)</Text>
                                    </View>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Weight</Text>
                                        <Text style={styles.healthValue}>180 lbs</Text>
                                        <Text style={styles.healthSource2}>(FHIR)</Text>
                                    </View>
                                    <View style={styles.healthRow}>
                                        <Text style={styles.healthLabel}>Blood Pressure</Text>
                                        <Text style={styles.healthValue}>??</Text>
                                        <Text style={styles.healthSource2}>(FHIR)</Text>
                                    </View>
                                </>
                            )
                        }
                        {!isDevicesChecked && <CheckBox containerStyle={styles.normalizedCheckbox} title='Connect Devices' checked={isDevicesChecked}
                            onPress={() => { this.setState({ isDevicesChecked: true }); this.loadDevices(); }}
                        />}
                        {isLoadingDevices && <ActivityIndicator size="large" />}
                        {isDevicesChecked && !isLoadingDevices && (<>
                            <View style={styles.healthRow}>
                                <Text style={styles.healthValue}>Sleep Data</Text>
                                <Text style={styles.healthSource3}>(Fitbit)</Text>
                            </View>
                            <View style={styles.healthRow}>
                                <Text style={styles.healthValue}>Walking Data</Text>
                                <Text style={styles.healthSource3}>(Fitbit)</Text>
                            </View>
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