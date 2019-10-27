import React from 'react';
import { SafeAreaView, Image, ScrollView, Text, View } from 'react-native';
import { CheckBox } from "react-native-elements"
import { styles } from "./styles";

class SharingScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.iconWrapper}>
                        <Image style={{ width: 45, height: 45 }} source={require('./images/nudge-clear.png')} />
                        <Text style={{ ...styles.healthTitle, marginLeft: 60 }}>Privacy Controls</Text>
                    </View>
                    <View style={styles.healthScreen}>
                        <Text>My Data Shared With:</Text>
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Dr. John" />
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Walmart Inc." />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { SharingScreen };
