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
                        <Text>Share my data with</Text>
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Dr. John" checked={true} />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="Basic Info (sex, gender, date of birth, height, weight, BMI)" checked={true} />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="Lifestyle and History (BP, average sleep, average steps, previous medical conditions)" checked={true} />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="SDHs (dependents, education, employer, zip code)" checked={true} />
                        <CheckBox containerStyle={styles.normalizedCheckbox} title="Walmart Inc." checked={true} />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="Anonymized Basic Info" checked={true} />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="Anonymized Lifestyle and History" />
                        <CheckBox containerStyle={styles.indentedCheckbox} title="Anonymized SDHs" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { SharingScreen };
