import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHomeState } from './reducer';
import { actionPoints } from "./points";
import { styles } from "./styles";

const mainTexts = {
    "biking": "Exercise is the #1 factor that keeps you healthy. You usually get 10 min of exercise per day. Let's up it to 20 min!",
    "swimming": "The swimming pool at Henderson Multigenerational Centre is only $3. Can we try that today?"
}

const secondaryTexts = {
    "biking": "Biking is a great way to get your cardio for the day! 150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes, when paired with a healthy diet. The other great thing about biking is that it's easy on your knees.",
    "swimming": "Swimming or walking in a swimming pool is a great way to get your cardio for the day! 150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes. This is a great exercise to choose if you need something that helps you with your mobility."
}

class UnconnectedDetailsScreen extends React.Component {
    render() {
        const { isChecked, isShown, points, selectedAction, updateHomeState } = this.props;
        return (
            <View style={styles.detailsScreen}>
                <Text style={styles.detailsMainText}>{mainTexts[selectedAction]}</Text>
                <Text style={styles.detailsSecondaryText}>{secondaryTexts[selectedAction]}</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button title="Done" onPress={() => {
                        updateHomeState({
                            points: points + actionPoints[selectedAction],
                            isChecked: { ...isChecked, [selectedAction]: true },
                        });
                        this.props.navigation.navigate('HomeScreen');
                    }} />
                    <Button title="Cannot Do" onPress={() => {
                        updateHomeState({
                            isShown: { ...isShown, [selectedAction]: false, swimming: true },
                        })
                        this.props.navigation.navigate('HomeScreen');
                    }} />
                </View>
            </View>
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
const DetailsScreen = connect(mapStateToProps, mapDispatchToProps)(UnconnectedDetailsScreen);

export { DetailsScreen };

