import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import {
    Header, Left, Right, Container, Content, List, ListItem, Form, Item, Picker, Input, Card, CardItem
} from 'native-base';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from 'react-native-paper';
import Modal from 'react-native-modal';

class AllTests extends Component {
    state = {
        visibleModalId: null,
      };
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="institution" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
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
    renderModalContent = () => (
        <View style={styles.content}>
            <View style={{flexDirection: 'row', marginVertical:10}}>
            <Text style={styles.contentTitle}>No. of Questions:</Text>
            <Text style={{fontSize: 18}}>55</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical:10}}>
            <Text style={styles.contentTitle}>Topic:</Text>
            <Text style={{fontSize: 16}}>Surgery, Internal Medicine, Obs & Gynea</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical:10}}>
            <Text style={styles.contentTitle}>Action:</Text>
                <TouchableOpacity>
                    <Text style={{color: '#04b1ed', fontSize: 16, padding:5}}>Resume</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: '#04b1ed', fontSize: 16, padding:5}}>Analysis</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: '#04b1ed', fontSize: 16, padding:5}}>Delete</Text>
                </TouchableOpacity>
            </View>
          
        </View>
      );
    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <Container>

                    <Header>
                        <Left>
                        <Icon name="navicon" style={{color: '#ffffff', fontSize:30}} onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 20, color: '#ffffff' }}>All Tests</Text>
                        </View>
                        <Right>
                            <Button title="Back" type="outline" buttonStyle={{ borderColor: '#ffffff' }}
                                titleStyle={{ color: '#ffffff' }}
                            />
                        </Right>
                    </Header>
                    <List>
                            <ListItem style={{ backgroundColor: '#e7f4ff', marginBottom: 10 }} itemDivider>
                                <Text style={{ fontSize: 22, color: '#555555' }}>Showing previous tests archive</Text>
                            </ListItem>
                        </List>
                    <Content padder>
                        <Form>
                            <Item picker style={{ paddingLeft: 10, borderColor: '#d1d1d1', borderWidth: 1, marginLeft: 10, marginRight: 10, marginVertical: 6}}>
                                <Picker
                                    mode="dropdown"
                                    Icon={<Icon name="caret-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Sort By.. "
                                    placeholderStyle={{ color: "#d3d3d3" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Sort By.." value="key0" />
                                    <Picker.Item label="Date Wise" value="key1" />
                                    <Picker.Item label="Topic Wise" value="key2" />
                                    <Picker.Item label="Subtopic Wise" value="key3" />
                                </Picker>
                            </Item>
                                <Item style={{ paddingLeft: 10, borderColor: '#d1d1d1', borderWidth: 1, marginLeft: 10, marginRight: 10, marginVertical: 6}}>
                                <TextInput style={{fontSize: 18, color: '#d1d1d1', paddingHorizontal: 10}} placeholder="Search Here.." />
                                <Right>
                                    <Icon style={{fontSize: 24, paddingHorizontal: 10}} name="search" />
                                </Right>
                                </Item>
                            </Form>
                            <View style={[styles.container, {marginVertical:15, marginHorizontal:5, borderWidth:1, borderColor:'#f3f3f3'}]}>
                        <DataTable>
                                <DataTable.Header style={{backgroundColor: '#f3f3f3', fontSize:24, alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Title sortDirection>Date (time)</DataTable.Title>
                                <DataTable.Title sortDirection>Status</DataTable.Title>
                                <DataTable.Title sortDirection>Score %</DataTable.Title>
                                <DataTable.Title></DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell style={{width: 200}}>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Completed</DataTable.Cell>
                                <DataTable.Cell numeric>71</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis}
                                        onPress={() => this.setState({ visibleModal: 'backdropPress' })}
                                /></DataTable.Cell>
                                </TouchableOpacity>
                                
                                </DataTable.Row>
                                
                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell style={{width: 200}}>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Inprogress</DataTable.Cell>
                                <DataTable.Cell numeric>48</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis}
                                        onPress={() => this.setState({ visibleModal: 'backdropPress' })}
                                /></DataTable.Cell>
                                </TouchableOpacity>
                                </DataTable.Row>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Completed</DataTable.Cell>
                                <DataTable.Cell numeric>51</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis}
                                            onPress={() => this.setState({ visibleModal: 'backdropPress' })}
                                /></DataTable.Cell>
                                </TouchableOpacity>
                                </DataTable.Row>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Inprogress</DataTable.Cell>
                                <DataTable.Cell numeric>75</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis} /></DataTable.Cell>
                                </TouchableOpacity>
                                </DataTable.Row>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Completed</DataTable.Cell>
                                <DataTable.Cell numeric>58</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis} /></DataTable.Cell>
                                </TouchableOpacity>
                                </DataTable.Row>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Completed</DataTable.Cell>
                                <DataTable.Cell numeric>60</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis} /></DataTable.Cell>
                                </TouchableOpacity>
                                </DataTable.Row>

                                <DataTable.Row style={{alignItems:'center', justifyContent: 'space-evenly'}}>
                                <DataTable.Cell>12-02-19, 21:00</DataTable.Cell>
                                <DataTable.Cell numeric>Completed</DataTable.Cell>
                                <DataTable.Cell numeric>80</DataTable.Cell>
                                <TouchableOpacity>
                                <DataTable.Cell numeric><Icon name="ellipsis-h" style={styles.ellipsis} /></DataTable.Cell>
                                </TouchableOpacity>
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
                <Modal
                isVisible={this.state.visibleModal === 'backdropPress'}
                onBackdropPress={() => this.setState({ visibleModal: null })}
                backdropColor="#333"
                backdropOpacity={0}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
                >
                {this.renderModalContent()}
                </Modal>
            </View>
        );
    }
}

export default AllTests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',

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
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'space-between',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        elevation: 2
      },
      contentTitle: {
        fontSize: 16,
        // marginBottom: 12,
        fontWeight: 'bold',
        paddingRight: 5
    
      },
      ellipsis: {
        fontSize:20, 
        color:'#04b1ed',
        paddingHorizontal: 5
      },
      txtHead: {
        fontSize: 18,
        color: '#555555',

    }
});