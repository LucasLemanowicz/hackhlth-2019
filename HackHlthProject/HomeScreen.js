import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHomeState } from './reducer';
import { styles } from "./styles";
import { actionPoints } from "./points";

const actionKeys = ["walking", "parking", "lunch", "sleep"];
const actionTexts = {
    "walking": "30 min walk",
    "lunch": "Eat a healthy lunch",
    "sleep": "Get an extra hour of sleep tonight",
    "parking": "Park car two blocks from work",
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
                        <Image style={{ width: 100, height: 60 }} source={require('./rating.png')} />
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
                    <CheckBox
                        key="schedule-blood-test"
                        title="Schedule a new blood test with Dr. John (+8)"
                        checked={true}
                    />
                    <CheckBox
                        key="water-glass"
                        title="Pour yourself a big glass of water and enjoy a healthy start to the day! (+1)"
                        checked={true}
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
