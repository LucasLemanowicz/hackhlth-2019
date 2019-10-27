import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
    },
    welcomeWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    welcome: {
        fontSize: 32,
    },
    dailyActionRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    detailsScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    detailsMainText: {
        fontSize: 24,
        padding: 10,
        backgroundColor: "#FFC940"
    },
    detailsSecondaryText: {
        fontSize: 20,
        padding: 10,
    },
    todayGoals: {
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: "600"
    },
    healthScreen: {
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    healthTitle: {
        fontSize: 32,
        paddingBottom: 10,
        alignSelf: "center",
    },
    healthRow: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 5,
    },
    healthLabel: {
        fontSize: 20,
        paddingRight: 15,
        width: 140,
    },
    healthValue: {
        fontWeight: "600",
        fontSize: 20,
    },
    healthSource1: {
        color: "green",
        paddingLeft: 5,
        lineHeight: 26
    },
    healthSource2: {
        color: "blue",
        paddingLeft: 5,
        lineHeight: 26
    },
    healthSource3: {
        color: "red",
        paddingLeft: 5,
        lineHeight: 26
    },
    normalizedCheckbox: {
        marginLeft: 0,
        marginRight: 0
    },
    linkContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    link: {
        flex: 2,
        fontSize: 18,
        fontWeight: '400',
        color: "blue",
    },
    separator: {
        backgroundColor: "gray",
        height: 1,
    },
});

export { styles };
