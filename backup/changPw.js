import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

function Home() {
  return (
    <View>
      <TextInput
        style={{padding: 10, height: 40,marginVertical:15, borderColor: '#d1d1d1', borderWidth: 1, borderRadius:5}}
        placeholder='Enter your old Password'
        placeholderTextColor= '#d1d1d1'
      />
      <TextInput
        style={{padding: 10, height: 40,marginVertical:15, borderColor: '#d1d1d1', borderWidth: 1, borderRadius:5}}
        placeholder='Enter your new Password'
        placeholderTextColor= '#d1d1d1'
      />
      <TextInput
        style={{padding: 10, height: 40,marginVertical:15, borderColor: '#d1d1d1', borderWidth: 1, borderRadius:5}}
        placeholder='Conform Password'
        placeholderTextColor= '#d1d1d1'
      />
      <View>
        <TouchableOpacity>
           <Text style={{color: '#04b1ed', paddingLeft: 5}}>Forgot password?</Text>
       </TouchableOpacity>
      </View>
      <View style={{width:100, height: 40, marginHorizontal: '38%', marginVertical:40}}>
         <Button title="Save" type="solid"/>
      </View>
      <View style={styles.txtFormat}>
        <Text>
          <Text style={{color:'red'}}>Note:</Text>Your password must contain, at least 6 characters, upper and lower case letters, and numbers.
        </Text>
      </View>
    </View>
    );
}


function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>;
}


function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link
          to={`${match.url}/rendering`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Rendering with React</Text>
        </Link>
        <Link
          to={`${match.url}/components`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Components</Text>
        </Link>
        <Link
          to={`${match.url}/props-v-state`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
      />
    </View>
  );
}

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#04b1ed" style={[styles.navItem, {backgroundColor: '#04b1ed'}]}>
            <Text>Home</Text>
          </Link>
          
          <Link to="/topics" underlayColor="#04b1ed" style={[styles.navItem, {borderLeftWidth: 0}]}>
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20,
    
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1, borderColor: '#04b1ed',
    
    
  },
  subNavItem: {
    padding: 5,
    

  },
  topic: {
    textAlign: "center",
    
    fontSize: 15
  }
});

export default App;
