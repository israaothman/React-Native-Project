/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';


function Welcome(props) {
  // let myName = "Ahmad";

  return (
    <>
      <Text style={style.red} > Welcome {props.myName} to our course, your age is {props.age}</Text>
    </>
  );
}


class Welcome2 extends React.Component {

  state = {
    counter : 0,
  }
  

  render() {
    return (
      <View>
        <Text style={style.red} >the counter = {this.state.counter } </Text>
        <Button title='+' onPress={()=> this.setState({counter : this.state.counter + 1 })}/>
      </View>
    );
  }
}


const Example1 = () => {
  return (
    <View>
      <View style={{ width: '100%', height: 100, backgroundColor: 'powderblue' }} />
      <View style={{ width: '50%', height: 150, backgroundColor: 'skyblue' }} />
      <View style={{ width: '30%', height: 200, backgroundColor: 'steelblue' }} />
    </View>
  );
};


function App(): React.JSX.Element {

  return (
    <>
      <View>
         {/* <Text style={{ margin: 20, fontSize: 50 }}>Hello  </Text>
        <Text style={{ margin: 20, fontSize: 50 }}> World </Text>

        <Welcome myName="Ali" />
        <Welcome myName="Ahmad" age='15' />
        <Welcome myName="Omar" /> 
*/}

        <Welcome2 />  

        {/* <Example1 /> */}

         {/* <Text style={style.red}>hello</Text>
        <Text style={style.blueBig} > Welcome</Text>
        <Text style={[style.blueBig, style.red]}> Test </Text>
        <Image style={style.image} source={require('./flower.jpg')} />
        <Image style={style.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s'}} /> 
        */}
      </View>
    </>
  );
}


let style = StyleSheet.create({

  red: {
    color: 'red',
    margin: 50,
    fontSize: 20,
  },

  blueBig: {
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold'
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 50
  }
});

export default App;
