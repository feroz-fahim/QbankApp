import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from "react-native";
import {
    Header, Left, Right, Container, Content, List, ListItem, Card, CardItem, Body
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PureChart from 'react-native-pure-chart';
class welcomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }

    render() {
        let sampleData = [
            { value: 30, label: 'Correct', color: '#00e396' },
            { value: 45, label: 'Unused', color: '#e4e4e4' },
            { value: 25, label: 'Incorrect', color: '#f34f4f' }
        ]
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#04b1ed' barStyle='light-content' />
                <Container>
                    <Header>
                        <Left>
                            <Icon name="navicon" style={{ fontSize: 30, color: 'white' }} 
                             onPress={() => this.props.navigation.openDrawer()} 
                            /> 
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>Welcome</Text>
                        </View>
                        <Right>

                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Left>
                                    <Text style={[styles.heading, { flex: 1, color: '#333' }]}>MOH UAE GP QBank</Text>
                                </Left>
                            </ListItem>
                        </List>

                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Start Date</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>20-05-2019</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>End Date</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>19-07-2019</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <List>
                            <ListItem >
                                <Left>
                                    <PureChart data={sampleData} type='pie' />
                                </Left>
                                <Right>
                                    <Card style={{ width: 110 }}>
                                        <CardItem>
                                            <Icon name="caret-right" style={{ fontSize: 18, color: '#00e396', paddingRight: 5 }} />
                                            <Text>Correct</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Icon name="caret-right" style={{ fontSize: 18, color: '#f34f4f', paddingRight: 5 }} />
                                            <Text>Incorrect</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Icon name="caret-right" style={{ fontSize: 18, color: '#e4e4e4', paddingRight: 5 }} />
                                            <Text>Unused</Text>
                                        </CardItem>
                                    </Card>
                                </Right>
                            </ListItem>
                        </List>

                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Total Questions</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>5000</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Used</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>100</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Correct</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>30</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Incorrect</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>70</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Marked</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>05</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Left>
                                    <Text style={styles.txtHead}>Notes</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.txtHead}>02</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </View>
        );
    }
}

export default welcomeScreen;

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
        fontSize: 16,
        color: '#555555',

    },
    cardStyle: {
        marginLeft: 20,
        marginRight: 20
    }
});