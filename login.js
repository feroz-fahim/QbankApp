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
  StatusBar,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

// import LoginScreen from './src/Screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={require('./Images/bgGradient.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <StatusBar backgroundColor='#014a8a' barStyle='light-content' />
          {/* <Text style={styles.appTitle}>QBank App</Text> */}

          <Image source={require('./Images/logo.png')} style={styles.img} />

          <Text style={styles.instructions}>Medical Exams' Experts</Text>
          <Text style={styles.txtStyle}>MOH UAE EXAM</Text>
          <View style={styles.hairline} />

          <TextInput style={styles.inputBox} underlineColorAndroid='#00265d' placeholder="Email" placeholderTextColor='#ffffff' />
          <TextInput style={styles.inputBox} underlineColorAndroid='#00265d' placeholder="Password" placeholderTextColor='#ffffff' secureTextEntry={true} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN NOW</Text>
          </TouchableOpacity>

          <View style={styles.signupTextCont}>
            <TouchableOpacity><Text style={styles.signupText}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.signupText}>Forget Password</Text></TouchableOpacity>
          </View>

          <View style={styles.socialLinks}>
            <TouchableOpacity style={styles.facebookbtn}>
              <Text style={styles.btnText}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googlebtn}>
              <Text style={styles.btnText}>Login with Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBar}>
            <TouchableOpacity><Text style={styles.bottomText}>QBank FREE TRIAL</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.bottomText}>Help Center</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    );
  }
}

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
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 18,
    justifyContent: 'flex-start',
    position: 'relative'

  },
  img: {
    width: 233,
    height: 70,
    marginTop: 30
  },
  txtStyle: {
    fontSize: 18,
    paddingTop: 50,
    color: '#ffffff',
  },
  hairline: {
    backgroundColor: '#ffffff',
    height: 1,
    width: 180,
    marginBottom: 60
  },
  inputBox: {
    width: 310,
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
    flex: 1
  },

  button: {
    width: 310,
    backgroundColor: '#0059a8',
    borderRadius: 25,
    marginVertical: 4,
    marginTop: 30,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  facebookbtn: {
    width: 180,
    backgroundColor: '#3b5998',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    padding: 4,
    margin: 5


  },
  googlebtn: {
    width: 180,
    backgroundColor: '#cf4332',
    borderRadius: 25,
    marginVertical: 10,
    padding: 4,
    paddingVertical: 10,
    margin: 5


  },
  btnText: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
    marginVertical: 4,
    flexDirection: 'row',

  },
  socialLinks: {
    flex: 1,
    width: 400,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 5,
    flexDirection: 'row'
  },
  signupText: {
    color: '#ffffff',
    fontSize: 16,
    marginHorizontal: 50,
  },
  bottomText: {
    color: '#aaaaaa',
    fontSize: 18,
    marginHorizontal: 40
  },
  bottomBar: {
    backgroundColor: '#012457',
    width: 420,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }

});