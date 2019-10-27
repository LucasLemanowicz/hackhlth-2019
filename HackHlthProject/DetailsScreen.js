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
    "swimming": "The swimming pool at Henderson Multigenerational Centre is only $3. Can we try that today?",
    "sleep": "Your sleep records show that you got 6 hours sleep the last three nights. Trying going to bed an hour earlier tonight. We'll send you a reminder too, just to make it easier.",
    "lunch": "Healthy Lunch can include: \
        - one serving of grains (pasta, bread) \
        - at least one to two servings of fresh fruit (examples include an apple, banana, handful of fresh strawberries)\
        - at least one to two servings of vegetables (examples include a large carrot, handful of broccoli, large stalk of celery)"
}

const secondaryTexts = {
    "biking": "Biking is a great way to get your cardio for the day! 150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes, when paired with a healthy diet. The other great thing about biking is that it's easy on your knees.",
    "swimming": "Swimming or walking in a swimming pool is a great way to get your cardio for the day! 150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes. This is a great exercise to choose if you need something that helps you with your mobility.",
    "sleep": "Getting more sleep is an easy way to reduce stress and have more energy in the day.",
    "lunch": "Eating healthy gives your body exactly what it needs so that you can feel good all day while your blood sugar stays in check. The first step is tracking what you eat on a regular basis."
}

class UnconnectedDetailsScreen extends React.Component {
    render() {
        const { isChecked, isShown, points, selectedAction, updateHomeState } = this.props;
        return (
            <View style={styles.detailsScreen}>
                <Text style={styles.detailsMainText}>{mainTexts[selectedAction]}</Text>
                <Text style={styles.detailsSecondaryText}>{secondaryTexts[selectedAction]}</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button title="Done!" onPress={() => {
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

