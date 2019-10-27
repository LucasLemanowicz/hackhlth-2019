import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHomeState } from './reducer';
import { styles } from "./styles";
import { actionPoints } from "./points";
import { actionTexts } from "./actionTexts";

const actionKeys = ["walking", "parking", "lunch", "sleep"];

class UnconnectedHomeScreen extends React.Component {
    render() {
        const { isChecked, isShown, updateHomeState, points } = this.props;
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.iconWrapper}>
                        <Image style={{ width: 140, height: 42 }} source={require('./images/nudgewide.png')} />
                    </View>
                    <View style={styles.welcomeWrapper}>
                        <Text style={styles.welcome}>Hello Betty!</Text>
                        <Image style={{ width: 250, height: 140 }} source={require('./images/rating.png')} />
                        <Text style={styles.pointsRow}>43/100  |  {points} points</Text>
                    </View>
                    <Text style={styles.todayGoals}>Your Goals</Text>
                    {actionKeys.map(key => isShown[key] && (
                        <CheckBox
                            key={key}
                            title={`${actionTexts[key]} (+${actionPoints[key]})`}
                            checked={isChecked[key]}
                            onPress={() => {
                                updateHomeState({ selectedAction: key });
                                this.props.navigation.navigate('Details');
                            }}
                            containerStyle={isChecked[key] ? styles.checkedCheckbox : ""}
                            disabled={isChecked[key]}
                        />
                    ))}
                    <Text style={styles.todayGoals}>Recently Completed</Text>
                    <CheckBox
                        key="schedule-blood-test"
                        title="Schedule a new blood test with Dr. John (+8)"
                        checked={true}
                        containerStyle={styles.checkedCheckbox}
                    />
                    <CheckBox
                        key="water-glass"
                        title="Pour yourself a big glass of water and enjoy a healthy start to the day! (+1)"
                        checked={true}
                        containerStyle={styles.checkedCheckbox}
                    />
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
