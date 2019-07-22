import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import LoginScreen from "./screens/LoginScreen";
import welcomeScreen from './screens/welcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SelectExamScreen from './screens/SelectExamScreen';
import CreateTestScreen from './screens/CreateTestScreen';
import TestModeScreen from './screens/TestModeScreen';
import QbankApp from "./screens/QbankApp";
import HelpCenter from './screens/HelpCenter';
import HelpCenterScreen2 from './screens/HelpCenterScreen2';
import contactUs from './screens/contactUs';
import NoteScreen from "./screens/NoteScreen";
import editNotes from "./screens/editNotes";
import TestReview from "./screens/TestReview";
import QuestionReview from "./screens/QuestionReview";
import AllTests from "./screens/AllTests";
import ReportsScreen from "./screens/ReportsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ForgetPassword from "./screens/ForgotPassword";


const { width } = Dimensions.get('window')
export default class App extends React.Component {
 
  render() {
    return (
       <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={styles.container}>
      <View style={{height: 150, backgroundColor: '#014a8a', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./Images/logo.png')} style={{width: 200, height: 60}} />
        <Text style={{color: '#fff', fontSize: 18, paddingVertical: 10}}>MOH UAE Internal Medicine</Text>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
          <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>

) 

const AppDrawerNavigator = createDrawerNavigator({
  
  SignIn: { screen: LoginScreen},
  Welcome: { screen: welcomeScreen},
  CreateTest: { screen: HomeScreen},
  Exam: { screen: SelectExamScreen},
  Topics: { screen: CreateTestScreen},
  TestMode: { screen: TestModeScreen},
  Qbank: { screen: QbankApp},
  Help: { screen: HelpCenter},
  HelpStarted: { screen: HelpCenterScreen2},
  Contact: { screen: contactUs},
  Notes: { screen: NoteScreen},
  Edit: { screen: editNotes},
  Review: { screen: TestReview},
  Question: { screen: QuestionReview},
  AllTests: { screen: AllTests},
  Reports: { screen: ReportsScreen},
  Settings: { screen: SettingsScreen},
  ForgetPassword: { screen: ForgetPassword},
  
},

{
  contentComponent: CustomDrawerComponent,
  drawerWidth: 300,
    contentOptions: {
    activeTintColor: '#04b1ed',
    activeBackgroundColor: '#0465bc',
    itemsContainerStyle: {
    backgroundColor: '#0059a8'
},
   itemStyle: {
    color: 'white'
},
   labelStyle: {
     fontSize: 16,
     fontFamily: 'Century Gothic',
     color: '#ffffff'
},
   activeLabelStyle: {
     fontWeight: 'bold',
     color: '#f3f3f3'
},
   iconContainerStyle: {
     color: 'white',
     opacity: 1
}
},
  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});