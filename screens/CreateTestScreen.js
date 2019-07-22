import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Header, Left, Right, Container, Content, List, ListItem, CheckBox } from 'native-base';
import { Badge, withBadge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class CreateTestScreen extends Component {
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
                        <Icon name="navicon" 
                            style={{color: '#ffffff', fontSize:30}} 
                            onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>Create Test</Text>
                        </View>
                        <Right></Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff' }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 22, color: '#555555' }}>Select Topics</Text>
                                </Left>
                            </ListItem>

                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Internal Medicine</Text>
                                    <Badge value="1256" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <CheckBox checked={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Obs & Gynae</Text>
                                    <Badge value="216" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <CheckBox checked={true} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Dermatology</Text>
                                    <Badge value="56" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <CheckBox checked={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Peadeatric</Text>
                                    <Badge value="12" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <CheckBox checked={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>General Surgery</Text>
                                    <Badge value="156" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <CheckBox checked={true} />
                                </Right>
                            </ListItem>

                        </List>
                        <View style={{width:100, height: 40, marginHorizontal: '38%', marginVertical:40}}>
                    <Button title="Next" type="solid"/>
                    </View>
                    </Content>
                    
                </Container>

            </View>
        );
    }
}

export default CreateTestScreen;

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
        fontSize: 18,
        color: '#888888',

    }
});