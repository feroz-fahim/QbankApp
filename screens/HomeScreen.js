import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Container, Content, List, ListItem
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class HomeScreen extends Component {
    
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="edit" style={{fontSize:24, color: 'white', opacity: 0.8}} />
        )
    }
    
    render(){
        return (
            <View style={styles.container}>
              <StatusBar backgroundColor='red' barStyle='light-content' />
                <Container>
                
                    <Header>
                    <Left>
                    <Icon name="navicon" style={{fontSize:24, color: 'white'}} 
                    onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                         <Text style={{ fontSize: 20, color: '#ffffff', textAlign: 'center' }}>Free Trial - Select Type</Text>
                    </View>
                    <Right></Right>
                    </Header>
                    <Content>
                        <List>
                        
                            <ListItem selected  style={styles.listBorder}>
                            
                                <Left>
                                    <Text style={styles.txtHead}>Medicine</Text>
                                </Left>
                            <TouchableOpacity>
                                <Right>
                                    <Icon name="arrow-right" />
                                </Right>
                            </TouchableOpacity>
                            </ListItem>
                      
                        
                            <ListItem style={styles.listBorder}>
                            
                            <Left>
                                <Text style={styles.txtHead}>Dentistry</Text>
                            </Left>
                            <TouchableOpacity>
                            <Right>
                                <Icon name="arrow-right" />
                            </Right>
                            </TouchableOpacity> 
                            </ListItem>
                        
                        </List>
                        </Content>
                </Container>
                
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      
    },
    // heading: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'space-around',
    //     textAlign: 'center',
        // paddingLeft: '1%',
    //   },
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