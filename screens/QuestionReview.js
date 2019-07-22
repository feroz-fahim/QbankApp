import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Container, Content, Card, CardItem} from 'native-base';
import { Button , CheckBox } from 'react-native-elements'
import Icon  from 'react-native-vector-icons/FontAwesome';
// import { Lightbox } from "react-modal-image";
// import { ScrollView } from "react-native-gesture-handler";
// import ModalImage from 'react-modal-image'
import Lightbox from 'react-native-lightbox';
// import ImageView from 'react-native-image-view';
// import ImageViewer from 'react-native-image-zoom-viewer';
// import { platform } from "os"; 

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
const closeLightbox = () => {
    this.state.open = true;
  };

class QuestionReview extends Component {
    
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="question" style={{fontSize:24, color: 'white', opacity: 0.8}} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          Checked: true,
          Unchecked: false,
          Width: WINDOW_WIDTH,
        };
      }
    //   toggleChange = () => {
    //     this.setState({
    //       Checked: true,
    //     });
    //   }
 
    render(){
        return (
            <View style={styles.container}>
                
                <Container>
                
                    <Header>
                    <Left>
                    <Icon name="navicon" style={{color: '#ffffff', fontSize:30}} 
                    onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <View style={styles.heading}>
                         <Text style={{ fontSize: 20, color: '#ffffff' }}>Question Review</Text>
                    </View>
                    <Right>
                        <Button  
                            title="Back" 
                            type="outline" 
                            buttonStyle={{borderColor: '#ffffff', borderWidth: 1}}
                            titleStyle={{color: '#ffffff'}}
                        />
                    </Right>
                   
                    </Header>
                    <Content>
                        <View style={{flexDirection: 'row'}}>
                            <Left>
                                <CheckBox
                                    title='Marked Question'
                                    checked={this.state.Checked}
                                    containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                                />
                            </Left>
                            
                            <Right style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Icon name="comment-o" style={{fontSize: 18}} />
                                <Text style={{paddingHorizontal: 5, lineHeight: 20, color: '#333333'}}>Feedback</Text>
                            </Right>
                        </View>
                        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Q.ID: </Text>
                            <Text style={{fontSize: 18}}>{Math.round(this.state.Width)}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 18, padding: 15}}>Used for the treatment of atrial fibrillation associated with acute hemodynamic compromise.</Text>
                        </View>
                        

                       {/* <Modal visible={true} transparent={true}>
                            <ImageViewer imageUrls={images}/>
                        </Modal> */}
                      
                        

                             {/* <ModalImage
                                    small="./Images/thumb/image4.png"
                                    large="./Images/large/image4.png"
                                    alt="Hello World!"
                            /> */}

                        <View  style={{flexDirection: 'row', paddingHorizontal: 15, width: WINDOW_WIDTH}}>
                            <Lightbox underlayColor="white">
                            <Image
                                style={[styles.contain, {width: WINDOW_WIDTH, height: WINDOW_WIDTH}]}
                                resizeMode="contain"
                                source={require('./Images/large/image4.png')}
                                style={{width: 100, height: 100, margin: 10}}
                            />
                            </Lightbox>
                            <Image source={require('./Images/thumb/image2.png')} 
                            style={{width: 80, height: 80, margin: 10}}/>
                            <Image source={require('./Images/thumb/image3.png')} 
                            style={{width: 80, height: 80, margin: 10}}/>
                            <Image source={require('./Images/thumb/image1.png')} 
                            style={{width: 80, height: 80, margin: 10}}/>
                        </View>
                        
                        <View style={{marginHorizontal: 10}}>
                        <Card>
                            <CardItem style={{backgroundColor: '#f3f3f3'}}>
                            <Text style={{fontSize: 18, fontWeight:'bold'}}>My Answer</Text>
                            </CardItem>
                            <CardItem>
                            <Text  style={{fontSize: 18}}>E. Cardiac pacemaker</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{backgroundColor: '#f3f3f3'}}>
                            <Text style={{fontSize: 18, fontWeight:'bold'}}>Answer Options</Text>
                            </CardItem>
                            <CardItem><Text  style={{fontSize: 18}}>A. Digitals</Text></CardItem>
                            <CardItem><Text  style={{fontSize: 18}}>B. Quinidine</Text></CardItem>    
                            <CardItem><Text  style={{fontSize: 18}}>C. Propranolol</Text></CardItem>
                            <CardItem><Text  style={{fontSize: 18}}>D. Cardioversion</Text></CardItem> 
                            <CardItem><Text  style={{fontSize: 18}}>E. Cardiac pacemaker</Text></CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{backgroundColor: '#f3f3f3'}}>
                            <Text style={{fontSize: 18, fontWeight:'bold'}}>Correct Answer</Text>
                            </CardItem>
                            <CardItem>
                            <Text  style={{fontSize: 18}}>D. Cardioversion</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{backgroundColor: '#f3f3f3'}}>
                            <Text style={{fontSize: 18, fontWeight:'bold'}}>Explanation</Text>
                            </CardItem>
                            
                            <CardItem>
                            <View  style={{flexDirection: 'row', paddingHorizontal: 15, width: WINDOW_WIDTH}}>
                                <Image source={require('./Images/thumb/image4.png')}
                                style={{width: 100, height: 100, margin: 10}} />
                                <Image source={require('./Images/thumb/image2.png')} 
                                style={{width: 100, height: 100, margin: 10}}/>
                            </View>
                            </CardItem>
                            
                            <CardItem>
                            <Text  style={{fontSize: 18}}>Cardioversion is indicated for patients with hemodynamic compromise. While drug therapy maybe added prior to cardioversion, the physician should not postpone cardioversion to wait for the effect of medication if the patient is in acute hemodynamic compromise.</Text>
                            </CardItem>
                        </Card>
                        </View>
                    </Content>
                </Container>
               
            </View>
        );
    }
}

export default QuestionReview;

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
        fontSize:18,
        color: '#555555',
        
    }
  });