/**import React, { useEffect, useState } from "react";
import {Text,View,ScrollView} from 'react-native';

const App=()=>{

  const [data,setData] = useState([]);

  getAPIData=async()=>{
    //api call
    const url ="https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
   
  }

  useEffect(()=>{
   getAPIData();
  },[])
  return(
    <ScrollView>
      <Text></Text>
      <Text></Text>
      <Text style={{fontSize:30, textAlign:'center'}}>API Call</Text>
      {
        data.length?
        data.map((item)=><View style={{padding:"10",borderBottomColor:"#ccc",}}
        >
             <Text style={{fontSize:20,backgroundColor:"#ddd"}}> Id: {item.id}</Text>
             <Text style={{fontSize:20}}> Title: {item.title}</Text>
             
              </View>
              )
        :null
      }
    </ScrollView>
  )
}
export default App;*/


import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, Button, TextInput } from 'react-native';
  import React ,{useState} from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import { Home } from './components/Home';
  import { Login } from './components/Login';
const Stack = createNativeStackNavigator();

const App=()=>{

const btnAction =()=>{
  console.warn("btn pressed");
}
  return (<NavigationContainer>
   <Stack.Navigator
   screenOptions={{
     headerStyle:{ backgroundColor:'lightblue',},
     headerTitleStyle:{fontSize:30} 
      }}>
    <Stack.Screen name='Login' component={Login}
    options ={{
     headerRight:()=> <Button title='Right' onPress={btnAction}/>,
  
    }}/>
    <Stack.Screen name='Home' component={Home}/>  
   </Stack.Navigator>
  </NavigationContainer>)
};

export default App;