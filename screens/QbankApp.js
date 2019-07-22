import React, { Component } from "react";
import {
    Alert,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { 
    Header, 
    Left, Right, Container, Content, Card, CardItem, 
    Footer, List, ListItem, Form, Textarea 
} from 'native-base';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { Calculator } from 'react-native-calculator';
import ModalDropdown from 'react-native-modal-dropdown';
// import { Lightbox } from "react-modal-image";
// import { ScrollView } from "react-native-gesture-handler";
// import ModalImage from 'react-modal-image'
import Lightbox from 'react-native-lightbox';
import { RadioButton } from 'react-native-paper';
// import { ScrollView } from "react-native-gesture-handler";
// import ImageView from 'react-native-image-view';
// import ImageViewer from 'react-native-image-zoom-viewer';
// import { platform } from "os"; 

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
const closeLightbox = () => {
    this.state.open = true;
};

class QbankApp extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="file-text" style={{ fontSize: 24, color: 'white', opacity: 0.8 }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
                Checked: true,
                Unchecked: false,
                selected: true,
                Unselected: false,
                Width: WINDOW_WIDTH,

        };
    }
    state = {
        value: 'A',
        visibleModalId: null,
    };
    // toggleChange = () => {
    //     this.setState({
    //         selected: true,
    //     });
    // }
    _onPressButton() {
        Alert.alert("Do you want to end this test?");
        // styles.submit= {display: 'block'}
    }
    renderModalEndTest = () => (
        <Card>
            <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                <Left>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>End Test?</Text>
                </Left>
                <TouchableOpacity>
                    <Right>
                        <Text style={{ fontSize: 18 }}
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Close"
                        >X</Text>
                    </Right>
                </TouchableOpacity>
            </CardItem>
            <CardItem>
                <Text style={{ fontSize: 18 }}>Do you want to end this test?</Text>
            </CardItem>
            <CardItem>
                <Left></Left>
                <Right>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ margin: 4 }} ><Button title="Yes" type="solid" /></View>
                        <View style={{ margin: 2 }} ><Button type="outline"
                            onPress={() => this.setState({ visibleModal: null })}
                            title="No"
                        /></View>
                    </View>
                </Right>
            </CardItem>
        </Card>
    );
    renderModalEditNote = () => (
        <Card>
            <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                <Left>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Edit Note</Text>
                </Left>
                <TouchableOpacity>
                    <Right>
                        <Text style={{ fontSize: 18 }}
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Close"
                        >X</Text>
                    </Right>
                </TouchableOpacity>
            </CardItem>
            <CardItem>
                <Form style={{ marginHorizontal: 10, paddingHorizontal: 10 }}>

                    <Textarea style={{ margin: 10, padding: 10 }} rowSpan={8} bordered
                        placeholder="This is my note for this question, This is my note for this question, This is my note for this question,"
                        placeholderTextColor='#d1d1d1'
                        editable={true}
                        multiline={true}
                        maxLength={50}
                    />
                </Form>
            </CardItem>
            <CardItem>
                <Left></Left>
                <Right>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ margin: 4 }} ><Button title="Save" type="solid" /></View>
                        <View style={{ margin: 2 }} ><Button type="outline"
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Cancel"
                        /></View>
                    </View>
                </Right>
            </CardItem>
        </Card>
    );
    renderModalFeedBack = () => (
        <Card>
            <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                <Left>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Feedback</Text>
                </Left>
                <TouchableOpacity>
                    <Right>
                        <Text style={{ fontSize: 18 }}
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Close"
                        >X</Text>
                    </Right>
                </TouchableOpacity>
            </CardItem>
            <CardItem>
                <Form style={{ marginHorizontal: 10, paddingHorizontal: 10 }}>

                    <Textarea style={{ margin: 10, padding: 10, width: 300 }} rowSpan={8} bordered
                        placeholder="Type your feedback here..."
                        placeholderTextColor='#d1d1d1'
                        editable={true}
                        multiline={true}
                        maxLength={100}
                    />
                </Form>
            </CardItem>
            <CardItem>
                <Left></Left>
                <Right>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ margin: 4 }} ><Button title="Submit" type="solid" /></View>
                        <View style={{ margin: 2 }} ><Button type="outline"
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Cancel"
                        /></View>
                    </View>
                </Right>
            </CardItem>
        </Card>
    );
    renderModalReverseColor = () => (
        <Card>
            <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                <Left>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Reverse Color</Text>
                </Left>
                <TouchableOpacity>
                    <Right>
                        <Text style={{ fontSize: 18 }}
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Close"
                        >X</Text>
                    </Right>
                </TouchableOpacity>
            </CardItem>
            <CardItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ margin: 2 }} ><Button title="White" type="solid"
                        buttonStyle={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#d1d1d1', padding: 20 }}
                        titleStyle={{ color: '#555555' }} /></View>
                    <View style={{ margin: 2 }} ><Button title="Black" type="solid"
                        buttonStyle={{ backgroundColor: 'black', padding: 20, borderWidth: 1, borderColor: 'black' }} /></View>
                    <View style={{ margin: 2 }} ><Button title="Sepia" type="solid" color="white"
                        buttonStyle={{ backgroundColor: '#ffe4c4', borderWidth: 1, borderColor: '#d1d1d1', padding: 20 }}
                        titleStyle={{ color: '#555' }} /></View>
                </View>
            </CardItem>
        </Card>
    );
    renderModalCalculator = () => (
        <Card>
            <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                <Left>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Calculator</Text>
                </Left>
                <TouchableOpacity>
                    <Right>
                        <Text style={{ fontSize: 18 }}
                            onPress={() => this.setState({ visibleModal: null })}
                            title="Close"
                        >X</Text>
                    </Right>
                </TouchableOpacity>
            </CardItem>

            <CardItem>
                <View style={{ flex: 1, height: 500 }} >
                    <Calculator style={{ flex: 1, height: 500 }}
                />
                </View>
            </CardItem>
        </Card>
    );
    // listOption = () => (
    //     <View style={{width:'40%', height:'auto' }}>
    //     <List style={{borderWidth: 1, borderColor: '#d1d1d1'}}>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>1</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>2</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>3</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>4</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>5</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>6</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>7</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>8</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>9</Text>
    //         </ListItem>
    //         <ListItem>
    //             <Text style={{fontSize: 18, color: '#444'}}>10</Text>
    //         </ListItem>
    //     </List>
    //     </View>
    // );
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header>
                        <Left>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                {/* <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 2 }}>8</Text>
                                <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 2 }}>/</Text>
                                <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 2 }}>20</Text> */}
                                <ModalDropdown 
                                        options={['1 / 20', '2 / 20', '3 / 20', '4 / 20', '5 / 20', '6 / 20', '7 / 20', '8 / 20', '9 / 20', '10 / 20', '11 / 20', '12 / 20', '13 / 20', '14 / 20', '15 / 20', '16 / 20', '17 / 20', '18 / 20', '19 / 20', '20 / 20']}
                                        defaultValue='1 / 10'    
                                        dropdownStyle={{width:250, height: 'auto', elevation: 3}}
                                        dropdownTextStyle={{color: '#555', fontSize: 18}}
                                        textStyle={{color:'#fff', fontSize: 18}}
                                        >
                                </ModalDropdown>
                                <TouchableOpacity>
                                    <Icon name="caret-down" style={{ color: '#fff', fontSize: 22 }} />
                                </TouchableOpacity>
                            </View>
                        </Left>
                        <Right>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Icon name="pencil" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 10 }}
                                        onPress={() => this.setState({ visibleModal: 'backdropPressEditNote' })}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="flag" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="calculator" style={{ color: '#fff', fontSize: 24, paddingHorizontal: 10 }}
                                        onPress={() => this.setState({ visibleModal: 'backdropPressCalculator' })}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="adjust" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 10 }}
                                        onPress={() => this.setState({ visibleModal: 'backdropPressReverseColor' })}
                                    />
                                </TouchableOpacity>
                                {/* <TouchableOpacity>
                                    <Icon name="font" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 10 }} />
                                </TouchableOpacity> */}
                                <TouchableOpacity>
                                    <Icon name="th" style={{ color: '#f8f400', fontSize: 24, paddingHorizontal: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </Right>
                    </Header>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <Content>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Q.ID: </Text>
                                        <Text style={{ fontSize: 18 }}>{Math.round(this.state.Width)}</Text>
                                    </View>
                                </Left>

                                <Right>
                                    <CheckBox
                                        title='Mark this question'
                                        checked={this.state.Checked}
                                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                                    />
                                </Right>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, padding: 15 }}>
                                       Used for the treatment of atrial fibrillation associated with acute hemodynamic compromise.
                                    </Text>
                                </View>
                                
                            <View style={{ flexDirection: 'row', paddingHorizontal: 15, width: WINDOW_WIDTH }}>
                                <Lightbox underlayColor="black">
                                    <Image
                                        style={[styles.contain, { width: WINDOW_WIDTH, height: WINDOW_WIDTH }]}
                                        resizeMode="contain"
                                        source={require('./Images/large/image4.png')}
                                        style={{ width: 100, height: 100, margin: 10 }}
                                    />
                                </Lightbox>
                                <Lightbox underlayColor="white">
                                    <Image
                                        style={[styles.contain, { width: WINDOW_WIDTH, height: WINDOW_WIDTH }]}
                                        resizeMode="contain"
                                        source={require('./Images/large/image3.png')}
                                        style={{ width: 100, height: 100, margin: 10 }}
                                    />
                                </Lightbox>
                                <Lightbox underlayColor="white">
                                    <Image
                                        style={[styles.contain, { width: WINDOW_WIDTH, height: WINDOW_WIDTH }]}
                                        resizeMode="contain"
                                        source={require('./Images/large/image2.png')}
                                        style={{ width: 100, height: 100, margin: 10 }}
                                    />
                                </Lightbox>

                            </View>

                            <View style={{ marginHorizontal: 10 }}>
                                <Card>
                                    <View style={{ margin: 10 }}>
                                        <RadioButton.Group
                                            onValueChange={value => this.setState({ value })}
                                            value={this.state.value}

                                        >
                                            <View
                                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="A"
                                                    color='#0059a8'
                                                />
                                                <Text style={{ fontSize: 18, padding: 5 }}>A. </Text>
                                                <Text style={{ fontSize: 18, padding: 10 }}>Digitals</Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="B"
                                                    color='#0059a8'
                                                />
                                                <Text style={{ fontSize: 18, padding: 5 }}>B. </Text>
                                                <Text style={{ fontSize: 18, padding: 10 }}>Quinidine</Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="C"
                                                    color='#0059a8'
                                                />
                                                <Text style={{ fontSize: 18, padding: 5 }}>C. </Text>
                                                <Text style={{ fontSize: 18, padding: 10 }}>Propranolol</Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="D"
                                                    color='#0059a8'
                                                />
                                                <Text style={{ fontSize: 18, padding: 5 }}>D. </Text>
                                                <Text style={{ fontSize: 18, padding: 10 }}>Cardioversion</Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <RadioButton value="E"
                                                    color='#0059a8'
                                                />
                                                <Text style={{ fontSize: 18, padding: 5 }}>E. </Text>
                                                <Text style={{ fontSize: 18, padding: 10 }}>Cardiac pacemaker</Text>
                                            </View>
                                        </RadioButton.Group>
                                    </View>
                                </Card>
                            </View>
                           
                            <View style={{ width: 100, height: 40, marginHorizontal: '38%', marginVertical: 40 }}>
                                <Button title="Submit" type="solid"
                                    onPress={this._onPressButton}
                                />
                            </View>

                            <View style={[styles.submit, { marginHorizontal: 10 }]}>
                                <Card>
                                    <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Correct Answer</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Text style={{ fontSize: 18 }}>D. Cardioversion</Text>
                                    </CardItem>
                                </Card>
                                <Card>
                                    <CardItem style={{ backgroundColor: '#f3f3f3' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Explanation</Text>
                                    </CardItem>

                                    <CardItem>
                                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, width: WINDOW_WIDTH }}>
                                            <Image source={require('./Images/thumb/image4.png')}
                                                style={{ width: 100, height: 100, margin: 10 }} />
                                            <Image source={require('./Images/thumb/image2.png')}
                                                style={{ width: 100, height: 100, margin: 10 }} />
                                        </View>
                                    </CardItem>

                                    <CardItem>
                                        <Text style={{ fontSize: 18 }}>Cardioversion is indicated for patients with hemodynamic compromise. While drug therapy maybe added prior to cardioversion, the physician should not postpone cardioversion to wait for the effect of medication if the patient is in acute hemodynamic compromise.</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </Content>
                    </ScrollView>

                    <Footer>
                        <Left>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Icon name="arrow-left" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 20 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="arrow-right" style={{ color: '#ffffff', fontSize: 24, paddingHorizontal: 20 }} />
                                </TouchableOpacity>
                            </View>
                        </Left>
                        <Right>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Icon name="comment-o" style={{ color: '#fff', fontSize: 24, paddingHorizontal: 20 }}
                                        onPress={() => this.setState({ visibleModal: 'backdropPressFeedBack' })}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="play" style={{ color: '#fff', fontSize: 24, paddingHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="pause" style={{ color: '#fff', fontSize: 24, paddingHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="stop" style={{ color: '#fff', fontSize: 24, paddingHorizontal: 10 }}
                                        onPress={() => this.setState({ visibleModal: 'backdropPressEndTest' })}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 20 }}>02:00</Text>
                            </View>
                        </Right>
                    </Footer>
                    <Modal
                        isVisible={this.state.visibleModal === 'backdropPressEndTest'}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                        backdropColor="#111"
                        backdropOpacity={0.6}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                    >
                        {this.renderModalEndTest()}
                    </Modal>
                    <Modal
                        isVisible={this.state.visibleModal === 'backdropPressEditNote'}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                        backdropColor="#111"
                        backdropOpacity={0.6}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                    >
                        {this.renderModalEditNote()}
                    </Modal>
                    <Modal
                        isVisible={this.state.visibleModal === 'backdropPressFeedBack'}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                        backdropColor="#111"
                        backdropOpacity={0.6}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                    >
                        {this.renderModalFeedBack()}
                    </Modal>
                    <Modal
                        isVisible={this.state.visibleModal === 'backdropPressReverseColor'}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                        backdropColor="#111"
                        backdropOpacity={0}
                        animationIn="zoomInUp"
                        animationOut="zoomOutUp"
                        animationInTiming={300}
                        animationOutTiming={300}
                        backdropTransitionInTiming={300}
                        backdropTransitionOutTiming={300}
                    >
                        {this.renderModalReverseColor()}
                    </Modal>
                    <Modal
                        isVisible={this.state.visibleModal === 'backdropPressCalculator'}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                        backdropColor="#111"
                        backdropOpacity={0}
                        animationIn="zoomInUp"
                        animationOut="zoomOutUp"
                        animationInTiming={300}
                        animationOutTiming={300}
                        backdropTransitionInTiming={300}
                        backdropTransitionOutTiming={300}
                    >
                        {this.renderModalCalculator()}
                    </Modal>
                </Container>
            </View>
        );
    }
}

export default QbankApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contain: {
        flex: 1,
        width: WINDOW_WIDTH,
        height: WINDOW_WIDTH,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        paddingLeft: '10%',
        fontSize: 20, color: '#ffffff'
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

    txtHead: {
        fontSize: 18,
        color: '#555555',

    }
});