import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Container, Content, List, ListItem
} from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class SelectExamScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="book" style={{fontSize:24, color: 'white', opacity: 0.8}} />
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
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                         <Text style={{ fontSize: 20, color: '#ffffff' }}>Free Trial - Select Exam</Text>
                    </View>
                    <Right>
                        <Button  title="Back" type="outline" buttonStyle={{borderColor: '#ffffff'}} titleStyle={{color: '#ffffff'}} 
                        />
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem selected  style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>General Practitioner (GP) </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Internal Medicine</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Obs & Gynae</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Dermatology</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Peadeatric</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>General Surgery</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            
                        </List>
                        </Content>
                </Container>
                
            </View>
        );
    }
}

export default SelectExamScreen;

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

    txtHead: {
        fontSize:18,
        color: '#888888',
        
    }
  });