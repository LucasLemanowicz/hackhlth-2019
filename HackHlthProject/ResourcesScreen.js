import React from 'react';
import { View, Text, TouchableOpacity, Linking, SafeAreaView, ScrollView } from 'react-native';
import { styles } from "./styles";

const links = [
    {
        title: 'Community Patient Guide to Diabetes',
        link: 'https://www.thecommunityguide.org/sites/default/files/assets/What-Works-Factsheet-Diabetes.pdf',
    },
    {
        title: 'Pre-Diabetes Fact Sheet',
        link: 'https://www.cdc.gov/chronicdisease/resources/publications/factsheets/diabetes-prediabetes.htm',
    },
    {
        title: 'Diabetes-Friendly Recipes',
        link: 'https://www.cdc.gov/diabetes/ndep/pdfs/54-tasty-recipes-508.pdf',
    },
    {
        title: 'Activity Guide',
        link: 'https://www.cdc.gov/diabetes/pdfs/managing/Tip_for_Being_Active.pdf',
    },
    {
        title: 'Choosing Food on Vacation',
        link: 'https://www.cdc.gov/diabetes/ndep/pdfs/NDEP_Buffet_Table_Tips_General.pdf',
    },
    {
        title: 'Managing Diabetes Long-term',
        link: 'https://www.cdc.gov/diabetes/ndep/pdfs/97-ndep67-4steps-4c-508.pdf',
    },
    {
        title: 'Smoking and Diabetes',
        link: 'https://www.cdc.gov/tobacco/data_statistics/sgr/50th-anniversary/pdfs/fs_smoking_diabetes_508.pdf',
    },
    {
        title: 'Pre-Diabetes Infographic',
        link: 'https://www.cdc.gov/diabetes/pdfs/library/socialmedia/prediabetes_infographic_poster.pdf',
    },
];

class ResourcesScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                <View style={styles.healthScreen}>
                    <Text style={styles.healthTitle}>Resources</Text>
                    {links.map((item) => {
                        return (
                            <>
                                <View style={styles.separator} />
                                <TouchableOpacity
                                    accessibilityRole={'button'}
                                    onPress={() => Linking.openURL(item.link)}
                                    style={styles.linkContainer}>
                                    <Text style={styles.link}>{item.title}</Text>
                                </TouchableOpacity>
                            </>
                        );
                    })}
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { ResourcesScreen };