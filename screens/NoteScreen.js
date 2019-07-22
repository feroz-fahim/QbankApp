import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from "react-native";
import {
    Header, Left, Right, Container, Content, List, ListItem, Accordion, Form, Item, Picker, Input, Card, CardItem
} from 'native-base';
import { Button, Badge } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const dataArray = [
    { title: "Q. ID: 1523 	Pediatrics -  Internal Medicine", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },
    { title: "Q. ID: 2123 	Surgery -  Internal Medicine", content: "Docexams is an emerging medical website offering valuable online medical educational services, like tutoring program and Qbank (questions bank) for various medical licensing exams at lowest rates. We have best medical " },
    { title: "Q. ID: 329	Medicine - Cardiovascular ", content: "Re-subscription is easy and similar way as you took earlier. Discounted price will apply on each extend subscription." },
    { title: "Q. ID: 1523 	Pediatrics -  Dermatology", content: "DocExams Qbank works desperately with its expert panel belonging to different medical specialties/ fields to create practicing questions that match the style and difficulty level seen on the actual exams." },

];


class NoteScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="file-text-o" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2() {
        this.setState({
            selected2: value
        });
    }
    render() {
        const { search } = this.state;
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
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>Questions With Note</Text>
                        </View>
                        <Right>
                            <Button title="Back" type="outline" buttonStyle={{ borderColor: '#ffffff' }}
                                titleStyle={{ color: '#ffffff' }}
                            />
                        </Right>
                    </Header>
                    <Content padder>
                        <Form>
                            <Item picker style={{ paddingLeft: 10, borderColor: '#d1d1d1', borderWidth: 1, marginLeft: 10, marginRight: 10, marginVertical: 6, elevation: 2 }}>
                                <Picker
                                    mode="dropdown"
                                    Icon={<Icon name="caret-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Sort By.. "
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Sort By" value="key0" />
                                    <Picker.Item label="Date Wise" value="key1" />
                                    <Picker.Item label="Topic Wise" value="key2" />
                                    <Picker.Item label="Subtopic Wise" value="key3" />
                                </Picker>
                            </Item>
                                <Item style={{ paddingLeft: 10, borderColor: '#d1d1d1', borderWidth: 1, marginLeft: 10, marginRight: 10, marginVertical: 6, elevation: 2 }}>
                                <TextInput style={{fontSize: 18, color: '#d1d1d1', paddingHorizontal: 10}} placeholder="Search Here.." />
                                <Right>
                                    <Icon style={{fontSize: 24, paddingHorizontal: 10}} name="search" />
                                </Right>
                                </Item>
                            </Form>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Badge
                                    value="4"
                                    status="primary"
                                    containerStyle={{ margin: 5 }}
                                    badgeStyle={{ padding: 12 }}
                                    textStyle={{ fontSize: 20 }}
                                />
                                <Text style={{ fontSize: 22, color: '#555555' }}>Notes</Text>

                            </ListItem>
                        </List>
                        <Accordion style={{ marginTop: 10, marginHorizontal: 10, marginVertical: 5 }}
                            dataArray={dataArray}
                            icon="add-circle"
                            expandedIcon="remove-circle"
                            iconStyle={{ color: "#04b1ed", fontSize: 18 }}
                            animation={true}
                            expanded={true}
                            expandedIconStyle={{ color: "#d1d1d1" }}
                            headerStyle={{ backgroundColor: "#f3f3f3" }}
                            contentStyle={{ backgroundColor: "#fcfcfc", marginBottom: 20 }}
                        />
                    </Content>
                </Container>

            </View>
        );
    }
}

export default NoteScreen;

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
        fontSize: 18,
        color: '#555555',

    }
});