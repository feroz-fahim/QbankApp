import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";
import {
    Header, Left, Right, Container, Content, List, ListItem, Form, Item, Input, Label, Textarea
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements'
class editNotes extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="edit" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Content>
                        <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Left>
                                    <Text style={{ fontSize: 24, color: '#555555' }}>Edit Note</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 20, color: '#aaa' }}>X</Text>
                                </Right>
                            </ListItem>
                        </List>
                        <Form style={{ marginHorizontal: 10, paddingHorizontal: 10 }}>
                                
                                <Textarea style={{ margin: 10, padding: 10 }} rowSpan={8} bordered 
                                placeholder="This is my note for this question, This is my note for this question, This is my note for this question," 
                                placeholderTextColor='#d1d1d1'
                                editable = {true}
                                multiline = {true}
                                maxLength = {200}
                                />
                        </Form>
                        <View style={{ width: 150, height: 40, marginHorizontal: '34%', marginVertical: 25 }}>
                            <Button title="Save" type="solid" />
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}

export default editNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20, color: '#ffffff'
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