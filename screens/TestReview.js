import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StatusBar,
    StyleSheet
} from "react-native";
import {
    Header, Left, Right, Container, Content, List, ListItem, Card, CardItem, Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge, withBadge, Button } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

class TestReview extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="navicon" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='red' barStyle='light-content' />
                <Container>

                    <Header>
                        <Left>
                            <TouchableHighlight>
                                <Icon name="navicon" style={{ fontSize: 30, color: '#fff' }} 
                                onPress={() => this.props.navigation.openDrawer()} />
                            </TouchableHighlight>
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>Test Review</Text>
                        </View>
                        <Right>

                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10, alignItems: 'center', justifyContent: 'space-between' }} itemDivider>
                                <Text style={{ fontSize: 22, color: '#555555' }}>Test ID: 12345</Text>
                                <Text style={{ fontSize: 22, color: '#555555' }}>Your Score 56%</Text>
                            </ListItem>
                        </List>
                        <View style={[styles.btnStyle, { alignItems: 'center', justifyContent: 'center' }]}>
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor='#0059a8'
                                onPress={this.onPress}
                            >
                                <Text style={{ fontSize: 16, color: '#04b1ed' }}> All </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor='#0059a8'
                                onPress={this.onPress}
                            >
                                <Text style={{ fontSize: 16, color: '#04b1ed' }}> Correct </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor='#0059a8'
                                onPress={this.onPress}
                            >
                                <Text style={{ fontSize: 16, color: '#04b1ed' }}> Incorrect </Text>
                            </TouchableHighlight>
                            {/* </View>
                        <View style={[styles.btnStyle, {marginHorizontal:80}]}> */}
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor='#0059a8'
                                onPress={this.onPress}
                            >
                                <Text style={{ fontSize: 16, color: '#04b1ed' }}> Marked </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor='#0059a8'
                                onPress={this.onPress}
                            >
                                <Text style={{ fontSize: 16, color: '#04b1ed' }}> Unattempted </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={[styles.container, { marginVertical: 10, marginHorizontal: 10, borderWidth: 1, borderColor: '#d1d1d1' }]}>
                            <DataTable>
                                <DataTable.Header style={{ backgroundColor: '#f3f3f3', fontSize: 24, alignItems: 'center', justifyContent: 'space-around' }}>
                                    <DataTable.Title sortDirection>Status</DataTable.Title>
                                    <DataTable.Title sortDirection>SNo</DataTable.Title>
                                    <DataTable.Title sortDirection>Q.ID</DataTable.Title>
                                    <DataTable.Title sortDirection>Time(Sec.)</DataTable.Title>
                                    <DataTable.Title sortDirection>Action</DataTable.Title>
                                    <DataTable.Title></DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>1</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>

                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="close" style={{ fontSize: 24, color: 'red' }} /></DataTable.Cell>
                                    <DataTable.Cell>2</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>3</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="close" style={{ fontSize: 24, color: 'red' }} /></DataTable.Cell>
                                    <DataTable.Cell>4</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="close" style={{ fontSize: 24, color: 'red' }} /></DataTable.Cell>
                                    <DataTable.Cell>5</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>6</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>7</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="close" style={{ fontSize: 24, color: 'red' }} /></DataTable.Cell>
                                    <DataTable.Cell>8</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>9</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell><Icon name="check" style={{ fontSize: 24, color: 'green' }} /></DataTable.Cell>
                                    <DataTable.Cell>10</DataTable.Cell>
                                    <DataTable.Cell>(3261)</DataTable.Cell>
                                    <DataTable.Cell>180</DataTable.Cell>
                                    <DataTable.Cell>Review</DataTable.Cell>
                                    <DataTable.Cell><Icon name="ellipsis-h" style={{ fontSize: 18, color: 'grey' }} /></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Pagination
                                    page={1}
                                    numberOfPages={3}
                                    onPageChange={(page) => { console.log(page); }}
                                    label="1-2 of 6"
                                />
                            </DataTable>
                        </View>
                    </Content>

                </Container>

            </View>
        );
    }
}

export default TestReview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnStyle: {
        flexDirection: 'row',
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
        color: '#555555',

    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#04b1ed',
        borderWidth: 1,
        padding: 6,
        margin: 5
    },
});