import React, { Component } from "react";
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  Animated, ScrollView, TextInput, Switch, Dimensions
} from "react-native";
import { Header, Left, Right, Container, Content, List, ListItem, Form, Item, Label, Input } from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { TextInput } from "react-native-paper";

const { width } = Dimensions.get("window");

class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="gears" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
    )
  }
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -900
  };

  handleSlide = type => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100
        }).start()
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100
        }).start()
      ]);
    }
  };
  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
    } = this.state;
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Left>
              <Icon name="navicon" style={{ color: '#ffffff', fontSize: 30 }} 
              onPress={() => this.props.navigation.openDrawer()} />
            </Left>
            <View style={styles.heading}>
              <Text style={{ fontSize: 20, color: '#ffffff' }}>Settings</Text>
            </View>
            <Right></Right>
          </Header>
          <Content padder>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginBottom: 20,
                    height: 40,
                    position: "relative"
                  }}
                >
                  <Animated.View
                    style={{
                      position: "absolute",
                      width: "50%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#0059a8",
                      borderRadius: 4,
                      transform: [
                        {
                          translateX
                        }
                      ]
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#0059a8",
                      borderRadius: 4,
                      borderRightWidth: 0,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0
                    }}
                    onLayout={event =>
                      this.setState({
                        xTabOne: event.nativeEvent.layout.x
                      })
                    }
                    onPress={() =>
                      this.setState({ active: 0 }, () =>
                        this.handleSlide(xTabOne)
                      )
                    }
                  >
                    <Text
                      style={{
                        color: active === 0 ? "#fff" : "#0059a8"
                      }}
                    >
                      Change Password
                            </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#0059a8",
                      borderRadius: 4,
                      borderLeftWidth: 0,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0
                    }}
                    onLayout={event =>
                      this.setState({
                        xTabTwo: event.nativeEvent.layout.x
                      })
                    }
                    onPress={() =>
                      this.setState({ active: 1 }, () =>
                        this.handleSlide(xTabTwo)
                      )
                    }
                  >
                    <Text
                      style={{
                        color: active === 1 ? "#fff" : "#0059a8"
                      }}
                    >
                      Notifications
                            </Text>
                  </TouchableOpacity>
                </View>

                <ScrollView>
                  <Animated.View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      transform: [
                        {
                          translateX: translateXTabOne
                        }
                      ]
                    }}
                    onLayout={event =>
                      this.setState({
                        translateY: event.nativeEvent.layout.height
                      })
                    }
                  >
                    <TextInput
                      style={{ width: '90%', padding: 10, height: 40, marginVertical: 10, borderColor: '#d1d1d1', borderWidth: 1, borderRadius: 5 }}
                      placeholder='Enter your old Password'
                      placeholderTextColor='#aaa'
                    />
                    <TextInput
                      style={{ width: '90%', padding: 10, height: 40, marginVertical: 10, borderColor: '#d1d1d1', borderWidth: 1, borderRadius: 5 }}
                      placeholder='Enter your new Password'
                      placeholderTextColor='#aaa'
                    />
                    <TextInput
                      style={{ width: '90%', padding: 10, height: 40, marginVertical: 10, borderColor: '#d1d1d1', borderWidth: 1, borderRadius: 5 }}
                      placeholder='Conform Password'
                      placeholderTextColor='#aaa'
                    />
                    <View>
                      <TouchableOpacity>
                        <Text style={{ color: '#04b1ed', paddingLeft: 5 }}>Forgot password?</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 100, height: 40, marginHorizontal: '38%', marginVertical: 40 }}>
                      <Button title="Save" type="solid" />
                    </View>
                    <View style={{ fontSize: 15 }}>
                      <Text>
                        <Text style={{ color: 'red' }}>Note:</Text>Your password must contain, at least 6 characters, upper and lower case letters, and numbers.
                              </Text>
                    </View>
                  </Animated.View>

                  <Animated.View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      transform: [
                        {
                          translateX: translateXTabTwo
                        },
                        {
                          translateY: -translateY
                        }
                      ]
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#d1d1d1', padding: 10, margin: 5, width: "99%" }}>
                      <Left>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>New Features</Text>
                      </Left>
                      <Right>
                        <Switch
                          style={{ margin: 0 }}
                          onValueChange={this.toggleSwitch}
                          thumbColor='#0059a8'
                          value={true}
                        />
                      </Right>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#d1d1d1', padding: 10, margin: 5, width: "99%" }}>
                      <Left>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Promotional</Text>
                      </Left>
                      <Right>
                        <Switch
                          style={{ margin: 0 }}
                          onValueChange={this.toggleSwitch}
                          value={false}
                        />
                      </Right>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#d1d1d1', padding: 10, margin: 5, width: "99%" }}>
                      <Left>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Reminders & Alerts</Text>
                      </Left>
                      <Right>
                        <Switch
                          style={{ margin: 0 }}
                          onValueChange={this.toggleSwitch}
                          thumbColor='#0059a8'
                          value={true}
                        />
                      </Right>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#d1d1d1', padding: 10, margin: 5, width: "99%" }}>
                      <Left>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Blogs & Articles</Text>
                      </Left>
                      <Right>
                        <Switch
                          style={{ margin: 0 }}
                          onValueChange={this.toggleSwitch}
                          value={false}
                        />
                      </Right>
                    </View>
                    <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#d1d1d1', padding: 10, margin: 5, width: "99%" }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Text messages</Text>
                      <Text style={{ fontSize: 16, lineHeight: 26, paddingVertical: 5 }}>
                        Mobile text message notifications sent through Whatsapp, Viber & imo for free.
                        Messages related to new job opportunities (for tutors - in real time), product reminders and alerts.
                </Text>
                      <Text>
                        Text STOP to +92 345 2410 728 (Whatsapp/imo/Viber) to cancel.
                </Text>
                      <Text>
                        Text HELP to +92 345 2410 728 (Whatsapp / imo / Viber) for help.
                </Text>
                      <Text>
                        <Text style={{ color: '#04b1ed' }}>Learn more</Text>
                        about our text notifications and see our
                 <Text style={{ color: '#04b1ed' }}>term of use</Text>
                        and <Text style={{ color: '#04b1ed' }}>privacy policy</Text> for more information.
                </Text>

                    </View>
                  </Animated.View>
                </ScrollView>
              </View>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4edbb8",

  },
  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    paddingLeft: '20%',
  },
  listBorder: {
    borderWidth: 1, borderColor: '#eeeeee',
    paddingHorizontal: 10, paddingVertical: 2,
    marginHorizontal: 15, marginVertical: 6,
    backgroundColor: '#ffffff',
    elevation: 1
  },
  txtFormat: {
    flex: 1,
    flexDirection: 'row',
    padding: 10, alignItems: 'center', justifyContent: 'center'
  },

  txtHead: {
    fontSize: 18,
    color: '#888888',

  }
});