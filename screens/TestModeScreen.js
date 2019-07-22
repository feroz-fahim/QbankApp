import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, Switch } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Header, Left, Right, Container, Content, List, ListItem, CheckBox, Radio, Input } from 'native-base';
import { Badge, withBadge, Button } from 'react-native-elements'

class TestModeScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="file-text" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header>
                        <Left>
                            <Icon name="navicon" style={{ color: '#ffffff', fontSize: 30 }} 
                            onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>Create Test</Text>
                        </View>
                        <Right>
                            <Button title="Back" type="outline" buttonStyle={{ borderColor: '#ffffff' }} titleStyle={{ color: '#ffffff' }} />
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 22, color: '#555555' }}>Test Mode</Text>
                                </Left>
                            </ListItem>

                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <View>
                                        <Text style={{ fontSize: 16, color: '#555555', margin: 5 }}>Tutor</Text>
                                    </View>
                                    <View>

                                        <Switch
                                            style={{ margin: 5, tintColor: '#04b1ed' }}
                                            onValueChange={this.toggleSwitch}
                                            value={true}
                                        />
                                    </View>
                                </Left>

                                <Right>
                                    <View>
                                        <Text style={{ fontSize: 16, color: '#555555', margin: 5 }}>Timed</Text>
                                    </View>
                                </Right>
                                <View>
                                    <Switch
                                        style={{ margin: 5 }}
                                        onValueChange={this.toggleSwitch}
                                        value={false}
                                    />
                                </View>

                            </ListItem>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginVertical: 10 }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 22, color: '#555555' }}>Question Mode</Text>
                                </Left>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>All</Text>
                                    <Badge value="216" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Used</Text>
                                    <Badge value="56" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <Radio selected={true} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Unused</Text>
                                    <Badge value="132" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Marked</Text>
                                    <Badge value="156" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={styles.listBorder}>
                                <Left>
                                    <Text style={styles.txtHead}>Incorrect</Text>
                                    <Badge value="202" status="primary" containerStyle={{ position: 'absolute', top: 4, right: 1 }} />
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginVertical: 10 }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 22, color: '#555555' }}>No. of Questins</Text>
                                </Left>
                            </ListItem>
                            <ListItem>

                                <TextInput style={styles.inputBox} placeholder="20" placeholderTextColor='#aaa' />
                                <Text style={{
                                    flexDirection: 'row', fontSize: 18, color: '#aaa', margin: 15,
                                    padding: 10,
                                }}>Maximum 100</Text>
                            </ListItem>
                        </List>
                        <View style={{ width: 150, flex: 1, height: 40, marginHorizontal: '38%', marginVertical: 15 }}>
                            <Button title="Create Test" type="solid" />
                        </View>
                    </Content>

                </Container>

            </View>
        );
    }
}

export default TestModeScreen;

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
    paddings: {
        marginHorizontal: 50
    },
    listBorder: {
        borderWidth: 1, borderColor: '#eeeeee',
        paddingHorizontal: 10, paddingVertical: 2,
        marginHorizontal: 15, marginVertical: 6,
        backgroundColor: '#ffffff',
        elevation: 1
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        margin: 15,
        padding: 10,
        fontSize: 18,
        color: '#333'
    },

    txtHead: {
        fontSize: 18,
        color: '#888888',

    }
});