import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button, CheckBox, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHomeState } from './reducer';
import { actionPoints } from "./points";
import { styles } from "./styles";
import { actionTexts } from "./actionTexts";

const mainTexts = {
    "walking": "Exercise is the #1 factor that keeps you healthy. You usually get 10 min per day. Let's up it to 20 min!",
    "bloodSugar": "Blood sugar is important to monitor",
    "parking": "Adding a few more steps to your walk in to work.",
    "sleep": "Your sleep records show that you got 6 hours sleep the last three nights. Trying going to bed an hour earlier tonight. We'll send you a reminder too, just to make it easier.",
    "lunch": "Healthy Lunch can include: \
        - one serving of grains (pasta, bread) \
        - at least one to two servings of fresh fruit (examples include an apple, banana, handful of fresh strawberries)\
        - at least one to two servings of vegetables (examples include a large carrot, handful of broccoli, large stalk of celery)"
}

const secondaryTexts = {
    "walking": "Walking is a great way to get your cardio for the day! Why not grab a friend and check out a local trail.",
    "bloodSugar": "It's important",
    "parking": "The more active you are, the more you reduce your risk of prediabetes.",
    "sleep": "Getting more sleep is an easy way to reduce stress and have more energy in the day.",
    "lunch": "Eating healthy gives your body exactly what it needs so that you can feel good all day while your blood sugar stays in check. The first step is tracking what you eat on a regular basis."
}

const tertiaryTexts = {
    "walking": "150 minutes of cardiovascular exercise per week has been shown to be twice as effective as medication in reducing your risk of developing diabetes.",
    "parking": "Physical activity helps you control your weight, uses up glucose as energy and makes your cells more sensitive to insulin.",
    "sleep": "",
    "lunch": "",
    "bloodSugar": "",
}

class UnconnectedDetailsScreen extends React.Component {
    state = { isCannotDo: false, isReasonOne: false, isReasonTwo: false, isReasonThree: false };
    render() {
        const { isChecked, isShown, points, selectedAction, updateHomeState } = this.props;
        const { isReasonOne, isReasonTwo, isReasonThree } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.iconWrapper}>
                        <Image style={{ width: 45, height: 45 }} source={require('./images/nudge-clear.png')} />
                        <Text style={{ ...styles.healthTitle, marginLeft: 10, width: 380 }}>{actionTexts[selectedAction]}</Text>
                    </View>
                    <View style={styles.detailsScreen}>
                        <Text style={styles.detailsMainText}>{mainTexts[selectedAction]}</Text>
                        <Text style={styles.detailsSecondaryText}>{secondaryTexts[selectedAction]}</Text>
                        {selectedAction === "walking" && <Image style={{ width: 330, height: 300 }} source={require('./images/walk.png')} />}
                        {selectedAction === "parking" && <Image style={{ width: 330, height: 300 }} source={require('./images/parking.png')} />}
                        <Text style={{ ...styles.miniHeader, paddingTop: 10 }}>Did You Know?</Text>
                        <Text style={styles.detailsSecondaryText}>{tertiaryTexts[selectedAction]}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Button title="Done!"
                                buttonStyle={{ width: 140, marginRight: 10 }}
                                icon={<Icon name="check" />}
                                onPress={() => {
                                    updateHomeState({
                                        points: points + actionPoints[selectedAction],
                                        isChecked: { ...isChecked, [selectedAction]: true },
                                    });
                                    this.props.navigation.navigate('HomeScreen');
                                }} />
                            <Button title="Can't Do"
                                buttonStyle={{ width: 140, backgroundColor: "#DB3737" }}
                                icon={<Icon name="delete" />}
                                onPress={() => {
                                    this.setState({ isCannotDo: true });
                                }} />
                        </View>
                        {this.state.isCannotDo && (
                            <View style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
                                <Text style={{ ...styles.miniHeader, paddingVertical: 10 }}>Why?</Text>
                                <CheckBox style={styles.normalizedCheckbox} title="Physical pain" checked={isReasonOne}
                                    onPress={() => { this.setState({ isReasonOne: !isReasonOne }) }} />
                                <CheckBox style={styles.normalizedCheckbox} title="Not enough time" checked={isReasonTwo}
                                    onPress={() => { this.setState({ isReasonTwo: !isReasonTwo }) }} />
                                <CheckBox style={styles.normalizedCheckbox} title="Not wearing comfortable clothing" checked={isReasonThree}
                                    onPress={() => { this.setState({ isReasonThree: !isReasonThree }) }} />
                                <Button title="Request New Recommendation" onPress={() => {
                                    updateHomeState({
                                        isShown: { ...isShown, [selectedAction]: false, parking: true },
                                    })
                                    this.props.navigation.navigate('HomeScreen');
                                }} />

                            </View>
                        )}
                    </View>
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
const DetailsScreen = connect(mapStateToProps, mapDispatchToProps)(UnconnectedDetailsScreen);

export { DetailsScreen };

