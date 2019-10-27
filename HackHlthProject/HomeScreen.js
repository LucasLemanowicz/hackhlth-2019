import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHomeState } from './reducer';
import { styles } from "./styles";
import { actionPoints } from "./points";

const actionKeys = ["biking", "swimming", "lunch", "sleep"];
const actionTexts = {
    "biking": "20 min of biking",
    "lunch": "Eat a healthy lunch",
    "sleep": "Get an extra hour of sleep tonight",
    "swimming": "20 min of swimming",
};

class UnconnectedHomeScreen extends React.Component {
    render() {
        const { isChecked, isShown, updateHomeState, points } = this.props;
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.welcomeWrapper}>
                        <Text style={styles.welcome}>Hello Betty!</Text>
                        <Text>{points} points</Text>
                    </View>
                    <Text style={styles.todayGoals}>Today's Goals</Text> 
                    {actionKeys.map(key => isShown[key] && (
                        <CheckBox
                            key={key}
                            title={`${actionTexts[key]} (+${actionPoints[key]})`}
                            checked={isChecked[key]}
                            onPress={() => {
                                updateHomeState({ selectedAction: key });
                                this.props.navigation.navigate('Details');
                            }}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return state.home;
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateHomeState,
    }, dispatch)
);
const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(UnconnectedHomeScreen);

export { HomeScreen };
