import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Container, Content, List, ListItem, Card, CardItem, Thumbnail 
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class HelpCenter extends Component {
    
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
                    
                    </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem selected  style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Getting Started</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>My Account</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                            <Left>
                                <Text style={styles.txtHead}>Payments</Text>
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

export default HelpCenter;

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