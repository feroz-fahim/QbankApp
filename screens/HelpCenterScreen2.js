import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Container, Content, List, ListItem, Accordion 
} from 'native-base';
import { Button } from 'react-native-elements'
import Icon  from 'react-native-vector-icons/FontAwesome';

const dataArray = [
    { title: "How Docexams Qbank works?", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },
    { title: "Why should I trust DocExams?", content: "Docexams is an emerging medical website offering valuable online medical educational services, like tutoring program and Qbank (questions bank) for various medical licensing exams at lowest rates. We have best medical " },
    { title: "What if I need to extend the subscription?", content: "Re-subscription is easy and similar way as you took earlier. Discounted price will apply on each extend subscription." },
    { title: "How Docexams Qbank works?", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },
    { title: "Why should I trust DocExams?", content: "Docexams is an emerging medical website offering valuable online medical educational services, like tutoring program and Qbank (questions bank) for various medical licensing exams at lowest rates. We have best medical " },
    { title: "What if I need to extend the subscription?", content: "Re-subscription is easy and similar way as you took earlier. Discounted price will apply on each extend subscription." },
  ];


class HelpCenterScreen2 extends Component {
    
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="question-circle-o" style={{fontSize:24, color: 'white', opacity: 0.8}} />
        )
    }
    
    render(){
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
                         <Text style={{ fontSize: 20, color: '#ffffff' }}>Help Center</Text>
                    </View>
                    <Right>
                        <Button  title="Back" type="outline" buttonStyle={{borderColor: '#ffffff'}}
                                                             titleStyle={{color: '#ffffff'}}
                        />
                    </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 22, color: '#555555' }}>Getting Started</Text>
                                </Left>
                            </ListItem>
                        </List>
                        <Accordion style={{marginTop: 10, marginHorizontal:10, marginVertical: 5}}
                              dataArray={dataArray}
                              icon="add"
                              expandedIcon="remove"
                              iconStyle={{ color: "blue" }}
                              animation={true}
                              expanded={true}
                              expandedIconStyle={{ color: "green" }}
                              headerStyle={{ backgroundColor: "#f3f3f3" }}
                              contentStyle={{ backgroundColor: "#fcfcfc" }}
                        />



                        <View style={[styles.container, styles.bottomText]}>
                            <Text>Didn't find what you were looking for?</Text>
                        </View>
                        <View style={{ width: 150, height: 40, marginHorizontal: '36%', marginVertical: 15}}>
                            <Button title="Contact Us" type="solid" />
                        </View>
                        </Content>
                </Container>
                
            </View>
        );
    }
}

export default HelpCenterScreen2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      
    },
    heading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        paddingLeft: '20%',
      },
    bottomText: {
        alignItems: 'center',
        justifyContent: 'space-around', 
        textAlign: 'center',
        marginTop: 35
    },
    listBorder: {
        borderWidth: 1, borderColor: '#eeeeee',
        paddingHorizontal: 10, paddingVertical: 2,  
        marginHorizontal: 15, marginVertical: 6,
        backgroundColor: '#ffffff',
        elevation: 1
    }, 

    txtHead: {
        fontSize:18,
        color: '#555555',
        
    }
  });