import React, { Component } from "react";
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  Animated, ScrollView, Dimensions
} from "react-native";
import { Header, Left, Right, Container, Content, Separator, Card, CardItem, ListItem, Accordion } from 'native-base';
// import { Card, ListItem, Button } from 'react-native-elements';
// import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import PureChart from 'react-native-pure-chart';

const { width } = Dimensions.get("window");
const dataArray = [
  { title: "Internal Medicine", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },
  { title: "Pediatrics", content: "Docexams is an emerging medical website offering valuable online medical educational services, like tutoring program and Qbank (questions bank) for various medical licensing exams at lowest rates. We have best medical " },
  { title: "Obs & Gynae", content: "Re-subscription is easy and similar way as you took earlier. Discounted price will apply on each extend subscription." },
  { title: "Surgery", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },
  { title: "Gastro-Intestinal Tract", content: "Docexams is an emerging medical website offering valuable online medical educational services, like tutoring program and Qbank (questions bank) for various medical licensing exams at lowest rates. We have best medical " },
  { title: "Respiratory", content: "Re-subscription is easy and similar way as you took earlier. Discounted price will apply on each extend subscription." },
];

class ReportsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="pie-chart" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
    )
  }
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000
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

    let sampleData = [
      { value: 28, label: 'Internal Medicine', color: '#00e396' },
      { value: 35, label: 'Pediatrics', color: '#e4e4e4' },
      { value: 23, label: 'GIT', color: '#f34f4f' },
      { value: 15, label: 'Respiratory', color: '#fccfcf' }
    ]
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Left>
                <Icon name="navicon" 
                style={{color: '#ffffff', fontSize:30}}
                onPress={() => this.props.navigation.openDrawer()} />
            </Left>
            <View style={styles.heading}>
              <Text style={{ fontSize: 20, color: '#ffffff' }}>Reports</Text>
            </View>
            <Right></Right>
          </Header>
          <Content>
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
                        fontSize: 18,
                        color: active === 0 ? "#fff" : "#0059a8"
                      }}
                    >
                      Topic Wise
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
                        fontSize: 18,
                        color: active === 1 ? "#fff" : "#0059a8"
                      }}
                    >
                      Subtopic Wise
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
                    <Container style={{ width: '98%', height: 'auto', borderWidth: 1, borderColor: '#d1d1d1' }}>
                      <Content>
                        <Separator bordered>
                          <Text style={{ fontSize: 20 }}>Test Topics</Text>
                        </Separator>
                        <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 16 }}>Internal Medicine</Text>
                          <Text style={{ fontSize: 16 }}>06/10</Text>
                          <Text style={{ fontSize: 16 }}>(63%)</Text>
                        </ListItem>
                        <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 16 }}>General Pediatrics</Text>
                          <Text style={{ fontSize: 16 }}>06/10</Text>
                          <Text style={{ fontSize: 16 }}>(63%)</Text>
                        </ListItem>
                        <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 16 }}>Gastro-Intestinal Tract</Text>
                          <Text style={{ fontSize: 16 }}>06/10</Text>
                          <Text style={{ fontSize: 16 }}>(63%)</Text>
                        </ListItem>
                        <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 16 }}>Respiratory</Text>
                          <Text style={{ fontSize: 16 }}>06/10</Text>
                          <Text style={{ fontSize: 16 }}>(63%)</Text>
                        </ListItem>
                      </Content>
                    </Container>
                    <Container style={{ marginVertical: 10, width: '98%', height: 'auto', borderWidth: 1, borderColor: '#d1d1d1' }}>
                      <Content>
                        <Separator bordered>
                          <Text style={{ fontSize: 20 }}>Overall Summary for Topics</Text>
                        </Separator>
                        <ListItem>
                          <Left>
                            <PureChart data={sampleData} type='pie' />
                          </Left>
                          <Right>
                            <Card style={{ width: 110 }}>
                              <CardItem>
                                <Icon name="caret-right" style={{ fontSize: 14, color: '#00e396', paddingRight: 2 }} />
                                <Text>Internal Medicine</Text>
                              </CardItem>
                              <CardItem>
                                <Icon name="caret-right" style={{ fontSize: 14, color: '#f34f4f', paddingRight: 2 }} />
                                <Text>Pediatrics</Text>
                              </CardItem>
                              <CardItem>
                                <Icon name="caret-right" style={{ fontSize: 14, color: '#e4e4e4', paddingRight: 2 }} />
                                <Text>GIT</Text>
                              </CardItem>
                              <CardItem>
                                <Icon name="caret-right" style={{ fontSize: 14, color: '#fccfcf', paddingRight: 2 }} />
                                <Text>Respiratory</Text>
                              </CardItem>
                            </Card>
                          </Right>
                        </ListItem>
                      </Content>
                    </Container>
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
                    <Accordion style={{ marginTop: 10, marginHorizontal: 10, marginVertical: 5, width: '100%' }}
                      dataArray={dataArray}
                      // icon="add"
                      // expandedIcon="remove"
                      // iconStyle={{ color: "blue" }}
                      animation={true}
                      expanded={true}
                      expandedIconStyle={{ color: "green" }}
                      headerStyle={{ backgroundColor: "#f3f3f3" }}
                      contentStyle={{ backgroundColor: "#fcfcfc" }}
                    />
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

export default ReportsScreen;

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