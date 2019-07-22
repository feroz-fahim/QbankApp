import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';

class ModalScreen extends Component {
  state = {
    visibleModalId: null,
  };
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
        <Icon name="form" style={{fontSize:24, color:tintColor}} />
    )
}
  renderModalContent = () => (
    <View style={styles.content}>
        {/* <TouchableOpacity>
            <Text style={{fontSize:18}}
                onPress={() => this.setState({ visibleModal: null })}
                title="Close"
            >X</Text>
        </TouchableOpacity> */}
        
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

//   handleOnScroll = event => {
//     this.setState({
//       scrollOffset: event.nativeEvent.contentOffset.y,
//     });
//   };

//   handleScrollTo = p => {
//     if (this.scrollViewRef) {
//       this.scrollViewRef.scrollTo(p);
//     }
//   };
  

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
                <Icon name="ellipsis1" style={{fontSize:30, color:'red'}}
                    onPress={() => this.setState({ visibleModal: 'backdropPress' })} 
                />
        </TouchableOpacity>
       
        
        {/* <Button style={{margin:5}}
          onPress={() => this.setState({ visibleModal: 'backdropPress' })}
          title="Close on backdrop press"
        /> */}

        
        
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
export default ModalScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  
});