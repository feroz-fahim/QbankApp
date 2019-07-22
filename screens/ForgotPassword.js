import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Header, Left, Right, Container, Content, List, ListItem, Form, Item, Label, Input } from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { TextInput } from "react-native-paper";

const WINDOW_WIDTH = Dimensions.get('window').width;
class ForgotPassword extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="cog" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header>
                        <Left>
                            <Icon name="navicon" style={{fontSize: 30, color: '#fff'}} onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{fontSize: 20, color: '#ffffff'}}>Settings</Text>
                        </View>
                        <Right></Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff' }} itemDivider>
                                    <Text style={{fontSize: 22, color: '#555555', fontWeight: 'bold' }}>Forgot Your Password?</Text>
                            </ListItem>
                        </List>   
                        <View>
                            <Text style={styles.txtFormat}>Input your registered email to reset your password</Text>
                        </View>
                        
                        <Form style={{ margin: 10, padding: 10 }}>
                           
                            <Item floatingLabel>
                                <Label>Enter your valid email address</Label>
                                <Input />
                                <Icon name='envelope-o' />
                            </Item>
                        </Form>
                        
                        {/* style={{width:100, height: 40, marginHorizontal: '38%', marginVertical:40}} */}
                        <View >
                        <Button title="Send" type="solid"
                        containerStyle={{width:WINDOW_WIDTH/4, height: 40, marginHorizontal: '38%', marginVertical:40}}
                        />
                        </View>
                        <View style={styles.txtFormat}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{color: '#04b1ed', paddingLeft: 5}}>Create Account</Text>
                            </TouchableOpacity>
                           
                         </View>
                    </Content>
                </Container>
            </View>
        );
    }
}

export default ForgotPassword;

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
        flex:1,
        flexDirection: 'row',
        padding: 10, alignItems: 'center', justifyContent: 'center'
    },

    txtHead: {
        fontSize: 18,
        color: '#888888',

    }
});