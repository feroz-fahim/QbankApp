/**
 * Docexams Question Bank Application */
/* Main App*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
// import {Icon } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-elements';
import {
  Header, Footer, Left, Right, Container, Content, List, ListItem, Card, CardItem, Thumbnail
} from 'native-base';
import {createAppContainer, createStackNavigator} from 'react-navigation'
// import LoginScreen from './src/Screens/LoginScreen';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="login" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
    )
  }

  render() {
    return (
      <ImageBackground source={require('./Images/bgGradient.jpg')} style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT }}>
        <View style={styles.container}>
          <StatusBar backgroundColor='#04b1ed' barStyle='light-content' />
          {/* <Text style={styles.appTitle}>QBank App</Text> */}

          <Image source={require('./Images/logo.png')} style={[styles.img, { resizeMode: 'contain' }]} />

          <Text style={styles.instructions}>Medical Exams' Experts</Text>
          <Text style={styles.txtStyle}>MOH UAE EXAM</Text>
          <View style={styles.hairline} />
      <View style={{marginTop: 20}}></View>
          <TextInput style={styles.inputBox} underlineColorAndroid='#00265d' placeholder="Email" placeholderTextColor='#ffffff' />
          <TextInput style={styles.inputBox} underlineColorAndroid='#00265d' placeholder="Password" placeholderTextColor='#ffffff' secureTextEntry={true} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN NOW</Text>
          </TouchableOpacity>

          <View style={styles.signupTextCont}>
            <Left><TouchableOpacity><Text style={styles.signupText}>Sign Up</Text></TouchableOpacity></Left>
            <Right><TouchableOpacity><Text style={styles.signupText}>Forget Password</Text></TouchableOpacity></Right>
          </View>
       
          <View style={styles.socialLinks}>
            {/* <TouchableOpacity style={styles.facebookbtn}> */}
            <Left>
              <Button style={styles.btnText}
                title='Login Facebook'
                buttonStyle={{ backgroundColor: '#0099ff', borderRadius: 50, padding: 10 }}
                containerStyle={{margin: 20}}
              />
            </Left>
            {/* </TouchableOpacity> */}

            {/* <TouchableOpacity style={styles.googlebtn}> */}
            <Right>
              <Button style={styles.btnText}
                title='Login Google'
                buttonStyle={{ backgroundColor: '#dd4b39', borderRadius: 50, padding: 10 }}
                containerStyle={{margin: 20}}
              />
            </Right>
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <Footer style={{height:80, backgroundColor: '#012457', alignItems: 'baseline', justifyContent: 'center'}}>
            <Left><TouchableOpacity><Text style={styles.bottomText}>QBank FREE TRIAL</Text></TouchableOpacity></Left>
            <Right><TouchableOpacity><Text style={styles.bottomText}>Help Center</Text></TouchableOpacity></Right>
          </Footer>
      </ImageBackground>

    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#003682',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    fontSize: 20,

  },
  appTitle: {
    color: '#ffffff',
    fontSize: 18,
    justifyContent: 'flex-start',
    position: 'relative'

  },
  img: {
    width: WINDOW_WIDTH / 1.5,
    // height: WINDOW_HEIGHT / 9,
    marginTop: 30,
    alignItems: 'center'
  },
  txtStyle: {
    fontSize: 18,
    paddingTop: 50,
    color: '#ffffff',
  },
  hairline: {
    backgroundColor: '#ffffff',
    height: 1,
    width: WINDOW_WIDTH / 3,
    marginBottom: 60
  },
  inputBox: {
    width: WINDOW_WIDTH / 1.2,
    backgroundColor: '#00265d',
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#ffffff'
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 20
  },

  button: {
    width: WINDOW_WIDTH / 1.2,
    backgroundColor: '#0059a8',
    borderRadius: 25,
    marginVertical: 4,
    marginTop: 30,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  facebookbtn: {
    width: WINDOW_WIDTH,
    backgroundColor: '#3b5998',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    padding: 4,
    margin: 5


  },
  googlebtn: {
    width: WINDOW_WIDTH,
    backgroundColor: '#cf4332',
    borderRadius: 25,
    marginVertical: 10,
    padding: 4,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5


  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center'
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
    marginVertical: 4,
    flexDirection: 'row',
    width: WINDOW_WIDTH / 1.2

  },
  socialLinks: {
    flex: 1,
    width: WINDOW_WIDTH,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  signupText: {
    color: '#ffffff',
    fontSize: 16,
    // marginHorizontal: 40,
  },
  bottomText: {
    color: '#aaaaaa',
    fontSize: 16,
    marginHorizontal: 20,
    paddingVertical:20
    // alignItems: 'center',
    // justifyContent:'center'
  },
  bottomBar: {
    backgroundColor: '#012457',
    width: WINDOW_WIDTH,
    height: 40,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }

});